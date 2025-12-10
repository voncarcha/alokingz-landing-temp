"use client";

import { motion } from "framer-motion";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features?: Feature[];
  variant?: "grid" | "stack" | "carousel";
  accentColor?: "gold" | "crimson" | "royal";
}

const defaultFeatures: Feature[] = [
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Lucky Bonus",
    description:
      "Try your luck at the slot machine and earn free chips. Spin each day for even more chips!",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
      </svg>
    ),
    title: "Collections",
    description:
      "Be the envy of your opponents by earning and showing off prestigious Watches and Rings!",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    title: "Challenges",
    description:
      "Are you up to the Challenge? Complete your three daily goals and earn prizes!",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    title: "Social Play",
    description:
      "Connect with friends, join tables together, and compete in exciting tournaments!",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    title: "Safe & Secure",
    description:
      "Play with confidence. Your data is protected with industry-leading security.",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Our support team is always available to help you with any questions.",
  },
];

export default function FeatureGrid({
  features = defaultFeatures,
  variant = "grid",
  accentColor = "gold",
}: FeatureGridProps) {
  const accentClasses = {
    gold: {
      icon: "text-gold-400",
      border: "hover:border-gold-500/30",
      shadow: "hover:shadow-gold-500/10",
    },
    crimson: {
      icon: "text-crimson-400",
      border: "hover:border-crimson-500/30",
      shadow: "hover:shadow-crimson-500/10",
    },
    royal: {
      icon: "text-royal-400",
      border: "hover:border-royal-500/30",
      shadow: "hover:shadow-royal-500/10",
    },
  };

  const accent = accentClasses[accentColor];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (variant === "stack") {
    return (
      <section id="features" className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-gradient-blue">AloKingz</span>?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the thrill of free play gaming with premium features
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-card flex items-start gap-6 ${accent.border} ${accent.shadow}`}
                variants={itemVariants}
              >
                <div className={`${accent.icon} flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient-gold">AloKingz</span>?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experience the thrill of free play gaming with premium features
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`feature-card text-center ${accent.border} ${accent.shadow}`}
              variants={itemVariants}
            >
              <div className={`${accent.icon} mb-4 flex justify-center`}>
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

