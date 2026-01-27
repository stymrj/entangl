import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from "./AnimatedBackground";

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
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <AnimatedBackground variant="hero" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/40 mb-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Join 2,000+ professionals on the waitlist</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            We match verified professionals based on skills, interests, and chemistry. 
            Find your co-founder, mentor, or the connection that changes everything.
          </motion.p>

          {/* Email Form */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
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
                You're on the list! Check your inbox 💕
              </motion.div>
            )}
          </motion.div>

          {/* Fine print */}
          <motion.p 
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Invite only · Corporate email required
          </motion.p>
        </div>

        {/* Visual matching illustration */}
        <motion.div 
          className="mt-20 flex items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          {/* Left Person */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-coral to-pink flex items-center justify-center text-3xl sm:text-4xl shadow-lg border-4 border-card/80 backdrop-blur-sm">
              👩‍💼
            </div>
            <p className="text-sm text-muted-foreground mt-3 font-medium">You</p>
          </motion.div>

          {/* Connection indicator with heart */}
          <div className="flex items-center gap-3">
            <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-coral to-coral/30" />
            <motion.div 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coral/10 backdrop-blur-sm border border-coral/20 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-coral fill-coral/30" />
            </motion.div>
            <div className="w-16 sm:w-20 h-px bg-gradient-to-l from-purple to-purple/30" />
          </div>

          {/* Right Person */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-3xl sm:text-4xl shadow-lg border-4 border-card/80 backdrop-blur-sm">
              👨‍💻
            </div>
            <p className="text-sm text-muted-foreground mt-3 font-medium">Them</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
