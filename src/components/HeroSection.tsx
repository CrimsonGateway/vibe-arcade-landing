'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import VBLogo from './VBLogo';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [participants, setParticipants] = useState(12747);
  const [prizePool, setPrizePool] = useState(2150000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });

      // Simulate live updates
      setParticipants(prev => prev + Math.floor(Math.random() * 3));
      setPrizePool(prev => prev + Math.floor(Math.random() * 500));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-white"
    >
      {/* Main Logo Section */}
      <motion.div
        variants={itemVariants}
        className="mb-8"
      >
        <VBLogo />
      </motion.div>

      {/* Main Title */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-6"
      >
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 display"
          style={{
            background: 'linear-gradient(135deg, #ff6b6b, #feca57, #48cae4, #ff1493)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 30px rgba(255, 107, 107, 0.5))'
          }}
        >
          VIBE
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 display"
          style={{
            background: 'linear-gradient(135deg, #dda0dd, #98d8c8, #f7dc6f)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          ARCADE
        </motion.h2>
        <motion.div
          className="flex justify-center mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-xs font-bold text-white shadow-lg animate-pulse border border-white/20">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#00ff9a" opacity="0.5"/><circle cx="12" cy="12" r="5" fill="#00ff9a"/></svg>
            Live on Solana
          </span>
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
        >
          The most electrifying arcade on Solana
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl w-full"
      >
        <motion.div
          className="glassmorphic p-8 border border-red-500/30 text-center"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 107, 0.3)' }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="text-4xl font-black mb-2 text-transparent bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text display"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            {participants.toLocaleString()}
          </motion.div>
          <div className="text-gray-400 font-semibold">Players Joined</div>
        </motion.div>

        <motion.div
          className="glassmorphic p-8 border border-yellow-500/30 text-center"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(254, 202, 87, 0.3)' }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="text-4xl font-black mb-2 text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text display"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          >
            ${(prizePool / 1000000).toFixed(1)}M
          </motion.div>
          <div className="text-gray-400 font-semibold">Prize Pool</div>
        </motion.div>

        <motion.div
          className="glassmorphic p-8 border border-blue-500/30 text-center"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(72, 202, 228, 0.3)' }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="text-4xl font-black mb-2 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text display"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          >
            {timeLeft.days}:{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </motion.div>
          <div className="text-gray-400 font-semibold">Time Left</div>
        </motion.div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-6"
      >
        <motion.button
          className="px-12 py-6 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl font-black text-white text-xl shadow-2xl relative overflow-hidden animate-pulse-glow"
          whileHover={{
            scale: 1.08,
            boxShadow: '0 0 60px 10px #ff6b6b, 0 0 40px 10px #ff1493',
            filter: 'brightness(1.1)'
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, #ff6b6b, #ff1493, #9c27b0)',
            filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.3))'
          }}
        >
          🚀 ENTER THE VIBE
        </motion.button>

        <motion.button
          className="px-12 py-6 glassmorphic border-2 border-white/30 rounded-2xl font-bold text-white text-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-xl"
          whileHover={{
            scale: 1.05,
            borderColor: 'rgba(255, 255, 255, 0.5)',
            filter: 'brightness(1.1)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          📊 VIEW STATS
        </motion.button>
      </motion.div>

      {/* FOMO Elements */}
      <motion.div
        variants={itemVariants}
        className="mt-16 text-center"
      >
        <motion.div
          className="inline-flex items-center space-x-2 px-6 py-3 glassmorphic border-2 border-red-500/50 rounded-2xl backdrop-blur-xl shadow-lg animate-pulse-glow font-bold text-white text-lg relative overflow-hidden"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-3 h-3 bg-red-400 rounded-full animate-pulse"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-red-300 font-bold display">🔥 247 PLAYERS JOINED IN LAST HOUR</span>
          <span className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-pink-500/30 animate-gradient" style={{borderImage: 'linear-gradient(90deg, #ff6b6b, #ff1493, #9c27b0) 1'}}></span>
        </motion.div>
      </motion.div>

      {/* Subtle disclaimer */}
      <motion.p
        variants={itemVariants}
        className="mt-8 max-w-md mx-auto text-center glassmorphic text-gray-300 text-sm px-6 py-3 rounded-xl border border-pink-400/20 shadow-sm display"
        style={{
          borderImage: 'linear-gradient(90deg, #ff6b6b, #ff1493, #9c27b0) 1',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
          fontWeight: 500
        }}
      >
        *Prize pool increases with every player. Tournament starts when countdown reaches zero.
      </motion.p>
    </motion.div>
  );
}
