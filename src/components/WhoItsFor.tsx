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

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-pink/5 to-transparent" />
      
      {/* Floating hearts */}
      <div className="absolute top-32 right-[10%] text-coral/25 animate-pulse-soft">
        <Heart className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute bottom-32 left-[8%] text-pink/20 animate-pulse-soft" style={{ animationDelay: '0.8s' }}>
        <Heart className="w-5 h-5 fill-current" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-coral font-semibold text-sm tracking-widest uppercase mb-6">
            Who It's For
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1]">
            Find your professional{" "}
            <br className="hidden sm:block" />
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">soulmate</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're seeking a co-founder, mentor, or collaborator—your perfect match is waiting.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className="group relative bg-card rounded-2xl p-6 lg:p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/15 transition-colors">
                <persona.icon className="w-7 h-7 text-coral" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                {persona.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {persona.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
