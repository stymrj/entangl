import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, MapPin, Heart, Lock } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <motion.p 
            className="text-coral font-semibold text-sm tracking-wide uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Why Entangl
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Built for <span className="italic text-coral">real connections</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-lg mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Not another networking app. A curated space for ambitious professionals.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-2xl p-6 border border-border/40 hover:border-coral/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-coral" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
