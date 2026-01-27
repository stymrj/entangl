import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
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
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-coral/[0.03] via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Join 2,000+ professionals on the waitlist</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Where Professionals
            <br />
            <span className="italic text-coral">Find Their Match</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We match verified professionals based on skills, interests, and chemistry. 
            Find your co-founder, mentor, or the connection that changes everything.
          </motion.p>

          {/* Email Form */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
                You're on the list! Check your inbox 💕
              </motion.div>
            )}
          </motion.div>

          {/* Fine print */}
          <motion.p 
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Invite only · Corporate email required
          </motion.p>
        </div>

        {/* Simple visual */}
        <motion.div 
          className="mt-20 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Left Person */}
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-coral to-pink flex items-center justify-center text-2xl sm:text-3xl shadow-md border-4 border-card">
              👩‍💼
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-medium">You</p>
          </div>

          {/* Connection indicator */}
          <div className="flex items-center gap-2">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-coral/60 to-coral/20" />
            <div className="w-3 h-3 rounded-full bg-coral" />
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-purple/60 to-purple/20" />
          </div>

          {/* Right Person */}
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-2xl sm:text-3xl shadow-md border-4 border-card">
              👨‍💻
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-medium">Them</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
