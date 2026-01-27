import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ShieldCheck, Link2, MessageCircle, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Sign up with work email",
    description: "Create your profile using your corporate email. This keeps our community exclusive and verified.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Get verified",
    description: "We confirm your professional identity to ensure everyone you meet is genuine and trustworthy.",
  },
  {
    number: "03",
    icon: Link2,
    title: "Discover your matches",
    description: "Our algorithm finds professionals nearby who complement your skills and share your ambitions.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Start the conversation",
    description: "Break the ice, grab coffee, or collaborate remotely. Real connections start here.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-pink/5 to-transparent" />
      
      {/* Floating hearts */}
      <motion.div 
        className="absolute top-20 left-[5%] text-pink/20"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-[8%] text-coral/25"
        animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span 
            className="inline-block text-coral font-semibold text-sm tracking-widest uppercase mb-6"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1]"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Finding your match{" "}
            <br className="hidden sm:block" />
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">made simple</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Four steps to meet the professionals who'll change your career
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative bg-card rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Number and Icon row */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-4xl sm:text-5xl italic text-coral/80">
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/15 transition-colors">
                  <step.icon className="w-5 h-5 text-coral" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
