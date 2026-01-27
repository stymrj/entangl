import { Heart, Users, Target, Zap, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "We believe in building meaningful connections that go beyond transactional networking.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Diversity drives innovation. We welcome professionals from all backgrounds and industries.",
  },
  {
    icon: Target,
    title: "Intentional Growth",
    description: "Every feature we build is designed to help you grow professionally and personally.",
  },
  {
    icon: Zap,
    title: "Authentic Connections",
    description: "No vanity metrics. Just real relationships that matter to your career journey.",
  },
];

const team = [
  { name: "Bharti Nandan", role: "CEO & Co-Founder", emoji: "👩‍💼" },
  { name: "Anand Kumar", role: "CTO & Co-Founder", emoji: "👨‍💻" },
  { name: "Satyam Raj", role: "Full Stack Developer", emoji: "👩‍🎨" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up text-balance">
                Redefining how <span className="gradient-text">professionals connect</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up text-balance">
                We started Entangl because we believe the best professional relationships aren't found—they're matched.
                Our mission is to help ambitious professionals find their perfect career match.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In 2024, our founders Sarah and Marcus met at a tech conference. Despite being in the same industry,
                    they had never crossed paths—until a mutual friend made the introduction that changed everything.
                  </p>
                  <p>
                    That serendipitous meeting sparked an idea: what if technology could create more of these meaningful
                    professional connections? Not through endless scrolling or superficial networking, but through
                    intelligent matching based on skills, goals, and chemistry.
                  </p>
                  <p>
                    Today, Entangl has helped over 2,000 professionals find their co-founders, mentors, and
                    career-changing connections. We're just getting started.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl gradient-bg flex items-center justify-center text-8xl md:text-9xl shadow-2xl animate-float">
                    🤝
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-card shadow-lg flex items-center justify-center text-4xl border border-border animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    💡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 card-shadow card-hover border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-md">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                The passionate people building the future of professional networking
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card rounded-2xl p-4 text-center card-shadow card-hover border border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-3 flex items-center justify-center text-3xl shadow-md">
                    {member.emoji}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join us on our <span className="gradient-text">mission</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're always looking for talented people who share our vision.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <a href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
