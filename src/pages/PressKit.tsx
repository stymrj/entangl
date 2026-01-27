import { Download, FileText, Image, Video, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const brandAssets = [
  {
    title: "Logo Package",
    description: "Primary logo, icon, and wordmark in various formats",
    icon: Image,
    formats: "SVG, PNG, PDF",
  },
  {
    title: "Brand Guidelines",
    description: "Complete brand identity guide with usage rules",
    icon: FileText,
    formats: "PDF",
  },
  {
    title: "Press Photos",
    description: "High-resolution team and product photos",
    icon: Image,
    formats: "JPG, PNG",
  },
  {
    title: "Product Screenshots",
    description: "App screenshots and UI examples",
    icon: Image,
    formats: "PNG",
  },
  {
    title: "Promotional Videos",
    description: "Brand videos and product demos",
    icon: Video,
    formats: "MP4",
  },
  {
    title: "Fact Sheet",
    description: "Company facts, stats, and milestones",
    icon: FileText,
    formats: "PDF",
  },
];

const pressReleases = [
  {
    date: "January 20, 2026",
    title: "Entangl Raises $15M Series A to Transform Professional Networking",
    outlet: "TechCrunch",
  },
  {
    date: "December 5, 2025",
    title: "Entangl Surpasses 2,000 Verified Professionals on Platform",
    outlet: "Forbes",
  },
  {
    date: "October 15, 2025",
    title: "Entangl Launches Chemistry-Based Matching for Professionals",
    outlet: "The Verge",
  },
  {
    date: "August 1, 2025",
    title: "Former Google and LinkedIn Executives Launch Entangl",
    outlet: "Business Insider",
  },
];

const stats = [
  { value: "2,000+", label: "Verified Professionals" },
  { value: "500+", label: "Successful Matches" },
  { value: "50+", label: "Countries" },
  { value: "$15M", label: "Series A Raised" },
];

const PressKit = () => {
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
                Press Kit
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up text-balance">
                Everything you need to{" "}
                <span className="gradient-text">tell our story</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up mb-8">
                Download brand assets, press releases, and company information.
              </p>
              <Button variant="gradient" size="lg">
                <Download className="mr-2 w-5 h-5" />
                Download Full Press Kit
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Brand <span className="gradient-text">Assets</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Download our logos, images, and brand guidelines
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {brandAssets.map((asset, index) => (
                <div
                  key={asset.title}
                  className="group bg-card rounded-2xl p-6 card-shadow card-hover border border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-coral/10 transition-colors">
                    <asset.icon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{asset.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{asset.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{asset.formats}</span>
                    <Button variant="ghost" size="sm" className="text-coral hover:text-coral">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Press <span className="gradient-text">Releases</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Latest news and announcements
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {pressReleases.map((release, index) => (
                <div
                  key={release.title}
                  className="group bg-card rounded-2xl p-6 card-shadow card-hover border border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-muted-foreground">{release.date}</span>
                      <span className="px-2 py-0.5 rounded-full bg-coral/10 text-coral text-xs font-medium">
                        {release.outlet}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-coral transition-colors">
                      {release.title}
                    </h3>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">
                    Read
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Media <span className="gradient-text">Inquiries</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                For press inquiries, interviews, or additional materials, please contact our communications team.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <a href="mailto:press@entangl.com">
                  Contact Press Team
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

export default PressKit;
