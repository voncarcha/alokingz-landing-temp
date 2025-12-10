"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Navigation,
  Footer,
  StatsStrip,
  AnimatedBackground,
} from "@/app/components";
import LightRays from "@/components/LightRays";

const TargetCursor = dynamic(() => import("@/components/TargetCursor"), {
  ssr: false,
});

// Variation selector component
function VariationSelector({
  currentVariation,
}: {
  currentVariation: number;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2 bg-dark-800/90 backdrop-blur-xl rounded-full p-2 border border-white/10">
      {[1, 2].map((v) => (
        <a
          key={v}
          href={`/final?v=${v}`}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold transition-all ${
            currentVariation === v
              ? "bg-gradient-to-br from-gray-700 to-gray-900 text-white"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          {v}
        </a>
      ))}
    </div>
  );
}

// Leaderboard component - Dark theme
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

// Leaderboard component - Black & White theme
function LeaderboardBW() {
  const players = [
    { rank: 1, name: "KingAce777", chips: "2.5B", avatar: "👑" },
    { rank: 2, name: "RoyalFlush99", chips: "1.8B", avatar: "🎭" },
    { rank: 3, name: "PokerPro_X", chips: "1.2B", avatar: "🃏" },
    { rank: 4, name: "LuckyDraw", chips: "980M", avatar: "🍀" },
    { rank: 5, name: "ChipMaster", chips: "750M", avatar: "💰" },
  ];

  return (
    <div className="bg-[#111] border border-zinc-800 rounded-2xl p-6">
      <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">🏆</span> Top Players
      </h3>
      <div className="space-y-3">
        {players.map((player, index) => (
          <motion.div
            key={player.rank}
            className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="font-display font-bold text-lg w-6 text-gray-400">
              #{player.rank}
            </span>
            <span className="text-2xl">{player.avatar}</span>
            <div className="flex-1">
              <div className="font-semibold text-white">{player.name}</div>
              <div className="text-sm text-gray-500">{player.chips} chips</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Tournament card component - Dark theme
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
      <a 
        href="https://game.alokingz.club/" 
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-target w-full mt-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 font-semibold uppercase text-sm hover:bg-white/10 hover:text-white transition-all inline-block text-center"
      >
        Join Now
      </a>
    </div>
  );
}

// Tournament card component - Black & White theme
function TournamentCardBW({
  title,
  prize,
  players,
  time,
}: {
  title: string;
  prize: string;
  players: string;
  time: string;
}) {
  return (
    <div className="bg-[#111] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all">
      <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase rounded-full mb-4">
        Live
      </div>
      <h4 className="font-display text-lg font-bold text-white mb-2">{title}</h4>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Prize Pool</span>
          <span className="text-white font-semibold">{prize}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Players</span>
          <span className="text-white">{players}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Starts In</span>
          <span className="text-white">{time}</span>
        </div>
      </div>
      <a 
        href="https://game.alokingz.club/" 
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-target w-full mt-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-gray-300 font-semibold uppercase text-sm hover:bg-zinc-700 hover:text-white transition-all inline-block text-center"
      >
        Join Now
      </a>
    </div>
  );
}

// Stats Strip Black & White Component
function StatsStripBW({
  title,
  stats,
}: {
  title: string;
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="relative py-16 bg-[#111] border-y border-zinc-800">
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
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Navigation Black & White Component
function NavigationBW() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo-alokingz.png"
                alt="AloKingz Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
            <span className="font-display text-2xl font-bold text-white hidden sm:block">
              AloKingz
            </span>
          </a>

          {/* CTA Button */}
          <a
            href="https://game.alokingz.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target hidden md:flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-display text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Now
          </a>
        </div>
      </div>
    </nav>
  );
}

// Footer Black & White Component
function FooterBW() {
  return (
    <footer className="bg-[#111] border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo-alokingz.png"
                alt="AloKingz"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display text-xl font-bold text-white">
              AloKingz
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AloKingz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Variation 1: Dark theme (current design)
function Variation1() {
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
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <AnimatedBackground variant="blur" overlayOpacity={0.85} />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1}
          lightSpread={1.5}
          rayLength={2}
          pulsating={false}
          followMouse={true}
          mouseInfluence={0.1}
        />
      </div>
      <Navigation />

      <main className="pt-24">
        {/* Compact hero */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              className="relative w-64 h-64 mx-auto mb-6"
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
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="https://game.alokingz.club/" 
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target btn-primary"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play to Web Browser
              </a>
            </div>
            {/* App download buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="cursor-target flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
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
                className="cursor-target flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
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
            </div>
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

        {/* Live Tournaments section */}
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

// Variation 2: Black & White theme (dark background, white text)
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
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <AnimatedBackground variant="blur" overlayOpacity={0.85} />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1}
          lightSpread={1.5}
          rayLength={2}
          pulsating={false}
          followMouse={true}
          mouseInfluence={0.1}
        />
      </div>

      <NavigationBW />

      <main className="pt-24">
        {/* Hero section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              className="relative w-48 h-48 mx-auto mb-8"
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
            <motion.h1 
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Everything You Need to{" "}
              <span className="text-gray-500">Win</span>
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Packed with features to enhance your gaming experience
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a 
                href="https://game.alokingz.club/" 
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-display text-lg font-bold uppercase tracking-wider hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play to Web Browser
              </a>
            </motion.div>

            {/* App download buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#"
                className="cursor-target flex items-center gap-2 px-4 py-2 bg-[#111] rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all"
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 uppercase">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="cursor-target flex items-center gap-2 px-4 py-2 bg-[#111] rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all"
              >
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 uppercase">
                    Get it on
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Google Play
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#111] border border-zinc-800 rounded-2xl p-4 text-center hover:border-zinc-700 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-3xl mb-2 block">{feature.icon}</span>
                  <h4 className="font-display text-sm font-bold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <StatsStripBW
          title="Trusted by Millions"
          stats={[
            { value: "15M+", label: "Players" },
            { value: "2B+", label: "Games" },
            { value: "4.8★", label: "Rating" },
            { value: "150+", label: "Countries" },
          ]}
        />

        {/* Leaderboard and Quick Play */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              <LeaderboardBW />
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🎮</span> Quick Play
                </h3>
                <TournamentCardBW
                  title="Speed Poker"
                  prize="50M Chips"
                  players="32/64"
                  time="5 min"
                />
                <TournamentCardBW
                  title="All-In Madness"
                  prize="200M Chips"
                  players="100/200"
                  time="10 min"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Live Tournaments section */}
        <section className="py-20 bg-[#111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Live <span className="text-gray-500">Tournaments</span>
              </h2>
              <p className="text-gray-400">Jump into action and win big prizes</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TournamentCardBW
                title="High Roller Championship"
                prize="500M Chips"
                players="128/256"
                time="15 min"
              />
              <TournamentCardBW
                title="Weekend Warrior"
                prize="1B Chips"
                players="512/1000"
                time="2 hours"
              />
              <TournamentCardBW
                title="Rookie Rush"
                prize="100M Chips"
                players="64/128"
                time="30 min"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Main page content with variant switching
function FinalPageContent() {
  const searchParams = useSearchParams();
  const variation = parseInt(searchParams.get("v") || "1");
  const currentVariation = [1, 2].includes(variation) ? variation : 1;

  return (
    <>
      {currentVariation === 1 && <Variation1 />}
      {currentVariation === 2 && <Variation2 />}
      <VariationSelector currentVariation={currentVariation} />
    </>
  );
}

export default function FinalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-900" />}>
      <FinalPageContent />
    </Suspense>
  );
}
