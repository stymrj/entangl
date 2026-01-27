import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from "./AnimatedBackground";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
      <AnimatedBackground variant="cta" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div 
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heart Icon */}
          <motion.div 
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-coral to-pink mx-auto mb-10 flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.05, rotate: 3 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-10 h-10 text-primary-foreground fill-current" />
          </motion.div>

          {/* Content */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-5 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to find <span className="italic text-coral">your match?</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mb-10 max-w-md mx-auto text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Join the waitlist and be among the first to connect with professionals who complement your journey.
          </motion.p>

          {/* Email Form */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-card/60 backdrop-blur-md border-border/60 focus:border-coral focus:ring-coral/20 text-base rounded-xl shadow-sm"
                  required
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  variant="gradient" 
                  className="shrink-0 h-12 rounded-xl text-base font-semibold px-6 shadow-md hover:shadow-lg transition-shadow" 
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
          </motion.div>

          {/* Fine print */}
          <motion.p 
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Invite only · Corporate email required
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
