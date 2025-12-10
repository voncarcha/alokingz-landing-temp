"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  variant?: "centered" | "left" | "right";
  accentColor?: "gold" | "crimson" | "royal";
  showBadges?: boolean;
  headline?: string;
  subheadline?: string;
}

export default function HeroSection({
  variant = "centered",
  accentColor = "gold",
  showBadges = true,
  headline = "The Ultimate Free Play Experience",
  subheadline = "Join millions of players worldwide. Collect rewards, compete with friends, and climb the leaderboards!",
}: HeroSectionProps) {
  const accentClasses = {
    gold: {
      button: "btn-primary",
      gradient: "from-gold-500/20 via-transparent to-transparent",
      text: "text-gradient-gold",
      glow: "shadow-gold-500/30",
    },
    crimson: {
      button: "btn-primary-red",
      gradient: "from-crimson-500/20 via-transparent to-transparent",
      text: "text-gradient-crimson",
      glow: "shadow-crimson-500/30",
    },
    royal: {
      button: "btn-primary-blue",
      gradient: "from-royal-500/20 via-transparent to-transparent",
      text: "text-gradient-royal",
      glow: "shadow-royal-500/30",
    },
  };

  const accent = accentClasses[accentColor];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const layoutClasses = {
    centered: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  const gridClasses = {
    centered: "justify-center",
    left: "justify-start",
    right: "justify-end",
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${accent.gradient} pointer-events-none`}
      />

      <motion.div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${layoutClasses[variant]}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mb-8"
          variants={logoVariants}
        >
          <Image
            src="/images/logo-alokingz.png"
            alt="AloKingz - The King of Free Play"
            fill
            className="object-contain drop-shadow-2xl animate-glow-pulse"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 ${accent.text}`}
          variants={itemVariants}
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-white/70 text-lg sm:text-xl lg:text-2xl max-w-2xl mb-10"
          variants={itemVariants}
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className={`flex flex-wrap gap-4 ${gridClasses[variant]}`}
          variants={itemVariants}
        >
          <a
            href="#play"
            className={`${accent.button} group`}
          >
            <svg
              className="w-6 h-6 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play to Web Browser
          </a>
          <a href="#features" className="btn-secondary">
            Learn More
          </a>
        </motion.div>

        {/* App badges */}
        {showBadges && (
          <motion.div
            className={`flex flex-wrap gap-4 mt-8 ${gridClasses[variant]}`}
            variants={itemVariants}
          >
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-white/50 uppercase">
                  Download on the
                </div>
                <div className="text-sm font-semibold text-white">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-white/50 uppercase">
                  Get it on
                </div>
                <div className="text-sm font-semibold text-white">
                  Google Play
                </div>
              </div>
            </a>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

