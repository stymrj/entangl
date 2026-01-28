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
            <div style="background-color:#f5f7fb;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
              <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06);">
                
                <!-- Header -->
                <div style="background:linear-gradient(135deg,#7b61ff,#ff6ec7);padding:24px;text-align:center;">
                  <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
                    Entangl 💕
                  </h1>
                  <p style="margin:8px 0 0;color:#f0f0f0;font-size:14px;">
                    New Contact Form Submission
                  </p>
                </div>

                <!-- Body -->
                <div style="padding:32px;color:#333333;">
                  <h2 style="margin-top:0;font-size:22px;">
                    📬 New Message Received
                  </h2>

                  <div style="background:#f9f9f9;padding:16px;border-radius:8px;margin:20px 0;">
                    <p style="margin:8px 0;font-size:14px;">
                      <strong>From:</strong> ${name} (${email})
                    </p>
                    <p style="margin:8px 0;font-size:14px;">
                      <strong>Subject:</strong> ${subject}
                    </p>
                  </div>

                  <div style="background:#f0f0f0;padding:16px;border-left:4px solid #7b61ff;border-radius:4px;margin:20px 0;">
                    <p style="margin:0;font-size:15px;line-height:1.6;">
                      ${message.replace(/\n/g, "<br>")}
                    </p>
                  </div>

                  <p style="font-size:13px;color:#888888;margin-top:20px;">
                    Submitted at: ${new Date().toLocaleString()}
                  </p>
                </div>

                <!-- Footer -->
                <div style="background:#fafafa;padding:16px;text-align:center;font-size:12px;color:#888888;">
                  © ${new Date().getFullYear()} Entangl. All rights reserved.
                </div>

              </div>
            </div>
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
            <div style="background-color:#f5f7fb;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
              <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06);">
                
                <!-- Header -->
                <div style="background:linear-gradient(135deg,#7b61ff,#ff6ec7);padding:24px;text-align:center;">
                  <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
                    Entangl 💕
                  </h1>
                  <p style="margin:8px 0 0;color:#f0f0f0;font-size:14px;">
                    Message Received
                  </p>
                </div>

                <!-- Body -->
                <div style="padding:32px;color:#333333;">
                  <h2 style="margin-top:0;font-size:22px;">
                    Thank you, ${name}! 🙏
                  </h2>

                  <p style="font-size:15px;line-height:1.6;">
                    We've received your message and will get back to you within 24 hours. Our team is committed to providing you with the best support possible.
                  </p>

                  <div style="background:#f0f0f0;padding:16px;border-left:4px solid #7b61ff;border-radius:4px;margin:20px 0;">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#555555;">
                      Your Message Summary:
                    </p>
                    <p style="margin:8px 0 0;font-size:14px;color:#666666;">
                      <strong>Subject:</strong> ${subject}
                    </p>
                  </div>

                  <p style="font-size:15px;line-height:1.6;margin-top:20px;">
                    In the meantime, feel free to explore more about Entangl or check our FAQ.
                  </p>

                  <!-- CTA -->
                  <div style="text-align:center;margin:30px 0;">
                    <a href="https://entangl.in"
                       style="background:#7b61ff;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600;font-size:15px;display:inline-block;">
                      Learn More
                    </a>
                  </div>

                  <p style="margin-top:32px;font-size:14px;">
                    With love,<br />
                    <strong>The Entangl Team 🚀</strong>
                  </p>
                </div>

                <!-- Footer -->
                <div style="background:#fafafa;padding:16px;text-align:center;font-size:12px;color:#888888;">
                  © ${new Date().getFullYear()} Entangl. All rights reserved.
                </div>

              </div>
            </div>
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
