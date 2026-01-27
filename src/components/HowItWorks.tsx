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
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Finding your match{" "}
            <span className="gradient-text">made simple</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four steps to meet the professionals who'll change your career
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 card-shadow card-hover border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-coral/10 transition-colors duration-300">
                <step.icon className="w-7 h-7 text-coral" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
