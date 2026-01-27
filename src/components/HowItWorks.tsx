import { Mail, Shield, Users, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Sign up with work email",
    description: "Create your profile using your corporate email. This keeps our community exclusive and verified.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Get verified",
    description: "We confirm your professional identity to ensure everyone you meet is genuine and trustworthy.",
  },
  {
    number: "03",
    icon: Users,
    title: "Discover your matches",
    description: "Our algorithm finds professionals nearby who complement your skills and share your ambitions.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Start the conversation",
    description: "Break the ice, grab coffee, or collaborate remotely. Real connections start here.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-36 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            How It Works
          </span>
          <h2 className="section-title">
            Finding your match{" "}
            <span className="font-display italic gradient-text">made simple</span>
          </h2>
          <p className="section-subtitle">
            Four steps to meet the professionals who'll change your career
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 card-shadow card-hover border border-border/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-secondary/80 flex items-center justify-center mb-5 group-hover:bg-coral/10 transition-all duration-300 group-hover:scale-105">
                <step.icon className="w-7 h-7 text-coral" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
