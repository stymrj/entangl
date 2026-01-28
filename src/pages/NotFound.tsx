import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-50 via-white to-pink-100 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatedBackground variant="section" />
      </div>
      <div className="text-center relative z-10 max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">💔</div>
        <h1 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">No Match Found</h1>
        <p className="mb-8 text-xl text-muted-foreground">This page doesn't exist—kind of like a bad professional match.</p>
        <a href="/" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-coral to-purple text-white font-medium hover:shadow-lg hover:scale-105 transition-all">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
