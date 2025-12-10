"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Navigation,
  Footer,
  HeroSection,
  FeatureGrid,
  StatsStrip,
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
          href={`/landing-1?v=${v}`}
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

// Variation 1: Classic Zynga-inspired layout with gold theme
function Variation1() {
  return (
    <>
      <ParticlesBackground preset="gold" density={60} />
      <AnimatedBackground variant="default" overlayOpacity={0.75} />
      <Navigation />

      <main>
        <HeroSection
          variant="centered"
          accentColor="gold"
          headline="The Ultimate Free Play Experience"
          subheadline="Join millions of players worldwide. Collect rewards, compete with friends, and climb the leaderboards!"
        />

        <StatsStrip
          title="The World's Most Exciting Free Play Platform"
          accentColor="gold"
        />

        <FeatureGrid variant="grid" accentColor="gold" />

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join the <span className="text-gradient-blue">Kings</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Start playing now and experience the thrill of AloKingz. No download required!
            </p>
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

// Variation 2: Left-aligned hero with crimson theme
function Variation2() {
  return (
    <>
      <ParticlesBackground preset="crimson" density={50} />
      <AnimatedBackground variant="blur" overlayOpacity={0.8} />
      <Navigation />

      <main>
        <HeroSection
          variant="left"
          accentColor="crimson"
          headline="Feel the Royal Rush"
          subheadline="Experience premium gaming with stunning visuals and exciting rewards. Your throne awaits!"
        />

        <FeatureGrid variant="stack" accentColor="crimson" />

        <StatsStrip
          title="Join the Elite Players"
          accentColor="crimson"
          stats={[
            { value: "50M+", label: "Games Played" },
            { value: "1M+", label: "Daily Winners" },
            { value: "100+", label: "Countries" },
            { value: "#1", label: "Free Play App" },
          ]}
        />

        {/* CTA Section with different style */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="glass-card p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                  Start Your <span className="text-gradient-crimson">Journey</span> Today
                </h2>
                <p className="text-white/60 max-w-lg">
                  Join thousands of players who discovered the thrill of AloKingz.
                  No credit card required!
                </p>
              </div>
              <a href="#play" className="btn-primary-red flex-shrink-0 text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play to Web Browser
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Variation 3: Right-aligned hero with royal blue theme
function Variation3() {
  return (
    <>
      <ParticlesBackground preset="royal" density={70} />
      <AnimatedBackground variant="dark" overlayOpacity={0.85} />
      <Navigation />

      <main>
        <HeroSection
          variant="right"
          accentColor="royal"
          showBadges={false}
          headline="Reign Supreme"
          subheadline="Master the game, dominate the tables, and become the ultimate champion. The crown is yours to claim!"
        />

        <StatsStrip
          title="Champions Play Here"
          accentColor="royal"
          stats={[
            { value: "∞", label: "Fun Awaits" },
            { value: "0$", label: "Always Free" },
            { value: "VIP", label: "Treatment" },
            { value: "Epic", label: "Rewards" },
          ]}
        />

        <FeatureGrid variant="grid" accentColor="royal" />

        {/* Full-width CTA banner */}
        <section className="py-16 bg-gradient-to-r from-royal-900/50 via-royal-800/30 to-royal-900/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-royal">AloKingz</span> Awaits You
            </h2>
            <p className="text-white/60 text-lg mb-8">
              The table is set. The chips are ready. Are you?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#play" className="btn-primary-blue text-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play to Web Browser
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Landing1Content() {
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

export default function Landing1Page() {
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
      <Landing1Content />
    </Suspense>
  );
}

