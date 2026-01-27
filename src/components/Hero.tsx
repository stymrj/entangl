import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary border border-border mb-6 sm:mb-8 animate-slide-up">
            <span className="text-xs sm:text-sm text-muted-foreground">Join 2,000+ professionals finding their match</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-slide-up text-balance leading-tight">
            Where Professionals{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">Find Their Match</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto animate-slide-up text-balance px-4">
            We match verified professionals based on skills, interests, and chemistry. 
            Find your co-founder, mentor, or the connection that changes everything.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-10 sm:mb-12 animate-slide-up px-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-card border-border/50 focus:border-coral"
                  required
                />
                <Button type="submit" variant="gradient" size="lg" className="shrink-0 w-full sm:w-auto">
                  Join Waitlist
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-coral font-medium animate-fade-in">
                <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                You're on the list! Check your inbox 💕
              </div>
            )}
          </div>

          {/* Match Visual */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-8 animate-slide-up">
            {/* Left Person */}
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-coral-light to-coral flex items-center justify-center text-2xl sm:text-3xl md:text-5xl shadow-lg animate-float">
                👩‍💼
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 bg-card rounded-full text-[10px] sm:text-xs font-medium shadow-md border border-border whitespace-nowrap">
                You
              </div>
            </div>

            {/* Heart */}
            <div className="text-2xl sm:text-4xl md:text-5xl animate-pulse-soft">
              💕
            </div>

            {/* Right Person */}
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-light to-purple flex items-center justify-center text-2xl sm:text-3xl md:text-5xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                👨‍💻
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-0.5 sm:py-1 bg-card rounded-full text-[10px] sm:text-xs font-medium shadow-md border border-border whitespace-nowrap">
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
