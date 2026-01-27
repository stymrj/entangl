import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Who It's For", href: "/#who-its-for" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-foreground">Entangl</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.label} variant="nav" size="sm" asChild>
                {isHomePage ? (
                  <a href={link.href} className="font-medium">{link.label}</a>
                ) : (
                  <Link to={link.href} className="font-medium">{link.label}</Link>
                )}
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gradient" size="sm" className="font-semibold shadow-sm" asChild>
              {isHomePage ? (
                <a href="#cta">Find Your Match</a>
              ) : (
                <Link to="/#cta">Find Your Match</Link>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                isHomePage ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="mt-3 px-4">
                <Button variant="gradient" className="w-full font-semibold" asChild>
                  {isHomePage ? (
                    <a href="#cta">Find Your Match</a>
                  ) : (
                    <Link to="/#cta">Find Your Match</Link>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
