# Contact Form Setup

This contact form saves submissions to a Supabase database and sends email notifications.

## Database Setup

1. **Run the migration** in Supabase SQL Editor:
   ```bash
   # The migration file is located at:
   supabase/migrations/20240128000000_create_contact_submissions_table.sql
   ```
   
   Or run it directly in Supabase SQL Editor by copying the contents of that file.

2. **Verify the table was created**:
   - Go to Supabase Dashboard → Table Editor
   - You should see a new table called `contact_submissions`

## Edge Function Deployment

### Option 1: Using Supabase CLI (Recommended)

```bash
# Deploy the contact-form function
supabase functions deploy contact-form
```

### Option 2: Using Supabase Dashboard

1. Go to Supabase Dashboard → Edge Functions
2. Click "Create a new function"
3. Name it `contact-form`
4. Copy the contents from `supabase/functions/contact-form/index.ts`
5. Click "Deploy"

## Environment Variables

The edge function uses these environment variables (automatically available):
- `SUPABASE_URL` - Auto-configured
- `SUPABASE_SERVICE_ROLE_KEY` - Auto-configured
- `RESEND_API_KEY` - Optional, for email notifications

### Add Resend API Key (Optional)

If you want email notifications:

1. Go to Supabase Dashboard → Edge Functions → Secrets
2. Add new secret:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key from https://resend.com

**Note:** Email notifications are optional. The form will still save to the database even without the Resend API key.

## How It Works

1. **User submits form** → Data is sent to the edge function
2. **Edge function validates** the data (all fields required, email format)
3. **Data is saved** to `contact_submissions` table in Supabase
4. **Email notifications sent** (if `RESEND_API_KEY` is configured):
   - Admin receives notification at `support@entangl.in`
   - User receives auto-reply confirmation

## View Submissions

Go to Supabase Dashboard → Table Editor → `contact_submissions` to view all form submissions.

Each submission includes:
- `id` - Unique identifier
- `name` - Submitter's name
- `email` - Submitter's email
- `subject` - Message subject
- `message` - Full message
- `status` - Submission status (default: 'new')
- `created_at` - When submitted
- `updated_at` - Last updated

## Frontend Integration

The contact form is located at: `src/pages/ContactUs.tsx`

It automatically:
- Shows loading state while submitting
- Displays error messages if something goes wrong
- Shows success message after submission
- Resets form after successful submission
- Disables inputs during submission to prevent double-submits

## Testing

1. Fill out the contact form on your site
2. Check Supabase Table Editor for the new entry
3. If email is configured, check your inbox for notifications

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify edge function is deployed
- Check edge function logs in Supabase Dashboard

### Emails not sending?
- Verify `RESEND_API_KEY` is set in Edge Function secrets
- Check edge function logs for email errors
- Verify email addresses in the edge function code

### Database errors?
- Ensure migration was run successfully
- Verify RLS policies are enabled
- Check edge function logs for specific error messages
