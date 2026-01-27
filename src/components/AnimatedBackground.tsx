interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "cta";
}

const AnimatedBackground = ({ variant = "section" }: AnimatedBackgroundProps) => {
  const getOrbClasses = () => {
    switch (variant) {
      case "hero":
        return [
          "absolute w-[600px] h-[600px] top-[-20%] left-[5%] bg-gradient-to-br from-coral/30 via-pink/20 to-transparent rounded-full blur-[80px] animate-float-1",
          "absolute w-[500px] h-[500px] top-[10%] right-[-10%] bg-gradient-to-bl from-purple/25 via-pink/15 to-transparent rounded-full blur-[80px] animate-float-2",
          "absolute w-[450px] h-[450px] bottom-[5%] left-[15%] bg-gradient-to-tr from-pink/20 via-coral/15 to-transparent rounded-full blur-[80px] animate-float-3",
          "absolute w-[400px] h-[400px] bottom-[20%] right-[10%] bg-gradient-to-tl from-coral/20 via-purple/10 to-transparent rounded-full blur-[80px] animate-float-4",
        ];
      case "cta":
        return [
          "absolute w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-coral/20 via-pink/15 to-purple/10 rounded-full blur-[80px] animate-float-1",
          "absolute w-[400px] h-[400px] top-[5%] left-[5%] bg-gradient-to-br from-pink/20 to-transparent rounded-full blur-[80px] animate-float-3",
          "absolute w-[350px] h-[350px] bottom-[5%] right-[5%] bg-gradient-to-tl from-purple/20 to-transparent rounded-full blur-[80px] animate-float-2",
        ];
      default:
        return [
          "absolute w-[500px] h-[500px] top-[10%] left-[-10%] bg-gradient-to-br from-coral/20 via-pink/10 to-transparent rounded-full blur-[80px] animate-float-1",
          "absolute w-[450px] h-[450px] bottom-[10%] right-[-10%] bg-gradient-to-tl from-purple/20 via-pink/10 to-transparent rounded-full blur-[80px] animate-float-2",
          "absolute w-[300px] h-[300px] top-[40%] right-[20%] bg-gradient-to-bl from-pink/15 to-transparent rounded-full blur-[80px] animate-float-3",
        ];
    }
  };

  const orbClasses = getOrbClasses();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated gradient orbs using pure CSS */}
      {orbClasses.map((className, index) => (
        <div key={index} className={className} />
      ))}
      
      {/* Soft overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
