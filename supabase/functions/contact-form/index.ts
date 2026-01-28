import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase credentials");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert contact form submission into database
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: "new",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      throw error;
    }

    // Send notification email to admin (optional, requires RESEND_API_KEY)
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        
        // Send notification to admin
        console.log("Sending admin notification email...");
        const adminEmail = await resend.emails.send({
          from: "Entangl Support <support@entangl.in>", // Using verified domain
          to: ["support@entangl.in"],
          reply_to: email, // Allow admin to reply directly to the user
          subject: `New Contact Form: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          `,
        });
        console.log("Admin email sent:", adminEmail);

        // Send auto-reply to user
        console.log("Sending user confirmation email...");
        const userEmail = await resend.emails.send({
          from: "Entangl Support <support@entangl.in>", // Using verified domain
          to: [email],
          subject: "We've received your message",
          html: `
            <h2>Thank you for contacting Entangl!</h2>
            <p>Hi ${name},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p>Best regards,<br>The Entangl Team</p>
          `,
        });
        console.log("User confirmation email sent:", userEmail);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        console.error("Email error details:", JSON.stringify(emailError, null, 2));
        // Don't fail the request if email fails
      }
    } else {
      console.log("RESEND_API_KEY not configured, skipping email notifications");
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
