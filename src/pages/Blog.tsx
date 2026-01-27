import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const featuredPost = {
  title: "The Future of Professional Networking: Why Chemistry Matters",
  excerpt: "Discover why traditional networking is broken and how chemistry-based matching is revolutionizing the way professionals connect.",
  author: "Sarah Chen",
  date: "January 15, 2026",
  readTime: "8 min read",
  category: "Insights",
};

const posts = [
  {
    title: "5 Signs You've Found Your Perfect Co-Founder",
    excerpt: "The entrepreneurial journey is tough—here's how to know if you've found the right partner.",
    author: "Marcus Johnson",
    date: "January 10, 2026",
    readTime: "5 min read",
    category: "Founders",
  },
  {
    title: "Building Trust in Remote Professional Relationships",
    excerpt: "Tips for creating meaningful connections when you can't meet face-to-face.",
    author: "Elena Rodriguez",
    date: "January 5, 2026",
    readTime: "6 min read",
    category: "Remote Work",
  },
  {
    title: "The Art of the Informational Interview",
    excerpt: "How to approach professionals for advice without feeling awkward.",
    author: "David Kim",
    date: "December 28, 2025",
    readTime: "4 min read",
    category: "Career",
  },
  {
    title: "Why Mentorship Matters More Than Ever in 2026",
    excerpt: "In an AI-driven world, human guidance becomes increasingly valuable.",
    author: "Priya Patel",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Mentorship",
  },
  {
    title: "From Stranger to Strategic Partner: A Case Study",
    excerpt: "How two Entangl members went from first coffee to Series A funding.",
    author: "James Wright",
    date: "December 15, 2025",
    readTime: "10 min read",
    category: "Success Stories",
  },
  {
    title: "The Science Behind Our Matching Algorithm",
    excerpt: "A peek under the hood at how we pair professionals for maximum chemistry.",
    author: "Marcus Johnson",
    date: "December 10, 2025",
    readTime: "8 min read",
    category: "Product",
  },
];

const categories = ["All", "Insights", "Founders", "Career", "Remote Work", "Mentorship", "Success Stories", "Product"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/3 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up text-balance">
                Insights for{" "}
                <span className="gradient-text">ambitious professionals</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up">
                Stories, tips, and strategies for building meaningful professional relationships.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === 0
                      ? "gradient-bg text-primary-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="group bg-card rounded-3xl overflow-hidden card-shadow card-hover border border-border/50">
                <div className="aspect-video bg-gradient-to-br from-coral to-purple flex items-center justify-center">
                  <span className="text-8xl">📱</span>
                </div>
                <div className="p-6 lg:p-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-coral transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button variant="gradient" size="sm">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post, index) => (
                <article
                  key={post.title}
                  className="group bg-card rounded-2xl overflow-hidden card-shadow card-hover border border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-coral/20 to-purple/20 flex items-center justify-center">
                    <span className="text-5xl opacity-50 group-hover:scale-110 transition-transform">📝</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-coral/10 text-coral text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-coral transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Never miss an <span className="gradient-text">insight</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Subscribe to our newsletter for weekly tips on professional networking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 h-12 px-4 rounded-lg border border-border bg-card focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
                />
                <Button variant="gradient" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
