import { MapPin, Clock, Briefcase, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const benefits = [
  "Competitive salary & equity",
  "Remote-first culture",
  "Unlimited PTO",
  "Health, dental & vision",
  "Learning & development budget",
  "Home office setup",
  "Team retreats",
  "Parental leave",
];

const jobs = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Customer Success Lead",
    department: "Operations",
    location: "Remote (US)",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-1/4 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
                Careers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up text-balance">
                Build the future of{" "}
                <span className="gradient-text">professional connections</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up text-balance">
                Join a team of passionate individuals working to transform how professionals 
                discover and connect with each other.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why join <span className="gradient-text">Entangl?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                We take care of our team so they can focus on what matters
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 bg-card rounded-xl p-4 card-shadow border border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-coral shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Open <span className="gradient-text">Positions</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Find your next role and join our growing team
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={job.title}
                  className="group bg-card rounded-2xl p-6 card-shadow card-hover border border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-coral transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="gradient" size="sm" className="shrink-0">
                    Apply Now
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don't see your <span className="gradient-text">perfect role?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're always looking for exceptional talent. Send us your resume and let's chat 
                about how you can contribute to our mission.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:careers@entangl.com">
                  Send Us Your Resume
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

export default Careers;
