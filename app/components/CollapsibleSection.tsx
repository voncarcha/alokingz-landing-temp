"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: "gold" | "neutral";
  icon?: React.ReactNode;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
  variant = "gold",
  icon,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const variantStyles = {
    gold: {
      container: "glass-card",
      header: "text-white hover:text-gold-400",
      border: "border-white/10 hover:border-gold-500/30",
      icon: "text-gold-400",
    },
    neutral: {
      container: "bg-[#111] border border-zinc-800",
      header: "text-white hover:text-gray-300",
      border: "border-zinc-800 hover:border-zinc-700",
      icon: "text-gray-400",
    },
  };

  const styles = variantStyles[variant];

  const borderClass = variant === "gold" ? "border-white/10" : "border-zinc-700";

  return (
    <div className={`${styles.container} ${styles.border} rounded-2xl overflow-hidden transition-all duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className={`flex-shrink-0 ${styles.icon}`}>
              {icon}
            </div>
          )}
          <h3 className={`font-display text-xl font-bold ${styles.header} transition-colors`}>
            {title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${styles.icon} transition-colors`}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-6 pt-0 border-t ${borderClass}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
