"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Navigation,
  Footer,
  StatsStrip,
  AnimatedBackground,
  ParticlesBackground,
} from "@/app/components";

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
      <a 
        href="https://game.alokingz.club/" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 font-semibold uppercase text-sm hover:bg-white/10 hover:text-white transition-all inline-block text-center"
      >
        Join Now
      </a>
    </div>
  );
}

export default function FinalPage() {
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
            <a 
              href="https://game.alokingz.club/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
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
