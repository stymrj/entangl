import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="cta" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-8 flex items-center justify-center shadow-lg">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to find{" "}
            <span className="gradient-text">your match?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Join the waitlist and be among the first to connect with professionals who complement your journey.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-card border-border/50 focus:border-coral"
                  required
                />
                <Button type="submit" variant="gradient" size="lg" className="shrink-0">
                  Join Waitlist
                  <ArrowRight className="ml-1 w-4 h-4" />
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
          <p className="text-sm text-muted-foreground">
            Invite only · Corporate email required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
