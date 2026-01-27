import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    <section id="cta" className="py-20 lg:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div 
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Heart Icon */}
          <div className="w-16 h-16 rounded-2xl bg-coral mx-auto mb-8 flex items-center justify-center">
            <Heart className="w-8 h-8 text-primary-foreground fill-current" />
          </div>

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4 leading-tight">
            Ready to find <span className="italic text-coral">your match?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Join the waitlist and be among the first to connect with professionals who complement your journey.
          </p>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-card border-border focus:border-coral focus:ring-coral/20 text-base rounded-xl"
                  required
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  variant="gradient" 
                  className="shrink-0 h-12 rounded-xl text-base font-semibold px-6" 
                  disabled={isLoading}
                >
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
              <motion.div 
                className="flex items-center justify-center gap-3 text-coral font-medium py-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                Welcome to the waitlist! We'll be in touch soon. 💕
              </motion.div>
            )}
          </div>

          {/* Fine print */}
          <p className="text-sm text-muted-foreground mt-4">
            Invite only · Corporate email required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
