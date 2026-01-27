import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { MongoClient } from "mongodb";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const mongoUri = Deno.env.get("MONGODB_URI");
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  if (!mongoUri) {
    console.error("MONGODB_URI is not configured");
    return new Response(
      JSON.stringify({ error: "Database not configured" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured");
    return new Response(
      JSON.stringify({ error: "Email service not configured" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  let client: MongoClient | null = null;

  try {
    const { email, source = "website" }: WaitlistRequest = await req.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize email
    const sanitizedEmail = email.trim().toLowerCase();

    console.log(`Processing waitlist signup for: ${sanitizedEmail}`);

    // Connect to MongoDB
    client = new MongoClient(mongoUri);
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("entangl");
    const waitlistCollection = db.collection("waitlist");

    // Check if email already exists
    const existingEntry = await waitlistCollection.findOne({ email: sanitizedEmail });
    if (existingEntry) {
      console.log(`Email already exists: ${sanitizedEmail}`);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "You're already on the waitlist!",
          alreadyExists: true 
        }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Insert new waitlist entry
    const now = new Date();
    const result = await waitlistCollection.insertOne({
      email: sanitizedEmail,
      source,
      createdAt: now,
      updatedAt: now,
      status: "pending",
    });

    console.log(`Waitlist entry created with id: ${result.insertedId}`);

    // Send confirmation email via Resend
    const resend = new Resend(resendApiKey);

    const emailResponse = await resend.emails.send({
      from: "Entangl <onboarding@resend.dev>", // Use your verified domain in production
      to: [sanitizedEmail],
      subject: "Welcome to the Entangl Waitlist! 💕",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #faf9f7;">
            <table cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <tr>
                <td style="text-align: center; padding-bottom: 30px;">
                  <div style="display: inline-block; width: 48px; height: 48px; background: linear-gradient(135deg, #e85d8c 0%, #d64a7a 50%, #9966cc 100%); border-radius: 12px; line-height: 48px; color: white; font-weight: bold; font-size: 24px;">E</div>
                  <h1 style="margin: 16px 0 0 0; color: #1a1a2e; font-size: 24px; font-weight: 700;">Entangl</h1>
                </td>
              </tr>
              <tr>
                <td style="background: white; border-radius: 20px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                  <h2 style="margin: 0 0 16px 0; color: #1a1a2e; font-size: 28px; font-weight: 700; text-align: center;">
                    You're on the list! 🎉
                  </h2>
                  <p style="margin: 0 0 24px 0; color: #666; font-size: 16px; line-height: 1.6; text-align: center;">
                    Thank you for joining the Entangl waitlist. We're building something special for professionals like you.
                  </p>
                  
                  <div style="background: linear-gradient(135deg, rgba(232, 93, 140, 0.1) 0%, rgba(153, 102, 204, 0.1) 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                    <h3 style="margin: 0 0 12px 0; color: #1a1a2e; font-size: 18px; font-weight: 600;">What's next?</h3>
                    <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px; line-height: 1.8;">
                      <li>We'll verify your professional profile</li>
                      <li>You'll get early access when we launch</li>
                      <li>Find your perfect professional match</li>
                    </ul>
                  </div>
                  
                  <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6; text-align: center;">
                    In the meantime, follow us on social media to stay updated on our progress.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="text-align: center; padding-top: 30px;">
                  <p style="margin: 0; color: #999; font-size: 12px;">
                    © 2026 Entangl. All rights reserved.<br>
                    123 Market Street, San Francisco, CA 94105
                  </p>
                  <p style="margin: 12px 0 0 0;">
                    <a href="#" style="color: #e85d8c; text-decoration: none; font-size: 12px;">Unsubscribe</a>
                  </p>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    console.log("Confirmation email sent:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "You're on the list! Check your inbox 💕",
        emailSent: true 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error in waitlist-signup function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } finally {
    if (client) {
      await client.close();
      console.log("MongoDB connection closed");
    }
  }
};

serve(handler);
