import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, MapPin, Heart, Lock } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals Only",
    description: "Every member is verified through their corporate email. No fakes, no spam—just real professionals looking for genuine connections.",
  },
  {
    icon: MapPin,
    title: "Location-Smart Matching",
    description: "Meet people in your city for coffee, events, or collaboration. Distance shouldn't stop great partnerships from forming.",
  },
  {
    icon: Heart,
    title: "Chemistry-Based Matches",
    description: "We pair you with professionals whose skills, goals, and working styles complement yours perfectly.",
  },
  {
    icon: Lock,
    title: "Private & Intentional",
    description: "No public feeds or likes. Just meaningful one-on-one connections with people who truly matter to your journey.",
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for background elements
  const leftBlobY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightBlobY = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const leftBlobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const rightBlobScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.85]);

  return (
    <section id="features" className="py-24 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration with parallax */}
      <motion.div 
        className="absolute top-1/2 left-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl -translate-y-1/2"
        style={{ y: leftBlobY, scale: leftBlobScale }}
      />
      <motion.div 
        className="absolute top-1/2 right-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl -translate-y-1/2"
        style={{ y: rightBlobY, scale: rightBlobScale }}
      />

      {/* Additional parallax elements */}
      <motion.div 
        className="absolute top-1/4 left-[20%] w-16 h-16 rounded-full bg-pink/5 blur-xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [30, -60]) }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-[25%] w-20 h-20 rounded-full bg-coral/5 blur-xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 80]) }}
      />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
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
            Why Entangl
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1]"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Built for{" "}
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">real connections</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Not another networking app. A curated space where ambitious professionals find their perfect match.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-card rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <motion.div 
                className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/15 transition-colors"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <feature.icon className="w-6 h-6 text-coral" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
