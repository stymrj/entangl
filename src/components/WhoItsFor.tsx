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
    <section id="who-its-for" className="py-20 lg:py-36">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            Who It's For
          </span>
          <h2 className="section-title">
            Find your professional{" "}
            <span className="font-display italic gradient-text">soulmate</span>
          </h2>
          <p className="section-subtitle">
            Whether you're seeking a co-founder, mentor, or collaborator—your perfect match is waiting.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative bg-card rounded-2xl p-5 sm:p-6 text-center card-shadow card-hover border border-border/40 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary/80 mx-auto mb-4 flex items-center justify-center group-hover:bg-coral/10 transition-all duration-300 group-hover:scale-105">
                  <audience.icon className="w-7 h-7 text-coral" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                  {audience.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
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
