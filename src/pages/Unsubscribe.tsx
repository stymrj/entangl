import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatedBackground variant="section" />
      </div>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 min-h-[60vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-coral/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              {!isSubmitted ? (
                <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow border border-border/50 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-coral" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Stop the <span className="gradient-text">Love Notes</span>
                  </h1>
                  <p className="text-muted-foreground mb-8">
                    We understand—professional dating isn't for everyone. Enter your email to unsubscribe from our updates.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-background"
                      required
                    />
                    <Button type="submit" variant="gradient" size="lg" className="w-full">
                      Unsubscribe
                    </Button>
                  </form>

                  <div className="mt-6 p-4 rounded-xl bg-secondary/50 flex items-start gap-3 text-left">
                    <AlertCircle className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> You'll still receive important account-related emails 
                      like password resets and security alerts.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow border border-border/50 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Check className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    We'll Miss You!
                  </h1>
                  <p className="text-muted-foreground mb-8">
                    You've been unsubscribed. We won't send you any more love notes.
                  </p>

                  <div className="space-y-4">
                    <Button variant="outline" size="lg" className="w-full" onClick={() => setIsSubmitted(false)}>
                      Changed your mind? Subscribe again
                    </Button>
                    <Button variant="gradient" size="lg" className="w-full" asChild>
                      <a href="/">Return to Homepage</a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
