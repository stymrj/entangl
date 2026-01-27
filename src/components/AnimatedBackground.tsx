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
            { size: "w-[500px] h-[500px]", position: "top-[-10%] left-[10%]", color: "bg-coral/15", delay: 0, duration: 8 },
            { size: "w-[400px] h-[400px]", position: "top-[20%] right-[5%]", color: "bg-purple/12", delay: 2, duration: 10 },
            { size: "w-[350px] h-[350px]", position: "bottom-[10%] left-[20%]", color: "bg-pink/10", delay: 4, duration: 9 },
            { size: "w-[300px] h-[300px]", position: "bottom-[30%] right-[15%]", color: "bg-coral/8", delay: 1, duration: 11 },
          ],
          overlay: "bg-gradient-to-b from-background/40 via-background/60 to-background",
        };
      case "cta":
        return {
          orbs: [
            { size: "w-[600px] h-[600px]", position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", color: "bg-coral/10", delay: 0, duration: 10 },
            { size: "w-[400px] h-[400px]", position: "top-[10%] left-[10%]", color: "bg-pink/8", delay: 3, duration: 12 },
            { size: "w-[350px] h-[350px]", position: "bottom-[10%] right-[10%]", color: "bg-purple/8", delay: 1.5, duration: 9 },
          ],
          overlay: "bg-gradient-to-b from-background/30 via-transparent to-background/50",
        };
      default:
        return {
          orbs: [
            { size: "w-[400px] h-[400px]", position: "top-[10%] left-[-5%]", color: "bg-coral/8", delay: 0, duration: 9 },
            { size: "w-[350px] h-[350px]", position: "bottom-[20%] right-[-5%]", color: "bg-purple/8", delay: 2, duration: 11 },
            { size: "w-[250px] h-[250px]", position: "top-[40%] right-[20%]", color: "bg-pink/6", delay: 4, duration: 8 },
          ],
          overlay: "bg-gradient-to-b from-background/20 via-transparent to-background/20",
        };
    }
  };

  const config = getConfig();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      {config.orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.position} ${orb.color} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.15, 1.05, 1.2, 1],
            opacity: [0.6, 0.8, 0.7, 0.9, 0.6],
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Mesh gradient overlay */}
      <div className={`absolute inset-0 ${config.overlay}`} />
      
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
