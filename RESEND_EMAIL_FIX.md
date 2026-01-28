# Resend Email Fix Guide

## Problem
Resend was not sending emails because the **"from" addresses** were not verified.

## Changes Made

### 1. Updated Email Addresses
Changed both functions to use `onboarding@resend.dev` (Resend's test domain):
- **Contact form**: `support@entangl.in` → `onboarding@resend.dev`
- **Waitlist**: `support@entangl.in` → `onboarding@resend.dev`

### 2. Added Better Logging
Enhanced error logging to help debug email issues:
- Logs when emails are being sent
- Logs success/failure with details
- Shows detailed error messages

### 3. Added reply_to in Contact Form
Admin emails now have `reply_to: email` so you can reply directly to users.

## Next Steps

### Option 1: Keep Using Test Domain (Quick Fix)
The test domain `onboarding@resend.dev` works immediately but:
- ⚠️ Not professional (shows "onboarding@resend.dev" as sender)
- ⚠️ Limited to 100 emails/day
- ✅ Good for testing

### Option 2: Verify Your Domain (Recommended for Production)

1. **Go to Resend Dashboard** → https://resend.com/domains
2. **Add your domain** (e.g., `entangl.in`)
3. **Add DNS records** as shown in Resend dashboard:
   - Add SPF record
   - Add DKIM records
   - Wait for verification (can take up to 48 hours)
4. **Update the code** once verified:

```typescript
// In contact-form/index.ts
from: "Entangl Support <support@entangl.in>"

// In waitlist-signup/index.ts
from: "Entangl <support@entangl.in>"
```

### Option 3: Verify Individual Email Address

If you can't access DNS settings:
1. Go to Resend → Email Addresses
2. Add individual emails (e.g., `support@entangl.in`)
3. Verify via email confirmation
4. Update code with verified address

## Deploy the Changes

```bash
# Deploy the updated functions
supabase functions deploy contact-form
supabase functions deploy waitlist-signup
```

## Test the Emails

1. **Submit a contact form** on your website
2. **Sign up for waitlist**
3. **Check Supabase logs**:
   - Go to Supabase Dashboard → Edge Functions → Logs
   - Look for "Sending admin notification email..." messages
   - Check for any error details

4. **Check your email inbox** (including spam folder)

## Troubleshooting

### Still Not Receiving Emails?

1. **Check Resend API Key**:
   ```bash
   # Make sure RESEND_API_KEY is set in Supabase secrets
   supabase secrets list
   ```

2. **Check Supabase Function Logs**:
   - Look for "RESEND_API_KEY not configured" message
   - Look for "Email sending failed" errors

3. **Test Resend API Key**:
   - Create a test in Resend dashboard
   - Send a test email manually

4. **Verify Email Format**:
   - User emails must be valid format
   - Check spam/junk folders

### Common Issues

- **"Domain not verified"**: You're using an unverified domain
  - Solution: Use `onboarding@resend.dev` or verify your domain

- **"Invalid API key"**: Wrong/missing API key
  - Solution: Check Supabase secrets

- **"Rate limit exceeded"**: Too many emails
  - Solution: Wait or upgrade Resend plan

## Current Configuration

✅ Using `onboarding@resend.dev` (test domain)
✅ Enhanced error logging
✅ Contact form sends 2 emails (admin + user)
✅ Waitlist sends 1 email (user confirmation)
✅ Errors won't break the form submission

## Recommended Production Setup

Once your domain is verified:
```typescript
// Contact Form
from: "Entangl Support <support@entangl.in>"
reply_to: email // Keep this!

// Waitlist
from: "Entangl <support@entangl.in>"
```

This gives you:
- ✅ Professional appearance
- ✅ No rate limits (on paid plan)
- ✅ Better deliverability
- ✅ Custom branding
