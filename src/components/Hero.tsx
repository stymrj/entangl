import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
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
        body: { email, source: "hero" },
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
    <section className="relative pt-32 sm:pt-36 pb-20 lg:pt-44 lg:pb-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-gradient-to-b from-coral/8 via-purple/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-32 left-10 w-32 h-32 bg-coral/10 rounded-full blur-2xl animate-pulse-soft" />
        <div className="absolute bottom-32 right-10 w-40 h-40 bg-purple/10 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-foreground/80">Join 2,000+ professionals finding their match</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up text-balance leading-[1.08]">
            Where Professionals{" "}
            <br className="hidden sm:block" />
            <span className="font-display italic gradient-text">Find Their Match</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto animate-slide-up leading-relaxed px-4">
            We match verified professionals based on skills, interests, and chemistry. 
            Find your co-founder, mentor, or the connection that changes everything.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-14 animate-slide-up px-4">
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
                You're on the list! Check your inbox 💕
              </div>
            )}
          </div>

          {/* Match Visual */}
          <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-10 animate-slide-up">
            {/* Left Person */}
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-coral-light to-coral flex items-center justify-center text-3xl sm:text-4xl md:text-6xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 animate-float">
                👩‍💼
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card rounded-full text-xs sm:text-sm font-semibold shadow-md border border-border whitespace-nowrap">
                You
              </div>
            </div>

            {/* Heart */}
            <div className="relative">
              <div className="text-4xl sm:text-5xl md:text-6xl animate-pulse-soft">💕</div>
              <div className="absolute inset-0 blur-xl bg-coral/20 rounded-full animate-pulse-soft" />
            </div>

            {/* Right Person */}
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-light to-purple flex items-center justify-center text-3xl sm:text-4xl md:text-6xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 animate-float" style={{ animationDelay: '1s' }}>
                👨‍💻
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card rounded-full text-xs sm:text-sm font-semibold shadow-md border border-border whitespace-nowrap">
                Match
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
