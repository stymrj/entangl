import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, Heart } from "lucide-react";
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
    <section id="cta" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-pink/8 to-coral/5" />
      
      {/* Floating dots decoration */}
      <div className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-coral/40" />
      <div className="absolute top-1/3 right-[20%] w-3 h-3 rounded-full bg-pink/30" />
      <div className="absolute bottom-1/3 left-[25%] w-2 h-2 rounded-full bg-purple/30" />
      <div className="absolute bottom-1/4 right-[15%] w-2.5 h-2.5 rounded-full bg-coral/35" />
      <div className="absolute top-1/2 left-[10%] w-1.5 h-1.5 rounded-full bg-pink/40" />
      <div className="absolute top-2/3 right-[10%] w-2 h-2 rounded-full bg-purple/25" />

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heart Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-coral mx-auto mb-10 flex items-center justify-center shadow-lg">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground fill-current" />
          </div>

          {/* Content */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1]">
            Ready to find{" "}
            <br className="hidden sm:block" />
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">your match?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to connect with professionals who complement your journey.
          </p>

          {/* Email Form */}
          <div className="max-w-lg mx-auto mb-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 bg-card border-border/60 focus:border-coral focus:ring-coral/20 text-base rounded-xl shadow-sm"
                  required
                  disabled={isLoading}
                />
                <Button type="submit" variant="gradient" size="lg" className="shrink-0 w-full sm:w-auto h-14 rounded-xl text-base font-semibold px-8" disabled={isLoading}>
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
