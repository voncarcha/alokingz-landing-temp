"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  variant?: "default" | "blur" | "dark";
  showOverlay?: boolean;
  overlayOpacity?: number;
}

export default function AnimatedBackground({
  variant = "default",
  showOverlay = true,
  overlayOpacity = 0.7,
}: AnimatedBackgroundProps) {
  const overlayClasses = {
    default: "bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900/90",
    blur: "bg-dark-900/70 backdrop-blur-sm",
    dark: "bg-dark-900/85",
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-casino.jpg"
          alt="Casino background"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
      </div>

      {/* Animated gradient overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-crimson-500/5 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "30% 20%" }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-radial from-royal-500/5 via-transparent to-transparent"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "70% 80%" }}
      />

      {/* Main overlay */}
      {showOverlay && (
        <div
          className={`absolute inset-0 ${overlayClasses[variant]}`}
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-900/80" />

      {/* Floating particles effect (CSS only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-crimson-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

