"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navigation,
  Footer,
  AnimatedBackground,
  ParticlesBackground,
} from "@/app/components";

// Variation selector component
function VariationSelector({
  currentVariation,
}: {
  currentVariation: number;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2 bg-dark-800/90 backdrop-blur-xl rounded-full p-2 border border-white/10">
      {[1, 2, 3].map((v) => (
        <a
          key={v}
          href={`/landing-3?v=${v}`}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold transition-all ${
            currentVariation === v
              ? "bg-gradient-to-br from-crimson-500 to-royal-500 text-white"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          {v}
        </a>
      ))}
    </div>
  );
}

// Feature stepper component
function FeatureStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: "🎮",
      title: "Sign Up Free",
      description: "Create your account in seconds. No credit card required, just your email and you're ready to play!",
    },
    {
      icon: "🎰",
      title: "Start Playing",
      description: "Jump into thousands of games. From classic poker to exciting slots, there's something for everyone.",
    },
    {
      icon: "💎",
      title: "Collect Rewards",
      description: "Earn chips, badges, and exclusive collectibles. The more you play, the more you earn!",
    },
    {
      icon: "👑",
      title: "Climb the Ranks",
      description: "Rise through the leaderboards and become the ultimate champion. Your throne awaits!",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Steps indicator */}
      <div className="flex justify-between mb-12 relative">
        {/* Connection line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10" />
        <motion.div
          className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-crimson-500 via-royal-500 to-crimson-500"
          initial={{ width: "0%" }}
          animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />

        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className="relative z-10 flex flex-col items-center gap-2"
          >
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all ${
                index <= activeStep
                  ? "bg-gradient-to-br from-crimson-500 to-royal-500 shadow-lg shadow-crimson-500/30"
                  : "bg-dark-600 border border-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {step.icon}
            </motion.div>
            <span
              className={`text-xs font-display uppercase tracking-wider hidden sm:block ${
                index <= activeStep ? "text-crimson-300" : "text-white/40"
              }`}
            >
              Step {index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <span className="text-6xl mb-4 block">{steps[activeStep].icon}</span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            {steps[activeStep].title}
          </h3>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {steps[activeStep].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="px-6 py-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        <button
          onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
          disabled={activeStep === steps.length - 1}
          className="px-6 py-2 rounded-lg bg-gradient-to-t from-crimson-500 to-royal-500 text-white font-semibold hover:from-crimson-400 hover:to-royal-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Feature carousel component
function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Lucky Bonus",
      description: "Spin the wheel daily and win free chips! Your luck could change everything.",
      image: "🎰",
      gradient: "from-royal-500/20 to-blue-500/20",
    },
    {
      title: "Collections",
      description: "Collect rare watches and rings. Show off your status to other players.",
      image: "💎",
      gradient: "from-royal-500/20 to-purple-500/20",
    },
    {
      title: "Challenges",
      description: "Complete daily goals and earn massive rewards. New challenges every day!",
      image: "🏆",
      gradient: "from-crimson-500/20 to-pink-500/20",
    },
    {
      title: "Tournaments",
      description: "Compete against the best and win huge prize pools. Glory awaits!",
      image: "⚔️",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <div className="relative">
      {/* Main carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`glass-card p-8 sm:p-12 bg-gradient-to-br ${features[activeIndex].gradient}`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <span className="text-8xl sm:text-9xl">{features[activeIndex].image}</span>
              <div className="text-center md:text-left">
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                  {features[activeIndex].title}
                </h3>
                <p className="text-white/70 text-lg max-w-md">
                  {features[activeIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-6">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-gradient-to-r from-crimson-500 to-royal-500 w-8"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => setActiveIndex((prev) => (prev - 1 + features.length) % features.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-800/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-dark-700 transition-all"
      >
        ←
      </button>
      <button
        onClick={() => setActiveIndex((prev) => (prev + 1) % features.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-800/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-dark-700 transition-all"
      >
        →
      </button>
    </div>
  );
}

// Variation 1: Full-screen centered with stepper
function Variation1() {
  return (
    <>
      <ParticlesBackground preset="sparkle" density={100} />
      <AnimatedBackground variant="dark" overlayOpacity={0.9} />
      <Navigation />

      <main className="pt-20">
        {/* Full-screen hero */}
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <motion.div
            className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Image
              src="/images/logo-alokingz.png"
              alt="AloKingz"
              fill
              className="object-contain animate-float"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-crimson-500/20 via-royal-500/20 via-transparent to-transparent animate-pulse" />
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white">Welcome to</span>
            <br />
            <span className="text-gradient-blue">AloKingz</span>
          </motion.h1>

          <motion.p
            className="text-white/60 text-xl text-center max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Your journey to becoming the ultimate champion starts here
          </motion.p>

          <motion.a
            href="#play"
            className="btn-primary text-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play to Web Browser
          </motion.a>
        </section>

        {/* How it works section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                How It <span className="text-gradient-blue">Works</span>
              </h2>
              <p className="text-white/60 text-lg">
                Four simple steps to start your winning journey
              </p>
            </div>
            <FeatureStepper />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Begin?
            </h2>
            <a href="#play" className="btn-primary text-xl">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play to Web Browser
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Variation 2: Right-aligned with vertical CTA list
function Variation2() {
  const ctaOptions = [
    { icon: "🌐", label: "Play to Web Browser", primary: true },
    { icon: "📱", label: "Download iOS App", primary: false },
    { icon: "🤖", label: "Download Android App", primary: false },
  ];

  return (
    <>
      <ParticlesBackground preset="gold" density={80} />
      <AnimatedBackground variant="default" overlayOpacity={0.8} />
      <Navigation />

      <main className="pt-20">
        {/* Split hero */}
        <section className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Logo and content */}
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <Image
                    src="/images/logo-alokingz.png"
                    alt="AloKingz"
                    fill
                    className="object-contain animate-glow-pulse"
                  />
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-8 -right-8 text-6xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    👑
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 text-5xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🃏
                  </motion.div>
                </div>
              </motion.div>

              {/* Right - CTA list */}
              <motion.div
                className="order-1 lg:order-2 text-right"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Join the</span>
                  <br />
                  <span className="text-gradient-blue">Royal Table</span>
                </h1>
                <p className="text-white/60 text-lg mb-10 max-w-lg ml-auto">
                  Experience the ultimate free-to-play gaming experience.
                  Choose how you want to play:
                </p>

                {/* Vertical CTA list */}
                <div className="space-y-4">
                  {ctaOptions.map((option, index) => (
                    <motion.a
                      key={index}
                      href="#play"
                      className={`flex items-center justify-end gap-4 p-4 rounded-xl transition-all ${
                        option.primary
                          ? "btn-primary !justify-end w-full"
                          : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className={`font-display font-bold ${option.primary ? "" : "text-white"}`}>
                        {option.label}
                      </span>
                      <span className="text-2xl">{option.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature carousel */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Discover <span className="text-gradient-blue">Features</span>
              </h2>
            </div>
            <FeatureCarousel />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Variation 3: Split-screen with immersive visuals
function Variation3() {
  return (
    <>
      <ParticlesBackground preset="casino" density={100} />
      <AnimatedBackground variant="blur" overlayOpacity={0.7} />
      <Navigation />

      <main className="pt-20">
        {/* Immersive split-screen hero */}
        <section className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 flex">
            {/* Left panel - dark */}
            <motion.div
              className="w-1/2 bg-dark-900/90 flex items-center justify-end pr-12"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-md text-right">
                <motion.h1
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-gradient-crimson">Free</span>
                  <br />
                  <span className="text-white">Play</span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Right panel - accent */}
            <motion.div
              className="w-1/2 bg-gradient-to-br from-crimson-500/20 via-royal-500/30 via-royal-600/20 to-dark-900/90 flex items-center justify-start pl-12"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-md">
                <motion.h1
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-white">Royal</span>
                  <br />
                  <span className="text-gradient-blue">Thrills</span>
                </motion.h1>
              </div>
            </motion.div>
          </div>

          {/* Center content overlay */}
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Image
                src="/images/logo-alokingz.png"
                alt="AloKingz"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-white/70 text-xl mb-8 max-w-md">
                Where every moment is a chance to win big
              </p>
              <a href="#play" className="btn-primary text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play to Web Browser
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features with stepper */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Your <span className="text-gradient-blue">Adventure</span> Awaits
              </h2>
            </div>
            <FeatureStepper />
          </div>
        </section>

        {/* Carousel section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Explore <span className="text-gradient-blue">More</span>
              </h2>
            </div>
            <FeatureCarousel />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 sm:p-12 bg-gradient-to-r from-crimson-500/10 via-transparent to-royal-500/10"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                The Table is Set
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Your royal adventure begins with a single click
              </p>
              <a href="#play" className="btn-primary text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play to Web Browser
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Landing3Content() {
  const searchParams = useSearchParams();
  const variation = parseInt(searchParams.get("v") || "1", 10);
  const currentVariation = [1, 2, 3].includes(variation) ? variation : 1;

  return (
    <>
      {currentVariation === 1 && <Variation1 />}
      {currentVariation === 2 && <Variation2 />}
      {currentVariation === 3 && <Variation3 />}
      <VariationSelector currentVariation={currentVariation} />
    </>
  );
}

export default function Landing3Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-gradient-red-blue font-display text-xl">
            Loading...
          </div>
        </div>
      }
    >
      <Landing3Content />
    </Suspense>
  );
}

