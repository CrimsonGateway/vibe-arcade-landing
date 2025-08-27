'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function VBLogo() {
  const unicornRef = useRef<SVGElement>(null);

  useEffect(() => {
    // Add subtle floating animation
    const element = unicornRef.current;
    if (!element) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      const y = Math.sin(time) * 5;
      element.style.transform = `translateY(${y}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.5
      }}
      className="relative"
    >
      <svg
        ref={unicornRef}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="bunnySkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff1f1" />
            <stop offset="100%" stopColor="#ffe0f7" />
          </linearGradient>
          <linearGradient id="bunnyHair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#ff1493" />
          </linearGradient>
          <linearGradient id="bunnySuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#48cae4" />
            <stop offset="100%" stopColor="#9c27b0" />
          </linearGradient>
          <radialGradient id="bunnyGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff1493" stopOpacity="0" />
          </radialGradient>
          <filter id="bunny-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Background Glow */}
        <circle cx="100" cy="100" r="80" fill="url(#bunnyGlow)" opacity="0.7" />
        {/* Bunny Ears */}
        <ellipse cx="75" cy="45" rx="16" ry="44" fill="url(#bunnyHair)" transform="rotate(-18 75 45)" filter="url(#bunny-glow)" />
        <ellipse cx="125" cy="45" rx="16" ry="44" fill="url(#bunnyHair)" transform="rotate(18 125 45)" filter="url(#bunny-glow)" />
        {/* Bunny Head */}
        <ellipse cx="100" cy="90" rx="38" ry="36" fill="url(#bunnySkin)" filter="url(#bunny-glow)" />
        {/* Bunny Face (simple, stylized) */}
        <ellipse cx="100" cy="110" rx="28" ry="22" fill="url(#bunnySkin)" />
        {/* Eyes */}
        <ellipse cx="88" cy="105" rx="5" ry="8" fill="#222" />
        <ellipse cx="112" cy="105" rx="5" ry="8" fill="#222" />
        <ellipse cx="90" cy="107" rx="2" ry="3" fill="#fff" opacity="0.7" />
        <ellipse cx="114" cy="107" rx="2" ry="3" fill="#fff" opacity="0.7" />
        {/* Nose */}
        <ellipse cx="100" cy="115" rx="3" ry="2" fill="#ff6b6b" />
        {/* Mouth (playful smile) */}
        <path d="M96 120 Q100 124 104 120" stroke="#ff1493" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Hair fringe */}
        <path d="M85 85 Q100 70 115 85" stroke="url(#bunnyHair)" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* Bunny Body (bust, suit) */}
        <ellipse cx="100" cy="155" rx="28" ry="22" fill="url(#bunnySuit)" filter="url(#bunny-glow)" />
        {/* Suit details */}
        <ellipse cx="100" cy="170" rx="8" ry="4" fill="#fff" opacity="0.7" />
        <ellipse cx="100" cy="165" rx="4" ry="2" fill="#fff" opacity="0.9" />
        {/* Cheek blush */}
        <ellipse cx="85" cy="115" rx="4" ry="2" fill="#ffb6c1" opacity="0.7" />
        <ellipse cx="115" cy="115" rx="4" ry="2" fill="#ffb6c1" opacity="0.7" />
        {/* Whiskers */}
        <path d="M80 120 Q70 122 80 124" stroke="#ff6b6b" strokeWidth="1.5" fill="none" />
        <path d="M120 120 Q130 122 120 124" stroke="#ff6b6b" strokeWidth="1.5" fill="none" />
      </svg>
      {/* Floating particles around logo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              filter: 'drop-shadow(0 0 8px #ff1493cc)'
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
              background: [
                'linear-gradient(90deg, #ff6b6b, #ff1493)',
                'linear-gradient(90deg, #48cae4, #feca57)',
                'linear-gradient(90deg, #ff6b6b, #ff1493)'
              ]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
