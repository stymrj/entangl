import { Heart } from "lucide-react";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "cta";
}

const AnimatedBackground = ({ variant = "section" }: AnimatedBackgroundProps) => {
  const getHearts = () => {
    switch (variant) {
      case "hero":
        return [
          { size: 16, position: "top-[35%] left-[8%]", opacity: "opacity-40", delay: "animate-float-1" },
          { size: 24, position: "top-[25%] right-[12%]", opacity: "opacity-30", delay: "animate-float-2" },
          { size: 12, position: "bottom-[25%] left-[5%]", opacity: "opacity-35", delay: "animate-float-3" },
          { size: 18, position: "bottom-[35%] right-[8%]", opacity: "opacity-25", delay: "animate-float-4" },
        ];
      case "cta":
        return [
          { size: 10, position: "top-[20%] left-[15%]", opacity: "opacity-30", delay: "animate-float-2" },
          { size: 14, position: "top-[40%] right-[20%]", opacity: "opacity-25", delay: "animate-float-3" },
          { size: 8, position: "bottom-[30%] left-[25%]", opacity: "opacity-35", delay: "animate-float-1" },
          { size: 12, position: "bottom-[20%] right-[15%]", opacity: "opacity-20", delay: "animate-float-4" },
          { size: 6, position: "top-[60%] left-[40%]", opacity: "opacity-15", delay: "animate-float-2" },
          { size: 8, position: "top-[30%] left-[60%]", opacity: "opacity-20", delay: "animate-float-3" },
        ];
      default:
        return [
          { size: 14, position: "top-[20%] left-[3%]", opacity: "opacity-25", delay: "animate-float-1" },
          { size: 10, position: "bottom-[15%] right-[5%]", opacity: "opacity-20", delay: "animate-float-3" },
        ];
    }
  };

  const hearts = getHearts();

  const getBackgroundClasses = () => {
    switch (variant) {
      case "hero":
        return (
          <>
            {/* Base cream to pink gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fffbfc] via-white to-[#fdf2f8]" />
            
            {/* Radial gradient overlays for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(236,72,153,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_100%,rgba(244,63,94,0.08),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_100%_80%,rgba(167,139,250,0.06),transparent)]" />
            
            {/* Soft blur layers */}
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[80px] animate-float-1" />
            <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-purple-200/15 rounded-full blur-[60px] animate-float-2" />
            <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-rose-200/15 rounded-full blur-[80px] animate-float-3" />
          </>
        );
      case "cta":
        return (
          <>
            {/* Dreamy pink gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f8] via-[#fce7f3] to-[#fbcfe8]" />
            
            {/* Complex radial overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(236,72,153,0.15),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(167,139,250,0.1),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_80%_20%,rgba(59,130,246,0.05),transparent)]" />
            
            {/* Floating soft blur elements */}
            <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-pink-300/20 rounded-full blur-[60px] animate-float-2" />
            <div className="absolute bottom-[15%] right-[15%] w-[350px] h-[350px] bg-rose-200/25 rounded-full blur-[80px] animate-float-4" />
            <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-purple-200/15 rounded-full blur-[50px] animate-float-1" />
          </>
        );
      default:
        return (
          <>
            {/* Soft linear gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fffbfc] via-white to-[#fdf2f8]" />
            
            {/* Subtle radial overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(236,72,153,0.06),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(244,63,94,0.04),transparent)]" />
            
            {/* Very subtle blur elements */}
            <div className="absolute top-[20%] left-[-5%] w-[350px] h-[350px] bg-pink-100/20 rounded-full blur-[60px] animate-float-1" />
            <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-rose-100/15 rounded-full blur-[60px] animate-float-3" />
          </>
        );
    }
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient layers */}
      {getBackgroundClasses()}
      
      {/* Floating hearts */}
      {hearts.map((heart, index) => (
        <div
          key={index}
          className={`absolute ${heart.position} ${heart.opacity} ${heart.delay} text-pink-400`}
        >
          <Heart size={heart.size} fill="currentColor" strokeWidth={0} />
        </div>
      ))}
      
      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `radial-gradient(circle, #ec4899 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
