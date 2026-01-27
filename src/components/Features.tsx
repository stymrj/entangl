import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, MapPin, Heart, Lock } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    description: "Every member is verified through their corporate email. No fakes, no spam—just real professionals.",
  },
  {
    icon: MapPin,
    title: "Location-Smart Matching",
    description: "Meet people in your city for coffee, events, or collaboration opportunities.",
  },
  {
    icon: Heart,
    title: "Chemistry-Based Matches",
    description: "We pair you with professionals whose skills and goals complement yours perfectly.",
  },
  {
    icon: Lock,
    title: "Private & Intentional",
    description: "No public feeds or likes. Just meaningful one-on-one connections that matter.",
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
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
            Why Entangl
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-5 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Built for <span className="italic text-coral">real connections</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Not another networking app. A curated space for ambitious professionals.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-card/60 backdrop-blur-md rounded-2xl p-7 border border-border/40 shadow-sm hover:shadow-lg hover:border-coral/30 transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/15 transition-colors"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <feature.icon className="w-7 h-7 text-coral" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
