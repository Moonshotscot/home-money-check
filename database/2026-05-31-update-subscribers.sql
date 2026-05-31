-- Home Money Check updates signup draft
-- Paste into the Supabase SQL Editor after review.

create table if not exists public.update_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  first_name text,
  email text not null,
  postcode text,
  interests text[] not null default '{}',
  consent_updates boolean not null default true,
  source_page text,
  status text not null default 'Active',
  unsubscribed_at timestamptz
);

create unique index if not exists update_subscribers_email_key
on public.update_subscribers (lower(email));

create index if not exists update_subscribers_status_idx
on public.update_subscribers (status);

create index if not exists update_subscribers_created_at_idx
on public.update_subscribers (created_at desc);

drop trigger if exists set_update_subscribers_updated_at on public.update_subscribers;
create trigger set_update_subscribers_updated_at
before update on public.update_subscribers
for each row execute function public.set_updated_at();

alter table public.update_subscribers enable row level security;

drop policy if exists "Admins can read update subscribers" on public.update_subscribers;
create policy "Admins can read update subscribers"
on public.update_subscribers
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

drop policy if exists "Admins can manage update subscribers" on public.update_subscribers;
create policy "Admins can manage update subscribers"
on public.update_subscribers
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

grant select, insert, update, delete on table public.update_subscribers to authenticated;

create or replace function public.upsert_update_subscriber(
  p_first_name text,
  p_email text,
  p_postcode text,
  p_interests text[],
  p_consent_updates boolean,
  p_source_page text
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_id uuid;
  v_first_name text;
  v_email text;
  v_postcode text;
  v_source_page text;
  v_interests text[];
begin
  v_first_name := trim(coalesce(p_first_name, ''));
  v_email := lower(trim(coalesce(p_email, '')));
  v_postcode := trim(coalesce(p_postcode, ''));
  v_source_page := trim(coalesce(p_source_page, ''));
  v_interests := coalesce(p_interests, '{}');

  if coalesce(p_consent_updates, false) is not true then
    raise exception 'Updates consent is required.';
  end if;

  if nullif(v_first_name, '') is null then
    raise exception 'First name is required.';
  end if;

  if length(v_first_name) > 100 then
    raise exception 'First name must be 100 characters or fewer.';
  end if;

  if nullif(v_email, '') is null then
    raise exception 'Email is required.';
  end if;

  if length(v_email) > 254 then
    raise exception 'Email must be 254 characters or fewer.';
  end if;

  if length(v_postcode) > 20 then
    raise exception 'Postcode must be 20 characters or fewer.';
  end if;

  if length(v_source_page) > 200 then
    raise exception 'Source page must be 200 characters or fewer.';
  end if;

  if cardinality(v_interests) > 12 then
    raise exception 'Too many interests selected.';
  end if;

  select array_agg(trim(interest))
  into v_interests
  from unnest(v_interests) as interest
  where nullif(trim(interest), '') is not null
    and length(trim(interest)) <= 80;

  v_interests := coalesce(v_interests, '{}');

  insert into public.update_subscribers (
    first_name,
    email,
    postcode,
    interests,
    consent_updates,
    source_page,
    status,
    unsubscribed_at
  )
  values (
    v_first_name,
    v_email,
    nullif(v_postcode, ''),
    v_interests,
    true,
    nullif(v_source_page, ''),
    'Active',
    null
  )
  on conflict ((lower(email)))
  do update set
    first_name = excluded.first_name,
    postcode = excluded.postcode,
    interests = excluded.interests,
    consent_updates = true,
    source_page = excluded.source_page,
    status = 'Active',
    unsubscribed_at = null,
    updated_at = now()
  returning id into v_id;

  return v_id;
end;
$$;

grant execute on function public.upsert_update_subscriber(
  text,
  text,
  text,
  text[],
  boolean,
  text
) to anon, authenticated;
