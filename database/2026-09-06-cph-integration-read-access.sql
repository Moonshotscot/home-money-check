-- Allow the server-only Home Money Check integration to count enquiries.
-- Row-level security remains in force for browser and authenticated user access.
grant select on table public.enquiries to service_role;
