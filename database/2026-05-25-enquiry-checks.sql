-- Home Money Check multi-check enquiry draft
-- Paste into the Supabase SQL Editor after review.
-- This keeps public.enquiries as the parent enquiry table and adds child rows
-- in public.enquiry_checks for each requested check.

-- ---------------------------------------------------------------------------
-- enquiry_checks
-- ---------------------------------------------------------------------------

create table if not exists public.enquiry_checks (
  id uuid primary key default gen_random_uuid(),
  enquiry_id uuid not null references public.enquiries(id) on delete cascade,
  check_key text not null,
  check_label text not null,
  status text not null default 'New',
  assigned_to text,
  partner_id uuid,
  source_page text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint enquiry_checks_enquiry_id_check_key_key unique (enquiry_id, check_key)
);

create index if not exists enquiry_checks_enquiry_id_idx
on public.enquiry_checks (enquiry_id);

create index if not exists enquiry_checks_check_key_idx
on public.enquiry_checks (check_key);

create index if not exists enquiry_checks_status_idx
on public.enquiry_checks (status);

create index if not exists enquiry_checks_assigned_to_idx
on public.enquiry_checks (assigned_to);

drop trigger if exists set_enquiry_checks_updated_at on public.enquiry_checks;
create trigger set_enquiry_checks_updated_at
before update on public.enquiry_checks
for each row execute function public.set_updated_at();

alter table public.enquiry_checks enable row level security;

-- Public visitors should create child check rows through create_enquiry_with_checks.
-- No direct anon insert policy is added for enquiry_checks.

drop policy if exists "Admins can read enquiry checks" on public.enquiry_checks;
create policy "Admins can read enquiry checks"
on public.enquiry_checks
for select
to authenticated
using (
  exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
);

drop policy if exists "Admins can manage enquiry checks" on public.enquiry_checks;
create policy "Admins can manage enquiry checks"
on public.enquiry_checks
for all
to authenticated
using (
  exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
);

grant select on table public.enquiry_checks to authenticated;
grant insert, update, delete on table public.enquiry_checks to authenticated;

-- ---------------------------------------------------------------------------
-- Atomic parent + child insert RPC
-- ---------------------------------------------------------------------------

create or replace function public.create_enquiry_with_checks(
  p_name text,
  p_email text,
  p_mobile text,
  p_postcode text,
  p_source_page text,
  p_message text,
  p_consent_contact boolean,
  p_consent_updates boolean,
  p_requested_checks jsonb
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_enquiry_id uuid;
  v_first_check_label text;
  v_valid_check_count integer;
  v_name text;
  v_email text;
  v_mobile text;
  v_postcode text;
  v_source_page text;
  v_message text;
  v_requested_check_count integer;
begin
  v_name := trim(coalesce(p_name, ''));
  v_email := trim(coalesce(p_email, ''));
  v_mobile := trim(coalesce(p_mobile, ''));
  v_postcode := trim(coalesce(p_postcode, ''));
  v_source_page := trim(coalesce(p_source_page, ''));
  v_message := trim(coalesce(p_message, ''));

  if coalesce(p_consent_contact, false) is not true then
    raise exception 'Contact consent is required.';
  end if;

  if nullif(v_name, '') is null then
    raise exception 'Name is required.';
  end if;

  if length(v_name) > 150 then
    raise exception 'Name must be 150 characters or fewer.';
  end if;

  if nullif(v_email, '') is null then
    raise exception 'Email is required.';
  end if;

  if length(v_email) > 254 then
    raise exception 'Email must be 254 characters or fewer.';
  end if;

  if nullif(v_mobile, '') is null then
    raise exception 'Mobile is required.';
  end if;

  if length(v_mobile) > 40 then
    raise exception 'Mobile must be 40 characters or fewer.';
  end if;

  if length(v_postcode) > 20 then
    raise exception 'Postcode must be 20 characters or fewer.';
  end if;

  if nullif(v_source_page, '') is null then
    raise exception 'Source page is required.';
  end if;

  if length(v_source_page) > 200 then
    raise exception 'Source page must be 200 characters or fewer.';
  end if;

  if length(v_message) > 2000 then
    raise exception 'Message must be 2000 characters or fewer.';
  end if;

  if p_requested_checks is null or jsonb_typeof(p_requested_checks) <> 'array' then
    raise exception 'Requested checks must be an array.';
  end if;

  v_requested_check_count := jsonb_array_length(p_requested_checks);

  if v_requested_check_count = 0 then
    raise exception 'At least one requested check is required.';
  end if;

  if v_requested_check_count > 12 then
    raise exception 'No more than 12 requested checks can be submitted.';
  end if;

  select count(*)
  into v_valid_check_count
  from jsonb_to_recordset(p_requested_checks) as requested(key text, label text)
  where nullif(trim(coalesce(requested.key, '')), '') is not null
    and nullif(trim(coalesce(requested.label, '')), '') is not null
    and length(trim(coalesce(requested.key, ''))) <= 80
    and length(trim(coalesce(requested.label, ''))) <= 120;

  if v_valid_check_count <> v_requested_check_count then
    raise exception 'Every requested check must include a key and label within the allowed length.';
  end if;

  v_first_check_label := nullif(trim(p_requested_checks -> 0 ->> 'label'), '');

  if v_first_check_label is null then
    raise exception 'The first requested check must include a label.';
  end if;

  insert into public.enquiries (
    name,
    email,
    mobile,
    postcode,
    selected_check,
    source_page,
    message,
    consent_contact,
    consent_updates
  )
  values (
    v_name,
    v_email,
    v_mobile,
    nullif(v_postcode, ''),
    v_first_check_label,
    v_source_page,
    nullif(v_message, ''),
    p_consent_contact,
    coalesce(p_consent_updates, false)
  )
  returning id into v_enquiry_id;

  with requested as (
    select
      lower(trim(item.value ->> 'key')) as check_key,
      trim(item.value ->> 'label') as check_label,
      item.ordinality
    from jsonb_array_elements(p_requested_checks)
      with ordinality as item(value, ordinality)
  ),
  deduped as (
    select distinct on (check_key)
      check_key,
      check_label
    from requested
    order by check_key, ordinality
  )
  insert into public.enquiry_checks (
    enquiry_id,
    check_key,
    check_label,
    source_page
  )
  select
    v_enquiry_id,
    check_key,
    check_label,
    v_source_page
  from deduped;

  return v_enquiry_id;
end;
$$;

revoke all on function public.create_enquiry_with_checks(
  text,
  text,
  text,
  text,
  text,
  text,
  boolean,
  boolean,
  jsonb
) from public;

grant execute on function public.create_enquiry_with_checks(
  text,
  text,
  text,
  text,
  text,
  text,
  boolean,
  boolean,
  jsonb
) to anon, authenticated;
