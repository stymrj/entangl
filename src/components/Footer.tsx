import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Who It's For", href: "/#who-its-for" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press Kit", href: "/press" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Contact Us", href: "/contact" },
      { label: "Unsubscribe", href: "/unsubscribe" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 border-t border-border/40 mt-20">
      <div className="container mx-auto px-4 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/new_logo.png" alt="Entangl" className="h-20 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where professionals find their perfect match.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-coral transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-coral transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-coral transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Entangl. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for professionals
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
