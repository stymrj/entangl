import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ShieldCheck, Link2, MessageCircle } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <motion.p 
            className="text-coral font-semibold text-sm tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            How It Works
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Finding your match, <span className="italic text-coral">simplified</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Four simple steps to meet the professionals who'll change your career
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-card rounded-2xl p-6 border border-border/40 hover:border-coral/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {/* Number and Icon */}
              <div className="flex items-start justify-between mb-5">
                <span className="font-display text-3xl italic text-coral/70">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-coral" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
