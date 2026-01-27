import { Mail, ShieldCheck, Link2, MessageCircle, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Sign up with work email",
    description: "Create your profile using your corporate email. This keeps our community exclusive and verified.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Get verified",
    description: "We confirm your professional identity to ensure everyone you meet is genuine and trustworthy.",
  },
  {
    number: "03",
    icon: Link2,
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
    <section id="how-it-works" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-pink/5 to-transparent" />
      
      {/* Floating hearts */}
      <div className="absolute top-20 left-[5%] text-pink/20 animate-pulse-soft">
        <Heart className="w-5 h-5 fill-current" />
      </div>
      <div className="absolute bottom-20 right-[8%] text-coral/25 animate-pulse-soft" style={{ animationDelay: '1s' }}>
        <Heart className="w-6 h-6 fill-current" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-coral font-semibold text-sm tracking-widest uppercase mb-6">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground mb-6 leading-[1.1]">
            Finding your match{" "}
            <br className="hidden sm:block" />
            <span className="italic bg-gradient-to-r from-coral via-pink to-purple bg-clip-text text-transparent">made simple</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Four steps to meet the professionals who'll change your career
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-card rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number and Icon row */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-4xl sm:text-5xl italic text-coral/80">
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/15 transition-colors">
                  <step.icon className="w-5 h-5 text-coral" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
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
