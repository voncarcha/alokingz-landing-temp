"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface StatsStripProps {
  title?: string;
  stats?: Stat[];
  accentColor?: "gold" | "crimson" | "royal";
}

const defaultStats: Stat[] = [
  { value: "10M+", label: "Active Players" },
  { value: "500K+", label: "Daily Games" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function StatsStrip({
  title = "The World's Most Exciting Free Play Platform",
  stats = defaultStats,
  accentColor = "gold",
}: StatsStripProps) {
  const accentClasses = {
    gold: {
      gradient: "from-gold-600/20 via-gold-500/10 to-gold-600/20",
      border: "border-gold-500/20",
      value: "text-gold-400",
    },
    crimson: {
      gradient: "from-crimson-600/20 via-crimson-500/10 to-crimson-600/20",
      border: "border-crimson-500/20",
      value: "text-crimson-400",
    },
    royal: {
      gradient: "from-royal-600/20 via-royal-500/10 to-royal-600/20",
      border: "border-royal-500/20",
      value: "text-royal-400",
    },
  };

  const accent = accentClasses[accentColor];

  return (
    <section className={`relative py-16 bg-gradient-to-r ${accent.gradient}`}>
      {/* Top border */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${accent.gradient}`} />
      {/* Bottom border */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${accent.gradient}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {title}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold ${accent.value} mb-2`}>
                {stat.value}
              </div>
              <div className="text-white/50 text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

