import { Heart, Users, Target, Zap, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const values = [
  {
    icon: Heart,
    title: "Chemistry Matters",
    description: "We don't just match profiles. We match people whose skills, values, and goals create real synergy.",
  },
  {
    icon: Users,
    title: "Verified & Intentional",
    description: "Only verified professionals. No fakes, no spam, no games—just serious people looking for serious connections.",
  },
  {
    icon: Target,
    title: "Quality Over Quantity",
    description: "Better to have 5 meaningful matches than 500 surface-level connections.",
  },
  {
    icon: Zap,
    title: "Real Relationships",
    description: "Co-founders who build unicorns. Mentors who change trajectories. Partners who become friends.",
  },
];

const team = [
  // { name: "Bharti Nandan", role: "CEO & Founder", emoji: "👨‍💻" },
  // { name: "Satyam Raj", role: "CTO & Co-Founder", emoji: "👨‍💻" },
  // { name: "Anand Kumar", role: "COO & Co-Founder", emoji: "👩‍🎨" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatedBackground variant="section" />
      </div>
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
                Professional <span className="gradient-text">Dating Done Right</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up text-balance">
                We created Entangl because the best professional matches aren't accidents—they're intentional.
                We use intelligent matching to connect ambitious professionals who genuinely complement each other.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We noticed something broken in professional networking. Endless connections with no meaningful relationships. Swipe-based apps that treated professionals like dating profiles. Cold emails that go unanswered.
                  </p>
                  <p>
                    What if we built a platform where chemistry actually mattered? Where professionals could find their ideal match—whether that's a co-founder with complementary skills, a mentor who gets them, or a collaborator who sees their vision?
                  </p>
                  <p>
                    That's Entangl. We've matched over 2,000 verified professionals, leading to partnerships, mentorships, and friendships that have changed careers. We're building the future of professional relationships—one perfect match at a time.
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
        {/* <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the <span className="gradient-text">Founders</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Three professionals who met serendipitously and decided to make it less random for everyone else
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
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
        </section> */}

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Your <span className="gradient-text">Perfect Match</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join thousands of professionals already discovering meaningful connections on Entangl.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <a href="/">
                  Join the Waitlist
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
