import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "cta";
}

const AnimatedBackground = ({ variant = "section" }: AnimatedBackgroundProps) => {
  const getConfig = () => {
    switch (variant) {
      case "hero":
        return {
          orbs: [
            { 
              size: "w-[600px] h-[600px]", 
              position: "top-[-20%] left-[5%]", 
              color: "bg-gradient-to-br from-coral/30 via-pink/20 to-transparent", 
              delay: 0, 
              duration: 15,
              moveX: [-20, 40, -10, 30, -20],
              moveY: [-10, 30, -20, 10, -10],
            },
            { 
              size: "w-[500px] h-[500px]", 
              position: "top-[10%] right-[-10%]", 
              color: "bg-gradient-to-bl from-purple/25 via-pink/15 to-transparent", 
              delay: 2, 
              duration: 18,
              moveX: [20, -30, 10, -20, 20],
              moveY: [10, -20, 30, -10, 10],
            },
            { 
              size: "w-[450px] h-[450px]", 
              position: "bottom-[5%] left-[15%]", 
              color: "bg-gradient-to-tr from-pink/20 via-coral/15 to-transparent", 
              delay: 4, 
              duration: 20,
              moveX: [-30, 20, -40, 10, -30],
              moveY: [20, -30, 10, -20, 20],
            },
            { 
              size: "w-[400px] h-[400px]", 
              position: "bottom-[20%] right-[10%]", 
              color: "bg-gradient-to-tl from-coral/20 via-purple/10 to-transparent", 
              delay: 1, 
              duration: 16,
              moveX: [10, -20, 30, -15, 10],
              moveY: [-15, 25, -10, 20, -15],
            },
          ],
        };
      case "cta":
        return {
          orbs: [
            { 
              size: "w-[700px] h-[700px]", 
              position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", 
              color: "bg-gradient-to-br from-coral/20 via-pink/15 to-purple/10", 
              delay: 0, 
              duration: 12,
              moveX: [-30, 30, -20, 25, -30],
              moveY: [-20, 25, -30, 20, -20],
            },
            { 
              size: "w-[400px] h-[400px]", 
              position: "top-[5%] left-[5%]", 
              color: "bg-gradient-to-br from-pink/20 to-transparent", 
              delay: 3, 
              duration: 14,
              moveX: [20, -30, 15, -25, 20],
              moveY: [15, -20, 25, -15, 15],
            },
            { 
              size: "w-[350px] h-[350px]", 
              position: "bottom-[5%] right-[5%]", 
              color: "bg-gradient-to-tl from-purple/20 to-transparent", 
              delay: 1.5, 
              duration: 16,
              moveX: [-25, 20, -30, 15, -25],
              moveY: [20, -25, 15, -20, 20],
            },
          ],
        };
      default:
        return {
          orbs: [
            { 
              size: "w-[500px] h-[500px]", 
              position: "top-[10%] left-[-10%]", 
              color: "bg-gradient-to-br from-coral/20 via-pink/10 to-transparent", 
              delay: 0, 
              duration: 18,
              moveX: [-20, 35, -15, 25, -20],
              moveY: [15, -25, 20, -15, 15],
            },
            { 
              size: "w-[450px] h-[450px]", 
              position: "bottom-[10%] right-[-10%]", 
              color: "bg-gradient-to-tl from-purple/20 via-pink/10 to-transparent", 
              delay: 2, 
              duration: 20,
              moveX: [25, -20, 30, -25, 25],
              moveY: [-20, 30, -15, 25, -20],
            },
            { 
              size: "w-[300px] h-[300px]", 
              position: "top-[40%] right-[20%]", 
              color: "bg-gradient-to-bl from-pink/15 to-transparent", 
              delay: 4, 
              duration: 15,
              moveX: [-15, 25, -20, 15, -15],
              moveY: [20, -15, 25, -20, 20],
            },
          ],
        };
    }
  };

  const config = getConfig();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated gradient orbs */}
      {config.orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.position} ${orb.color} rounded-full blur-[80px]`}
          animate={{
            scale: [1, 1.2, 1.1, 1.25, 1],
            x: orb.moveX,
            y: orb.moveY,
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
