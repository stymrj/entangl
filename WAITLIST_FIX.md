# Waitlist Storage Fix

## Problem
The edge function was trying to store waitlist signups in MongoDB, but the project uses Supabase (PostgreSQL).

## Solution Applied

### 1. Updated Edge Function
- Changed from MongoDB to Supabase client
- Now uses `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` environment variables
- Made email sending optional (won't fail the request if RESEND_API_KEY is not configured)

### 2. Created Database Migration
- Created a `waitlist` table in PostgreSQL
- Added proper indexes for performance
- Enabled Row Level Security (RLS)
- Added automatic timestamp updates

## How to Apply the Changes

### For Local Development:

1. **Start Supabase locally:**
   ```bash
   npx supabase start
   ```

2. **Apply the migration:**
   ```bash
   npx supabase db reset
   ```
   
   Or if you want to apply only the new migration:
   ```bash
   npx supabase migration up
   ```

3. **Deploy the edge function:**
   ```bash
   npx supabase functions deploy waitlist-signup
   ```

### For Production (Supabase Cloud):

1. **Link your project:**
   ```bash
   npx supabase link --project-ref quyxwsloavenbftawsti
   ```

2. **Push the migration to production:**
   ```bash
   npx supabase db push
   ```

3. **Deploy the edge function:**
   ```bash
   npx supabase functions deploy waitlist-signup
   ```

4. **Set environment variables in Supabase Dashboard:**
   - Go to Project Settings > Edge Functions
   - Add `RESEND_API_KEY` (optional - for sending emails)
   - `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are automatically available

## Database Schema

```sql
Table: waitlist
- id (uuid, primary key)
- email (text, unique, not null)
- source (text, default 'website')
- status (text, default 'pending')
- created_at (timestamp with time zone)
- updated_at (timestamp with time zone)
```

## Testing

After applying the changes, test the waitlist signup:

1. Open your app
2. Try to join the waitlist
3. Check the Supabase dashboard > Table Editor > waitlist to verify the data is stored

You can also check the function logs:
```bash
npx supabase functions logs waitlist-signup
```

## Notes

- The edge function no longer requires MongoDB connection strings
- Email sending is now optional - the signup will work even without Resend API key configured
- All data is now stored in your Supabase PostgreSQL database
- The migration is idempotent (safe to run multiple times)
