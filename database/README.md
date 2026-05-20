# Home Money Check Database Notes

Home Money Check uses Supabase as the backend for lead enquiries, admin users, the campaign panel, and noticeboard items.

Local development requires a `.env.local` file with these public client variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Do not commit service role keys, passwords, or local environment files. The public publishable key is the only Supabase key expected by the browser client.

The SQL setup documented in `schema-notes.sql` was applied manually through the Supabase SQL Editor. Treat that file as documentation for the current setup, not as an automatic migration runner.

Before launch, add the required public legal and compliance pages:

- Privacy Policy
- Terms
- Cookie Policy, if needed
- Clear disclaimers for Utility Warehouse-related enquiries, prize draw handling, mortgages, and insurance/protection
