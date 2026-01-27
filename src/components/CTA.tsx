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
    <section id="cta" className="py-16 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-bg mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-lg">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Ready to find{" "}
            <span className="gradient-text">your match?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto px-4">
            Join the waitlist and be among the first to connect with professionals who complement your journey.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-5 sm:mb-6 px-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-card border-border/50 focus:border-coral"
                  required
                  disabled={isLoading}
                />
                <Button type="submit" variant="gradient" size="lg" className="shrink-0 w-full sm:w-auto" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-coral font-medium animate-fade-in py-3">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                Welcome to the waitlist! We'll be in touch soon. 💕
              </div>
            )}
          </div>

          {/* Fine print */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            Invite only · Corporate email required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
