import { Code, Lightbulb, Briefcase, Building2, Rocket, Users } from "lucide-react";

const audiences = [
  {
    icon: Code,
    title: "Engineers",
    description: "Find your technical co-founder",
  },
  {
    icon: Lightbulb,
    title: "Product Leaders",
    description: "Connect with visionary builders",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description: "Expand your trusted network",
  },
  {
    icon: Building2,
    title: "Executives",
    description: "Meet peers who understand",
  },
  {
    icon: Rocket,
    title: "Founders",
    description: "Discover your next partner",
  },
  {
    icon: Users,
    title: "Team Leads",
    description: "Find mentors and talent",
  },
];

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block">
            Who It's For
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Find your professional{" "}
            <span className="gradient-text">soulmate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you're seeking a co-founder, mentor, or collaborator—your perfect match is waiting.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative bg-card rounded-2xl p-6 text-center card-shadow card-hover border border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-coral/10 transition-colors duration-300">
                  <audience.icon className="w-7 h-7 text-coral" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
