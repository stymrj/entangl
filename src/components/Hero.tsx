import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, Sparkles, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

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
    <section className="relative pt-32 sm:pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink/10 via-coral/5 to-transparent" />
      
      {/* Floating hearts decoration */}
      <motion.div 
        className="absolute top-40 left-[10%] text-pink/30"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute top-60 right-[8%] text-coral/40"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-[5%] text-pink/25"
        animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute bottom-60 right-[12%] text-coral/30"
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Heart className="w-4 h-4 fill-current" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border/50 shadow-sm mb-10"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-foreground">Join 2,000+ professionals finding their match</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-foreground mb-8 leading-[1.05]"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Where Professionals{" "}
            <br />
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">Find Their Match</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            We match verified professionals based on skills, interests, and chemistry. 
            Find your co-founder, mentor, or the connection that changes everything.
          </motion.p>

          {/* Email Form */}
          <motion.div 
            className="max-w-lg mx-auto mb-4"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
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
              <motion.div 
                className="flex items-center justify-center gap-3 text-coral font-semibold py-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                You're on the list! Check your inbox 💕
              </motion.div>
            )}
          </motion.div>

          {/* Fine print */}
          <motion.p 
            className="text-sm text-muted-foreground mb-20"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Invite only · Corporate email required
          </motion.p>

          {/* Match Visual */}
          <motion.div 
            className="relative flex items-center justify-center"
            variants={scaleIn}
          >
            {/* Connection line */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-80 sm:w-96 h-20" viewBox="0 0 400 80">
              <motion.path 
                d="M 50 50 Q 200 0 350 50" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                className="opacity-60"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--coral))" />
                  <stop offset="100%" stopColor="hsl(var(--coral))" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Left Person */}
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-coral to-pink flex items-center justify-center text-3xl sm:text-4xl shadow-lg border-4 border-card">
                👩‍💼
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-coral flex items-center justify-center">
                <Heart className="w-3 h-3 text-primary-foreground fill-current" />
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-medium">You</p>
            </motion.div>

            {/* Center Heart */}
            <motion.div 
              className="relative z-10 mx-8 sm:mx-12"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-coral flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground fill-current" />
              </motion.div>
              <p className="text-sm text-coral mt-3 font-semibold">Match</p>
            </motion.div>

            {/* Right Person */}
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-3xl sm:text-4xl shadow-lg border-4 border-card">
                👨‍💻
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-coral flex items-center justify-center">
                <Heart className="w-3 h-3 text-primary-foreground fill-current" />
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-medium">Them</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
