import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const featuredPost = {
  title: "Chemistry Over Connections: Why Professional Dating Changes Everything",
  excerpt: "The future of professional relationships isn't LinkedIn. It's matching people who actually click—based on real compatibility, not just credentials.",
  author: "Bharti Nandan",
  date: "January 20, 2026",
  readTime: "8 min read",
  category: "Insights",
};

const posts = [
  {
    title: "Co-Founder Matching: Finding Your Perfect Professional Partner",
    excerpt: "What makes co-founder relationships actually work? Real chemistry, aligned values, and complementary skills.",
    author: "Anand Kumar",
    date: "January 18, 2026",
    readTime: "5 min read",
    category: "Founders",
  },
  {
    title: "The Algorithm Meets Romance: How We Match Professionals Who Click",
    excerpt: "Our matching engine goes beyond skills. We find people who actually vibe together.",
    author: "Satyam Raj",
    date: "January 16, 2026",
    readTime: "6 min read",
    category: "Founders",
  },
  {
    title: "From Match to Millions: Real Stories of Professional Chemistry",
    excerpt: "These founders and mentors found their perfect match on Entangl. Here's what happened next.",
    author: "Jessica Chen",
    date: "January 12, 2026",
    readTime: "7 min read",
    category: "Success Stories",
  },
  {
    title: "Mentorship That Matters: Finding the Right Guide",
    excerpt: "The best mentorship relationships are built on genuine connection and mutual respect.",
    author: "Alex Patel",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Career",
  },
  {
    title: "Why LinkedIn Isn't Enough: The Case for Professional Dating",
    excerpt: "Surface-level connections don't build real relationships. Professional dating changes everything.",
    author: "Marcus Thompson",
    date: "January 8, 2026",
    readTime: "8 min read",
    category: "Insights",
  },
  {
    title: "Building Real Professional Relationships: Beyond the Algorithm",
    excerpt: "True compatibility goes deeper than resumes. Here's what actually matters.",
    author: "Emma Wilson",
    date: "January 5, 2026",
    readTime: "7 min read",
    category: "Insights",
  },
];

const categories = ["All", "Insights", "Founders", "Success Stories", "Mentorship", "Product", "Career"];

const Blog = () => {
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
            <div className="absolute top-20 left-1/3 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up text-balance">
                The <span className="gradient-text">Professional Dating</span> Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up">
                Stories, insights, and chemistry guides for finding your perfect professional match.
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
        <section className="py-16 lg:py-24">
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
