import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("waitlist-signup", {
        body: { email, source: "cta" },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Welcome aboard! 💕",
        description: data.message || "You're on the waitlist!",
      });
    } catch (error: any) {
      console.error("Waitlist signup error:", error);
      toast({
        title: "Oops!",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="cta" className="py-20 lg:py-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-coral/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-purple/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl gradient-bg mx-auto mb-8 flex items-center justify-center shadow-lg">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <h2 className="section-title mb-5">
            Ready to find{" "}
            <span className="font-display italic gradient-text">your match?</span>
          </h2>
          <p className="section-subtitle mb-10 sm:mb-12">
            Join the waitlist and be among the first to connect with professionals who complement your journey.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-6 px-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-13 bg-card border-border focus:border-coral focus:ring-coral/20 text-base"
                  required
                  disabled={isLoading}
                />
                <Button type="submit" variant="gradient" size="lg" className="shrink-0 w-full sm:w-auto h-13" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-coral font-semibold animate-fade-in py-4">
                <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                Welcome to the waitlist! We'll be in touch soon. 💕
              </div>
            )}
          </div>

          {/* Fine print */}
          <p className="text-sm text-muted-foreground">
            Invite only · Corporate email required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
