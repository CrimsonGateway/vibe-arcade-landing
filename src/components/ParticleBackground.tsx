'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const particlesCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b6b"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingSpheres() {
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
      sphere1Ref.current.rotation.x += 0.005;
      sphere1Ref.current.rotation.y += 0.01;
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.3;
      sphere2Ref.current.rotation.x += 0.008;
      sphere2Ref.current.rotation.z += 0.006;
    }
  });

  return (
    <>
      <Sphere ref={sphere1Ref} args={[0.5, 32, 32]} position={[-3, 0, -2]}>
        <meshStandardMaterial
          color="#feca57"
          transparent
          opacity={0.3}
          emissive="#feca57"
          emissiveIntensity={0.2}
        />
      </Sphere>
      <Sphere ref={sphere2Ref} args={[0.3, 32, 32]} position={[4, 1, -3]}>
        <meshStandardMaterial
          color="#48cae4"
          transparent
          opacity={0.4}
          emissive="#48cae4"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#48cae4" />

      <Particles />
      <FloatingSpheres />

      {/* Animated gradient background */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%)' }}
      >
        <Scene />
      </Canvas>
      {/* Animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 animate-gradient" style={{
        background: 'linear-gradient(120deg, rgba(255,107,107,0.08) 0%, rgba(254,202,87,0.06) 40%, rgba(72,202,228,0.08) 100%)',
        mixBlendMode: 'screen',
        zIndex: 1
      }} />
    </div>
  );
}
