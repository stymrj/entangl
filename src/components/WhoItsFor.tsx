import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Layers, Briefcase, Building2, Rocket, Users } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="who-its-for" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <motion.p 
            className="text-coral font-semibold text-sm tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Who It's For
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Find your professional <span className="italic text-coral">soulmate</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Whether you're seeking a co-founder, mentor, or collaborator—your perfect match is waiting.
          </motion.p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              className="bg-card rounded-2xl p-5 text-center border border-border/40 hover:border-coral/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mx-auto mb-3">
                <persona.icon className="w-6 h-6 text-coral" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-1">
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
