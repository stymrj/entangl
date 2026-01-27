import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ShieldCheck, Link2, MessageCircle } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Sign up with work email",
    description: "Create your profile using your corporate email to join our verified community.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Get verified",
    description: "We confirm your professional identity to ensure trust and authenticity.",
  },
  {
    number: "03",
    icon: Link2,
    title: "Discover matches",
    description: "Our algorithm finds professionals who complement your skills and goals.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Start connecting",
    description: "Break the ice, grab coffee, or collaborate remotely. Real connections start here.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      <AnimatedBackground variant="section" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-coral font-semibold text-sm tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-5 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Finding your match, <span className="italic text-coral">simplified</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Four simple steps to meet the professionals who'll change your career
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group bg-card/60 backdrop-blur-md rounded-2xl p-7 border border-border/40 shadow-sm hover:shadow-lg hover:border-coral/30 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {/* Number and Icon */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-4xl italic text-coral/60">
                  {step.number}
                </span>
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/15 transition-colors"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <step.icon className="w-7 h-7 text-coral" strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
