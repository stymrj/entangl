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
    <section id="features" className="py-20 lg:py-36 bg-secondary/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            Why Entangl
          </span>
          <h2 className="section-title">
            Built for{" "}
            <span className="font-display italic gradient-text">real connections</span>
          </h2>
          <p className="section-subtitle">
            Not another networking app. A curated space where ambitious professionals find their perfect match.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 card-shadow card-hover border border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
