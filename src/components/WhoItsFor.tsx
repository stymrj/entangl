import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Layers, Briefcase, Building2, Rocket, Users } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const personas = [
  {
    icon: Code,
    title: "Engineers",
    subtitle: "Find your technical co-founder",
  },
  {
    icon: Layers,
    title: "Product Leaders",
    subtitle: "Connect with visionary builders",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    subtitle: "Expand your trusted network",
  },
  {
    icon: Building2,
    title: "Executives",
    subtitle: "Meet peers who understand",
  },
  {
    icon: Rocket,
    title: "Founders",
    subtitle: "Discover your next partner",
  },
  {
    icon: Users,
    title: "Team Leads",
    subtitle: "Find mentors and talent",
  },
];

const WhoItsFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="who-its-for" className="py-24 lg:py-32 relative overflow-hidden">
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
            Who It's For
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-5 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find your professional <span className="italic text-coral">soulmate</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Whether you're seeking a co-founder, mentor, or collaborator—your perfect match is waiting.
          </motion.p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              className="group bg-card/60 backdrop-blur-md rounded-2xl p-6 text-center border border-border/40 shadow-sm hover:shadow-lg hover:border-coral/30 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + index * 0.06 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/15 transition-colors"
                whileHover={{ scale: 1.08, rotate: 3 }}
              >
                <persona.icon className="w-8 h-8 text-coral" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-1 text-lg">
                {persona.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {persona.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
