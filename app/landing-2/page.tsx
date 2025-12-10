"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Navigation,
  Footer,
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
          href={`/landing-2?v=${v}`}
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

// Leaderboard component
function Leaderboard({ accentColor = "gold" }: { accentColor?: "gold" | "crimson" | "royal" }) {
  const players = [
    { rank: 1, name: "KingAce777", chips: "2.5B", avatar: "👑" },
    { rank: 2, name: "RoyalFlush99", chips: "1.8B", avatar: "🎭" },
    { rank: 3, name: "PokerPro_X", chips: "1.2B", avatar: "🃏" },
    { rank: 4, name: "LuckyDraw", chips: "980M", avatar: "🍀" },
    { rank: 5, name: "ChipMaster", chips: "750M", avatar: "💰" },
  ];

  const colors = {
    gold: { bg: "bg-gold-500/10", border: "border-gold-500/20", accent: "text-gold-400" },
    crimson: { bg: "bg-crimson-500/10", border: "border-crimson-500/20", accent: "text-crimson-400" },
    royal: { bg: "bg-royal-500/10", border: "border-royal-500/20", accent: "text-royal-400" },
  };

  return (
    <div className="glass-card p-6">
      <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">🏆</span> Top Players
      </h3>
      <div className="space-y-3">
        {players.map((player, index) => (
          <motion.div
            key={player.rank}
            className={`flex items-center gap-4 p-3 rounded-lg ${colors[accentColor].bg} border ${colors[accentColor].border}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className={`font-display font-bold text-lg w-6 ${colors[accentColor].accent}`}>
              #{player.rank}
            </span>
            <span className="text-2xl">{player.avatar}</span>
            <div className="flex-1">
              <div className="font-semibold text-white">{player.name}</div>
              <div className="text-sm text-white/50">{player.chips} chips</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Tournament card component
function TournamentCard({
  title,
  prize,
  players,
  time,
  accentColor = "gold",
}: {
  title: string;
  prize: string;
  players: string;
  time: string;
  accentColor?: "gold" | "crimson" | "royal";
}) {
  const colors = {
    gold: { badge: "bg-gold-500", text: "text-gold-400" },
    crimson: { badge: "bg-crimson-500", text: "text-crimson-400" },
    royal: { badge: "bg-royal-500", text: "text-royal-400" },
  };

  return (
    <div className="feature-card group">
      <div className={`inline-block px-3 py-1 ${colors[accentColor].badge} text-dark-900 text-xs font-bold uppercase rounded-full mb-4`}>
        Live
      </div>
      <h4 className="font-display text-lg font-bold text-white mb-2">{title}</h4>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-white/50">Prize Pool</span>
          <span className={colors[accentColor].text}>{prize}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Players</span>
          <span className="text-white">{players}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Starts In</span>
          <span className="text-white">{time}</span>
        </div>
      </div>
      <button className="w-full mt-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 font-semibold uppercase text-sm hover:bg-white/10 hover:text-white transition-all">
        Join Now
      </button>
    </div>
  );
}

// Variation 1: Social proof focused with leaderboard prominent
function Variation1() {
  return (
    <>
      <ParticlesBackground preset="gold" density={50} />
      <AnimatedBackground variant="default" overlayOpacity={0.8} />
      <Navigation />

      <main className="pt-24">
        {/* Hero with social proof */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src="/images/logo-alokingz.png"
                    alt="AloKingz"
                    fill
                    className="object-contain animate-glow-pulse"
                  />
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-blue mb-6">
                  Join the AloKingz Table
                </h1>
                <p className="text-white/70 text-lg mb-8 max-w-lg">
                  Compete with the best players worldwide. Rise through the ranks, earn badges, and claim your spot on the leaderboard!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#play" className="btn-primary">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play to Web Browser
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Leaderboard accentColor="gold" />
              </motion.div>
            </div>
          </div>
        </section>

        <StatsStrip title="Join Our Growing Community" accentColor="gold" />

        {/* Tournaments section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Live <span className="text-gradient-blue">Tournaments</span>
              </h2>
              <p className="text-white/60">Jump into action and win big prizes</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TournamentCard
                title="High Roller Championship"
                prize="500M Chips"
                players="128/256"
                time="15 min"
                accentColor="gold"
              />
              <TournamentCard
                title="Weekend Warrior"
                prize="1B Chips"
                players="512/1000"
                time="2 hours"
                accentColor="gold"
              />
              <TournamentCard
                title="Rookie Rush"
                prize="100M Chips"
                players="64/128"
                time="30 min"
                accentColor="gold"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Variation 2: Feature-first with compact card layout
function Variation2() {
  const features = [
    { icon: "🎰", title: "Daily Spin", desc: "Free chips every day" },
    { icon: "🏆", title: "Tournaments", desc: "Compete for glory" },
    { icon: "👥", title: "Friends", desc: "Play with buddies" },
    { icon: "🎁", title: "Gifts", desc: "Send & receive" },
    { icon: "📈", title: "Progress", desc: "Level up fast" },
    { icon: "⭐", title: "VIP", desc: "Exclusive perks" },
  ];

  return (
    <>
      <ParticlesBackground preset="casino" density={40} />
      <AnimatedBackground variant="blur" overlayOpacity={0.85} />
      <Navigation />

      <main className="pt-24">
        {/* Compact hero */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              className="relative w-32 h-32 mx-auto mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Image
                src="/images/logo-alokingz.png"
                alt="AloKingz"
                fill
                className="object-contain"
              />
            </motion.div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything You Need to <span className="text-gradient-blue">Win</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Packed with features to enhance your gaming experience
            </p>
            <a href="#play" className="btn-primary">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play to Web Browser
            </a>
          </div>
        </section>

        {/* Compact feature grid */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 text-center hover:border-royal-500/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-3xl mb-2 block">{feature.icon}</span>
                  <h4 className="font-display text-sm font-bold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-white/50 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <StatsStrip
          title="Trusted by Millions"
          accentColor="gold"
          stats={[
            { value: "15M+", label: "Players" },
            { value: "2B+", label: "Games" },
            { value: "4.8★", label: "Rating" },
            { value: "150+", label: "Countries" },
          ]}
        />

        {/* Side-by-side leaderboard and tournaments */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              <Leaderboard accentColor="gold" />
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  🎮 Quick Play
                </h3>
                <TournamentCard
                  title="Speed Poker"
                  prize="50M Chips"
                  players="32/64"
                  time="5 min"
                />
                <TournamentCard
                  title="All-In Madness"
                  prize="200M Chips"
                  players="100/200"
                  time="10 min"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Variation 3: Large typography with royal theme
function Variation3() {
  return (
    <>
      <ParticlesBackground preset="royal" density={60} />
      <AnimatedBackground variant="dark" overlayOpacity={0.9} />
      <Navigation />

      <main className="pt-24">
        {/* Billboard hero */}
        <section className="min-h-[70vh] flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <motion.h1
                  className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="text-white">Play.</span>
                  <br />
                  <span className="text-gradient-royal">Compete.</span>
                  <br />
                  <span className="text-white">Dominate.</span>
                </motion.h1>
                <motion.p
                  className="text-white/60 text-xl mb-10 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Rise through the ranks and prove yourself as the ultimate champion.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="#play" className="btn-primary-blue text-xl">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play to Web Browser
                  </a>
                </motion.div>
              </div>
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <Image
                    src="/images/logo-alokingz.png"
                    alt="AloKingz"
                    fill
                    className="object-contain animate-float"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <StatsStrip title="Where Champions Are Made" accentColor="royal" />

        {/* Progression section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Your Path to <span className="text-gradient-royal">Glory</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <Leaderboard accentColor="royal" />
              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  📊 Season Progress
                </h3>
                <div className="space-y-6">
                  {[
                    { level: "Diamond", progress: 85, color: "bg-royal-500" },
                    { level: "Platinum", progress: 100, color: "bg-white/60" },
                    { level: "Gold", progress: 100, color: "bg-gold-500" },
                  ].map((tier, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white font-semibold">{tier.level}</span>
                        <span className="text-white/50">{tier.progress}%</span>
                      </div>
                      <div className="h-3 bg-dark-600 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${tier.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tier.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Landing2Content() {
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

export default function Landing2Page() {
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
      <Landing2Content />
    </Suspense>
  );
}

