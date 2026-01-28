import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { Resend } from "npm:resend@2.0.0";
import { MongoClient } from "npm:mongodb@6.3.0";

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
  const mongodbUri = Deno.env.get("MONGODB_URI");

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

    // Also save to MongoDB
    if (mongodbUri) {
      try {
        console.log("Attempting to connect to MongoDB...");
        const mongoClient = new MongoClient(mongodbUri);
        await mongoClient.connect();
        console.log("MongoDB connected successfully");
        
        const db = mongoClient.db("Entangl");
        const collection = db.collection("waitlist");
        
        const mongoResult = await collection.insertOne({
          email: sanitizedEmail,
          source,
          status: "pending",
          createdAt: new Date(),
          supabaseId: insertedData.id,
        });
        
        console.log("Data saved to MongoDB with ID:", mongoResult.insertedId);
        await mongoClient.close();
        console.log("MongoDB connection closed");
      } catch (mongoError: any) {
        console.error("MongoDB save error (non-fatal):", mongoError);
        console.error("MongoDB error details:", mongoError.message);
        // Don't fail the request if MongoDB fails
      }
    } else {
      console.log("MongoDB URI not configured, skipping MongoDB save");
    }

    // Send confirmation email via Resend (optional)
    if (resendApiKey) {
      try {
        console.log("Attempting to send confirmation email to:", sanitizedEmail);
        const resend = new Resend(resendApiKey);
        const emailResult = await resend.emails.send({
          from: "Entangl <support@entangl.in>", // Using verified domain
          to: [sanitizedEmail],
          subject: "Welcome to the Entangl Waitlist! 💕",
          html: `
            <div style="background-color:#f5f7fb;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
              <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06);">
                
                <!-- Header -->
                <div style="background:linear-gradient(135deg,#7b61ff,#ff6ec7);padding:24px;text-align:center;">
                  <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">
                    Entangl 💕
                  </h1>
                  <p style="margin:8px 0 0;color:#f0f0f0;font-size:14px;">
                    Meaningful connections, redefined
                  </p>
                </div>

                <!-- Body -->
                <div style="padding:32px;color:#333333;">
                  <h2 style="margin-top:0;font-size:22px;">
                    Welcome to the Entangl Waitlist 🎉
                  </h2>

                  <p style="font-size:15px;line-height:1.6;">
                    Thank you for signing up! You're officially part of an exclusive group that will be the first to experience
                    <strong>Entangl</strong> when we launch.
                  </p>

                  <p style="font-size:15px;line-height:1.6;">
                    We're working hard behind the scenes to build something truly special, and we'll keep you updated every step
                    of the way.
                  </p>

                  <!-- CTA -->
                  <div style="text-align:center;margin:30px 0;">
                    <a href="https://entangl.in"
                       style="background:#7b61ff;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:600;font-size:15px;display:inline-block;">
                      Visit Entangl
                    </a>
                  </div>

                  <p style="font-size:14px;color:#555555;">
                    💡 Tip: Share Entangl with friends who might love being part of something new.
                  </p>

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
        console.log("Confirmation email sent successfully:", emailResult);
      } catch (emailError: any) {
        console.error("Error sending email (non-fatal):", emailError);
        console.error("Email error details:", emailError.message || JSON.stringify(emailError, null, 2));
        // Don't fail the request if email fails
      }
    } else {
      console.log("RESEND_API_KEY not configured, skipping email sending");
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
