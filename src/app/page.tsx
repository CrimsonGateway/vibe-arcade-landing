'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid SSR issues with Three.js
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />
});

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
  loading: () => null
});

import ArcadeViewport from "../components/ArcadeViewport";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Main Content */}
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <HeroSection />
      </Suspense>
      {/* Arcade Viewport Section */}
      <ArcadeViewport />
    </div>
  );
}
