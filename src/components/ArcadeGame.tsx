"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const REEL_SYMBOLS = [
  { icon: "🍒", color: "#ff00c8" },
  { icon: "💎", color: "#00fff7" },
  { icon: "🔔", color: "#ffe156" },
  { icon: "🍀", color: "#00ffb3" },
  { icon: "7️⃣", color: "#a259ff" },
  { icon: "⭐", color: "#00eaff" },
];

function getRandomSymbol() {
  return REEL_SYMBOLS[Math.floor(Math.random() * REEL_SYMBOLS.length)];
}

export default function ArcadeGame() {
  const [reels, setReels] = useState([
    getRandomSymbol(),
    getRandomSymbol(),
    getRandomSymbol(),
  ]);
  const [spinning, setSpinning] = useState(false);
  const [win, setWin] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setWin(false);
    setShowResult(false);
    let spins = 0;
    const spinInterval = setInterval(() => {
      setReels([
        getRandomSymbol(),
        getRandomSymbol(),
        getRandomSymbol(),
      ]);
      spins++;
      if (spins > 15) {
        clearInterval(spinInterval);
        // Final result
        const final = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
        setReels(final);
        setTimeout(() => {
          const isWin = final[0].icon === final[1].icon && final[1].icon === final[2].icon;
          setWin(isWin);
          setShowResult(true);
          setSpinning(false);
        }, 300);
      }
    }, 60);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full py-8"
      style={{ minHeight: 260 }}
    >
      <div className="flex items-center justify-center gap-6 mb-8">
        {reels.map((symbol, i) => (
          <motion.div
            key={i}
            className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl neon-border shadow-2xl bg-black"
            style={{
              fontSize: 56,
              color: symbol.color,
              textShadow: `0 0 24px ${symbol.color}, 0 0 8px #fff`,
              background: "linear-gradient(135deg, #181824 0%, #0a0a0f 100%)",
            }}
            animate={{ scale: spinning ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.2, repeat: spinning ? Infinity : 0 }}
          >
            {symbol.icon}
          </motion.div>
        ))}
      </div>
      <motion.button
        className="px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl neon-border mb-4"
        style={{
          background: 'linear-gradient(90deg, #00fff7 0%, #ff00c8 100%)',
          color: '#0a0a0f',
          textShadow: '0 0 8px #00fff7, 0 0 4px #ff00c8',
          boxShadow: '0 0 32px 4px #00fff7cc, 0 0 16px 2px #ff00c8cc',
          letterSpacing: 2,
        }}
        whileHover={{ scale: spinning ? 1 : 1.08 }}
        whileTap={{ scale: spinning ? 1 : 0.95 }}
        onClick={spin}
        disabled={spinning}
      >
        {spinning ? "SPINNING..." : "NEON SPIN"}
      </motion.button>
      {showResult && (
        <motion.div
          className="text-3xl font-black mt-2"
          style={{ color: win ? "#00fff7" : "#ff00c8", textShadow: win ? "0 0 16px #00fff7, 0 0 8px #ff00c8" : "0 0 16px #ff00c8, 0 0 8px #00fff7" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          {win ? "JACKPOT! 🎉" : "TRY AGAIN!"}
        </motion.div>
      )}
    </div>
  );
}
