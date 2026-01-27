import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "hello@entangl.com",
    href: "mailto:hello@entangl.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm PST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our HQ",
    value: "123 Market St, SF, CA 94105",
    href: "#",
  },
];

const faqs = [
  {
    question: "How long does verification take?",
    answer: "Verification typically takes 24-48 hours once you've signed up with your corporate email.",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up text-balance">
                We'd love to{" "}
                <span className="gradient-text">hear from you</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up">
                Have a question, feedback, or just want to say hi? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="group bg-card rounded-2xl p-6 text-center card-shadow card-hover border border-border/50"
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

        {/* Contact Form */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send us a <span className="gradient-text">message</span>
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full h-32 px-4 py-3 rounded-lg border border-border bg-card focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="bg-card rounded-2xl p-8 text-center card-shadow border border-border/50 animate-fade-in">
                    <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Frequently <span className="gradient-text">Asked</span>
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.question}
                      className="bg-card rounded-xl p-5 card-shadow border border-border/50"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Typical response time: Under 24 hours</span>
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
