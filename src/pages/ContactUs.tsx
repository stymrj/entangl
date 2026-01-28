import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedBackground from "@/components/AnimatedBackground";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "support@entangl.in",
    href: "mailto:support@entangl.in",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm IST",
    value: "+917091298828",
    href: "tel:+917091298828",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our HQ",
    value: "Graphix 2, Electonic City, Noida, Uttar Pradesh",
    href: "#",
  },
];

const faqs = [
  {
    question: "How long does verification take?",
    answer: "Verification typically takes 1-2 hours once you've signed up with your corporate email.",
  },
  {
    question: "Can I use a personal email?",
    answer: "Currently, we require a corporate email for verification to maintain our professional community standards.",
  },
  {
    question: "Is Entangl free to use?",
    answer: "We offer a free tier with limited matches. Premium plans unlock unlimited matches and advanced features.",
  },
  {
    question: "How do you protect my data?",
    answer: "We use enterprise-grade encryption and never share your data with third parties. See our Privacy Policy for details.",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://quyxwsloavenbftawsti.supabase.co/functions/v1/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatedBackground variant="section" />
      </div>
      <Navbar />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up text-balance">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up text-balance">
                Questions about Entangl? Want to join our team? Let's talk about finding your perfect professional match.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="group bg-card rounded-2xl p-6 text-center card-shadow card-hover border border-border/50 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg mx-auto mb-4 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <method.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-coral font-medium">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send us a <span className="gradient-text">Message</span>
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12 bg-card"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12 bg-card"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <Input
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="h-12 bg-card"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        placeholder="Tell us more..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      variant="gradient" 
                      size="lg" 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Frequently <span className="gradient-text">Asked</span>
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-card rounded-2xl p-6 card-shadow border border-border/50">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
