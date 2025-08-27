"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";

const GAMES = [
  { title: "Neon Spin", desc: "Fast-paced slots", icon: "🎰", color: "#00fff7" },
  { title: "Bunny Hop", desc: "Jump & dodge", icon: "🐰", color: "#ff00c8" },
  { title: "Solana Rush", desc: "Arcade runner", icon: "⚡", color: "#a259ff" },
  { title: "Pixel Blaster", desc: "Retro shooter", icon: "🕹️", color: "#ffe156" },
  { title: "Vibe Clicker", desc: "Idle fun", icon: "🖱️", color: "#00ffb3" },
  { title: "Coming Soon", desc: "More games...", icon: "✨", color: "#00eaff" },
];

const YT_PLAYLIST_URL = "https://www.youtube.com/embed/videoseries?list=PLRBp0Fe2Gpglk5y4GSUZ5GkBz2RFzRMcf&autoplay=1&loop=1&controls=0&mute=0";

export default function ArcadeViewport() {
  const [selected, setSelected] = useState(0);
  const [musicOn, setMusicOn] = useState(true);
  return (
    <section className="flex flex-col items-center justify-center py-24 px-4 w-full">
      <div className="mb-12 text-center">
        <span className="text-4xl md:text-5xl font-black display mb-2 drop-shadow-lg" style={{
          background: 'linear-gradient(90deg, #00fff7, #ff00c8, #a259ff, #00eaff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 24px #00fff7cc)'
        }}>VIBE</span>
        <div className="text-lg text-gray-300 mt-2">Select a game to play. More coming soon!</div>
      </div>
      <motion.div
        className="relative w-full max-w-6xl glassmorphic neon-border rounded-3xl shadow-2xl animate-gradient p-0 flex min-h-[600px]"
        style={{
          background: 'linear-gradient(120deg, rgba(10,10,15,0.98) 0%, rgba(0,255,247,0.04) 100%)',
        }}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Sidebar/dock */}
        <div className="flex flex-col items-center py-8 px-3 bg-black/40 border-r border-white/10 rounded-l-3xl min-w-[80px] gap-4">
          {GAMES.map((game, i) => (
            <button
              key={i}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl mb-2 transition-all ${selected === i ? 'bg-[rgba(0,255,247,0.12)] neon-border scale-110' : 'bg-black/30 border border-white/10 hover:scale-105'}`}
              style={{ boxShadow: selected === i ? `0 0 24px 4px ${game.color}` : undefined }}
              onClick={() => setSelected(i)}
              disabled={game.title === 'Coming Soon'}
            >
              <span className="text-3xl" style={{ textShadow: `0 0 12px ${game.color}` }}>{game.icon}</span>
            </button>
          ))}
        </div>
        {/* Main OS window */}
        <div className="flex-1 flex flex-col">
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 px-6 py-3 border-b border-white/10 bg-black/40 rounded-tr-3xl relative">
            <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-md" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-md" />
            <span className="w-3 h-3 rounded-full bg-green-400/80 shadow-md" />
            <span className="ml-4 text-lg font-bold tracking-widest text-white/80 display">{GAMES[selected].title.toUpperCase()}</span>
            {/* Music player */}
            <div className="ml-auto flex items-center gap-2">
              {!musicOn ? (
                <button
                  className="w-36 h-9 flex items-center justify-center rounded-full neon-border bg-black/60 hover:bg-black/80 transition-all animate-pulse-glow text-neon-cyan font-bold gap-2"
                  onClick={() => setMusicOn(true)}
                  title="Play Arcade Music"
                >
                  <Music size={20} className="text-neon-cyan" />
                  <span>Play Music</span>
                </button>
              ) : (
                <>
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded-full neon-border bg-black/60 hover:bg-black/80 transition-all"
                    onClick={() => setMusicOn(false)}
                    title="Pause Music"
                  >
                    <Pause size={20} className="text-neon-cyan" />
                  </button>
                  <div className="w-48 h-10 overflow-hidden rounded-lg border border-white/10 shadow-lg bg-black/80 flex items-center">
                    <iframe
                      width="100%"
                      height="40"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/harrisheller/sets/arcade&color=%2300fff7&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
                      title="Arcade Music"
                      style={{ border: 'none', background: 'transparent' }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Active game card */}
          <div className="flex-1 flex items-center justify-center relative">
            <motion.div
              key={selected}
              className="absolute left-0 right-0 mx-auto top-10 w-full max-w-lg z-10"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="flex flex-col items-center justify-between p-10 glassmorphic neon-border rounded-3xl shadow-2xl" style={{ minHeight: 320, background: 'linear-gradient(120deg, rgba(10,10,15,0.98) 0%, rgba(0,255,247,0.04) 100%)' }}>
                <span className="text-7xl mb-4" style={{ textShadow: `0 0 32px ${GAMES[selected].color}` }}>{GAMES[selected].icon}</span>
                <span className="text-3xl font-black display mb-2" style={{ color: GAMES[selected].color }}>{GAMES[selected].title}</span>
                <span className="text-lg text-gray-400 mb-6">{GAMES[selected].desc}</span>
                <motion.button
                  className="px-10 py-5 rounded-xl font-bold neon-border text-xl mt-4"
                  style={{ background: `linear-gradient(90deg, ${GAMES[selected].color} 0%, #ff00c8 100%)`, color: '#0a0a0f', textShadow: `0 0 8px ${GAMES[selected].color}, 0 0 4px #ff00c8` }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={GAMES[selected].title === 'Coming Soon'}
                >
                  {GAMES[selected].title === 'Coming Soon' ? 'Soon' : 'Play'}
                </motion.button>
              </div>
            </motion.div>
            {/* Dimmed background grid */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 opacity-20 blur-sm">
                {GAMES.map((game, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-between p-8 glassmorphic neon-border rounded-3xl shadow-2xl"
                    style={{ minHeight: 260, background: 'linear-gradient(120deg, rgba(10,10,15,0.98) 0%, rgba(0,255,247,0.04) 100%)' }}
                  >
                    <span className="text-6xl mb-4" style={{ textShadow: `0 0 24px ${game.color}` }}>{game.icon}</span>
                    <span className="text-2xl font-black display mb-2" style={{ color: game.color }}>{game.title}</span>
                    <span className="text-md text-gray-400">{game.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
