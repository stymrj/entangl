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
            <div 
              className="absolute inset-0" 
              style={{ background: 'linear-gradient(to bottom, #fffbfc, #ffffff, #fdf2f8)' }}
            />
            
            {/* Radial gradient overlays for depth */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(236,72,153,0.15), transparent)' }}
            />
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 60% 40% at 0% 100%, rgba(244,63,94,0.1), transparent)' }}
            />
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 50% 30% at 100% 80%, rgba(167,139,250,0.08), transparent)' }}
            />
            
            {/* Soft blur layers */}
            <div 
              className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full animate-float-1"
              style={{ background: 'rgba(251, 207, 232, 0.4)', filter: 'blur(80px)' }}
            />
            <div 
              className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full animate-float-2"
              style={{ background: 'rgba(221, 214, 254, 0.3)', filter: 'blur(60px)' }}
            />
            <div 
              className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] rounded-full animate-float-3"
              style={{ background: 'rgba(254, 205, 211, 0.35)', filter: 'blur(80px)' }}
            />
          </>
        );
      case "cta":
        return (
          <>
            {/* Dreamy pink gradient base */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'linear-gradient(to bottom right, #fdf2f8, #fce7f3, #fbcfe8)' }}
            />
            
            {/* Complex radial overlays */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(236,72,153,0.18), transparent)' }}
            />
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 80%, rgba(167,139,250,0.12), transparent)' }}
            />
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 50% 30% at 80% 20%, rgba(59,130,246,0.08), transparent)' }}
            />
            
            {/* Floating soft blur elements */}
            <div 
              className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full animate-float-2"
              style={{ background: 'rgba(249, 168, 212, 0.4)', filter: 'blur(60px)' }}
            />
            <div 
              className="absolute bottom-[15%] right-[15%] w-[350px] h-[350px] rounded-full animate-float-4"
              style={{ background: 'rgba(254, 205, 211, 0.45)', filter: 'blur(80px)' }}
            />
            <div 
              className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full animate-float-1"
              style={{ background: 'rgba(221, 214, 254, 0.3)', filter: 'blur(50px)' }}
            />
          </>
        );
      default:
        return (
          <>
            {/* Soft linear gradient */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'linear-gradient(to bottom, #fffbfc, #ffffff, #fdf2f8)' }}
            />
            
            {/* Subtle radial overlay */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(236,72,153,0.08), transparent)' }}
            />
            <div 
              className="absolute inset-0" 
              style={{ background: 'radial-gradient(ellipse 50% 40% at 100% 100%, rgba(244,63,94,0.06), transparent)' }}
            />
            
            {/* Very subtle blur elements */}
            <div 
              className="absolute top-[20%] left-[-5%] w-[350px] h-[350px] rounded-full animate-float-1"
              style={{ background: 'rgba(252, 231, 243, 0.4)', filter: 'blur(60px)' }}
            />
            <div 
              className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] rounded-full animate-float-3"
              style={{ background: 'rgba(254, 205, 211, 0.3)', filter: 'blur(60px)' }}
            />
          </>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
      {/* Gradient layers */}
      {getBackgroundClasses()}
      
      {/* Floating hearts */}
      {hearts.map((heart, index) => (
        <div
          key={index}
          className={`absolute ${heart.position} ${heart.opacity} ${heart.delay}`}
          style={{ color: '#ec4899' }}
        >
          <Heart size={heart.size} fill="currentColor" strokeWidth={0} />
        </div>
      ))}
      
      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle, #ec4899 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: 0.015,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
