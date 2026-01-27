import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { Resend } from "npm:resend@2.0.0";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Change to your frontend URL in production
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-auth-token",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface WaitlistRequest {
  email: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Supabase credentials are not configured");
    return new Response(
      JSON.stringify({ error: "Database not configured" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

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

    const sanitizedEmail = email.trim().toLowerCase();
    console.log(`Processing waitlist signup for: ${sanitizedEmail}`);

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if email already exists
    const { data: existingEntry, error: checkError } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", sanitizedEmail)
      .maybeSingle();

    if (checkError) {
      console.error("Error checking existing entry:", checkError);
      throw new Error(`Database error: ${checkError.message}`);
    }

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
    const { data: insertedData, error: insertError } = await supabase
      .from("waitlist")
      .insert({
        email: sanitizedEmail,
        source,
        status: "pending",
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting waitlist entry:", insertError);
      throw new Error(`Failed to save to waitlist: ${insertError.message}`);
    }

    console.log(`Waitlist entry created with id: ${insertedData.id}`);

    // Send confirmation email via Resend (optional)
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Entangl <hello@entangl.com>", // TODO: Replace with your verified domain
          to: [sanitizedEmail],
          subject: "Welcome to the Entangl Waitlist! 💕",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Welcome to Entangl! 💕</h2>
              <p>Thank you for joining our waitlist!</p>
              <p>You're now part of an exclusive group who will be among the first to experience Entangl when we launch.</p>
              <p>We'll keep you updated on our progress and notify you as soon as we're ready to go live.</p>
              <p>In the meantime, feel free to share Entangl with friends who might be interested!</p>
              <br>
              <p>Best regards,<br>The Entangl Team 🚀</p>
            </div>
          `,
        });
        console.log("Confirmation email sent");
      } catch (emailError) {
        console.error("Error sending email (non-fatal):", emailError);
        // Don't fail the request if email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "You're on the list! Check your inbox 💕",
        emailSent: !!resendApiKey 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error in waitlist-signup function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
