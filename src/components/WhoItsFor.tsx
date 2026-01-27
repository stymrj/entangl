import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code, Layers, Briefcase, Building2, Rocket, Users, Heart } from "lucide-react";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const WhoItsFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="who-its-for" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-pink/5 to-transparent"
        style={{ y: bgY }}
      />
      
      {/* Floating hearts with parallax */}
      <motion.div 
        className="absolute top-32 right-[10%] text-coral/25"
        style={{ y: y1 }}
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-[8%] text-pink/20"
        style={{ y: y2 }}
        animate={{ rotate: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Heart className="w-5 h-5 fill-current" />
      </motion.div>

      {/* Additional parallax decorations */}
      <motion.div 
        className="absolute top-1/3 left-[5%] w-28 h-28 rounded-full bg-purple/5 blur-2xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-[10%] w-36 h-36 rounded-full bg-coral/5 blur-3xl"
        style={{ y: y2 }}
      />
      
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
            Who It's For
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1]"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Find your professional{" "}
            <br className="hidden sm:block" />
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">soulmate</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Whether you're seeking a co-founder, mentor, or collaborator—your perfect match is waiting.
          </motion.p>
        </motion.div>

        {/* Personas Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              className="group relative bg-card rounded-2xl p-6 lg:p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/15 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <persona.icon className="w-7 h-7 text-coral" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                {persona.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {persona.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
