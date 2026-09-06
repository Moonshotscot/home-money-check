# CPH integration

HMC is the screening inbox. New enquiries remain here until an administrator deliberately selects **Send to CPH**. Mark spam, unsuitable and duplicate enquiries in HMC; they never enter CPH.

The pending-count endpoint returns only the number of enquiries whose status is `New`. It does not expose names or contact details.

Approved enquiries are sent to CPH as **Home Utilities** cases. The HMC enquiry UUID is the transfer reference, so a retry cannot create a duplicate CPH case.

## Server configuration

Set `SUPABASE_SERVICE_ROLE_KEY` only in the HMC server environment. Set the same long random `CPH_HMC_INTEGRATION_SECRET` in HMC and CPH. `CPH_HMC_WEBHOOK_URL` defaults to the production CPH intake shown in `.env.example`.
