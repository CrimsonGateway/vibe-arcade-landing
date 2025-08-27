"use client";

import { FC } from "react";
import { Theme, Flex, Box, Text, IconButton, Tooltip } from "@radix-ui/themes";
import { Wallet, Home, BarChart2 } from "lucide-react";

const Navbar: FC = () => {
  return (
    <Theme appearance="dark">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Flex align="center" gap="3">
            <Box className="rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-blue-400 p-1">
              <Box className="bg-black rounded-full p-2">
                <Text size="5" weight="bold" className="gradient-text">VB</Text>
              </Box>
            </Box>
            <Text size="4" weight="bold" className="hidden md:block tracking-widest gradient-text display">VIBE ARCADE</Text>
          </Flex>

          {/* Nav Links */}
          <Flex align="center" gap="5" className="hidden md:flex">
            <Tooltip content="Home" side="bottom"><IconButton variant="ghost"><Home size={22} /></IconButton></Tooltip>
            <Tooltip content="Stats" side="bottom"><IconButton variant="ghost"><BarChart2 size={22} /></IconButton></Tooltip>
            <Tooltip content="Docs" side="bottom"><a href="#" className="text-white/80 hover:text-pink-400 transition">Docs</a></Tooltip>
          </Flex>

          {/* Wallet Connect Motif */}
          <Flex align="center" gap="2">
            <div className="flex items-center gap-2">
              {/* Animated Solana logo */}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 shadow-lg animate-pulse-glow">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="#000"/><g filter="url(#solana-glow)"><path d="M12 25.5C12 25.2239 12.2239 25 12.5 25H29.5C29.7761 25 30 25.2239 30 25.5V27.5C30 27.7761 29.7761 28 29.5 28H12.5C12.2239 28 12 27.7761 12 27.5V25.5Z" fill="url(#paint0_linear)"/><path d="M12 19.5C12 19.2239 12.2239 19 12.5 19H29.5C29.7761 19 30 19.2239 30 19.5V21.5C30 21.7761 29.7761 22 29.5 22H12.5C12.2239 22 12 21.7761 12 21.5V19.5Z" fill="url(#paint1_linear)"/><path d="M12 13.5C12 13.2239 12.2239 13 12.5 13H29.5C29.7761 13 30 13.2239 30 13.5V15.5C30 15.7761 29.7761 16 29.5 16H12.5C12.2239 16 12 15.7761 12 15.5V13.5Z" fill="url(#paint2_linear)"/></g><defs><filter id="solana-glow" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="paint0_linear" x1="12" y1="26.5" x2="30" y2="26.5" gradientUnits="userSpaceOnUse"><stop stopColor="#00FFA3"/><stop offset="1" stopColor="#DC1FFF"/></linearGradient><linearGradient id="paint1_linear" x1="12" y1="20.5" x2="30" y2="20.5" gradientUnits="userSpaceOnUse"><stop stopColor="#00FFA3"/><stop offset="1" stopColor="#DC1FFF"/></linearGradient><linearGradient id="paint2_linear" x1="12" y1="14.5" x2="30" y2="14.5" gradientUnits="userSpaceOnUse"><stop stopColor="#00FFA3"/><stop offset="1" stopColor="#DC1FFF"/></linearGradient></defs></svg>
              </span>
              <Tooltip content="Connect Wallet" side="bottom">
                <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold shadow-lg hover:scale-105 transition-all border-2 border-white/20 animate-pulse-glow">
                  <Wallet size={20} />
                  <span className="hidden sm:inline">Connect</span>
                </button>
              </Tooltip>
            </div>
          </Flex>
        </div>
      </nav>
    </Theme>
  );
};

export default Navbar;
