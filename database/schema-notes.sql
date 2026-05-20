-- Home Money Check Supabase schema notes
-- Documentation only. Do not paste secrets, passwords, API keys, or .env values here.
--
-- The live project SQL has been applied manually in the Supabase SQL Editor.
-- Treat this file as the project record of the intended database shape and RLS rules.

-- ---------------------------------------------------------------------------
-- updated_at trigger helper
-- ---------------------------------------------------------------------------

-- Used by editable/admin-managed tables to keep updated_at current.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- enquiries
-- ---------------------------------------------------------------------------

-- Lead capture table used by the public forms and Admin v1.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  email text not null,
  mobile text not null,
  postcode text,
  selected_check text not null,
  source_page text not null,
  message text,
  consent_contact boolean not null default false,
  consent_updates boolean not null default false,
  status text not null default 'New',
  admin_notes text,
  last_contacted_at timestamptz,
  converted_at timestamptz
);

drop trigger if exists set_enquiries_updated_at on public.enquiries;
create trigger set_enquiries_updated_at
before update on public.enquiries
for each row execute function public.set_updated_at();

alter table public.enquiries enable row level security;

-- Public visitors may only insert enquiries.
create policy "Public can insert enquiries"
on public.enquiries
for insert
to anon
with check (true);

-- Authenticated admins may read enquiries.
create policy "Admins can read enquiries"
on public.enquiries
for select
to authenticated
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
       or au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
);

-- Authenticated admins may update enquiry status and notes.
create policy "Admins can update enquiries"
on public.enquiries
for update
to authenticated
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
       or au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
       or au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
);

-- ---------------------------------------------------------------------------
-- admin_users
-- ---------------------------------------------------------------------------

-- Simple allow-list checked by the Admin UI and by RLS policies.
-- Depending on the applied migration, either id or user_id may reference auth.users(id).
-- The app checks id, user_id, and email to support the current project shape.
create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique,
  email text unique,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

-- Authenticated users may check whether their own account is in admin_users.
create policy "Authenticated users can check own admin access"
on public.admin_users
for select
to authenticated
using (
  user_id = auth.uid()
  or id = auth.uid()
  or email = auth.jwt() ->> 'email'
);

-- ---------------------------------------------------------------------------
-- campaign_panel
-- ---------------------------------------------------------------------------

-- Editable homepage campaign panel used by Admin v2 and the public homepage.
create table if not exists public.campaign_panel (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  label text,
  title text,
  title_accent text,
  title_main text,
  body text,
  middle_content text,
  lower_text text,
  button_label text,
  button_url text,
  is_live boolean not null default true,
  starts_at timestamptz,
  ends_at timestamptz
);

drop trigger if exists set_campaign_panel_updated_at on public.campaign_panel;
create trigger set_campaign_panel_updated_at
before update on public.campaign_panel
for each row execute function public.set_updated_at();

alter table public.campaign_panel enable row level security;

-- Public visitors may read only live/current campaign panel rows.
create policy "Public can read live campaign panel"
on public.campaign_panel
for select
to anon
using (
  is_live = true
  and (starts_at is null or starts_at <= now())
  and (ends_at is null or ends_at >= now())
);

-- Authenticated admins may manage campaign panel rows.
create policy "Admins can manage campaign panel"
on public.campaign_panel
for all
to authenticated
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
       or au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
       or au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
);

-- Seed data note:
-- Seed one campaign_panel row for the homepage, for example:
-- label = 'Current campaign'
-- title = '£20K Giveaway'
-- title_accent = '£20K'
-- title_main = 'Giveaway'
-- is_live = true
-- starts_at/ends_at may be null for always-current content.

-- ---------------------------------------------------------------------------
-- noticeboard_items
-- ---------------------------------------------------------------------------

-- Editable homepage noticeboard items used by Admin v2 and the public homepage.
create table if not exists public.noticeboard_items (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  title text not null,
  label text,
  body text,
  button_label text,
  button_url text,
  category text,
  accent_colour text default '#EADFFD',
  is_live boolean not null default true,
  display_order integer not null default 10,
  starts_at timestamptz,
  ends_at timestamptz
);

drop trigger if exists set_noticeboard_items_updated_at on public.noticeboard_items;
create trigger set_noticeboard_items_updated_at
before update on public.noticeboard_items
for each row execute function public.set_updated_at();

alter table public.noticeboard_items enable row level security;

-- Public visitors may read only live/current noticeboard rows.
create policy "Public can read live noticeboard items"
on public.noticeboard_items
for select
to anon
using (
  is_live = true
  and (starts_at is null or starts_at <= now())
  and (ends_at is null or ends_at >= now())
);

-- Authenticated admins may manage noticeboard rows.
create policy "Admins can manage noticeboard items"
on public.noticeboard_items
for all
to authenticated
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
       or au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
       or au.id = auth.uid()
       or au.email = auth.jwt() ->> 'email'
  )
);

-- Seed data note:
-- Seed up to three live noticeboard_items for the homepage.
-- The homepage displays the first 3 live/current rows ordered by:
-- display_order ascending, then created_at descending.
-- Existing starter labels include Featured, Home, and Business.
