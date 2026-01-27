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

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-36 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-coral font-semibold text-sm tracking-widest uppercase mb-6">
            Why Entangl
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1]">
            Built for{" "}
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">real connections</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Not another networking app. A curated space where ambitious professionals find their perfect match.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-coral/15 transition-colors">
                <feature.icon className="w-6 h-6 text-coral" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
