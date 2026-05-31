"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

/* ---- DNA Helix Structure ---- */
function HelixParticles() {
  const count = 80;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 6;
      arr[i * 3] = Math.cos(t) * 1.5;
      arr[i * 3 + 1] = (i / count) * 6 - 3;
      arr[i * 3 + 2] = Math.sin(t) * 1.5;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.3;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#818cf8" transparent opacity={0.9} sizeAttenuation />
    </points>
  );
}

/* ---- Pulsing sphere cluster ---- */
function PulseSphere({ position, color, phase = 0 }: { position: [number, number, number]; color: string; phase?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    const t = s.clock.getElapsedTime() + phase;
    if (ref.current) {
      const scale = 1 + Math.sin(t * 1.5) * 0.15;
      ref.current.scale.setScalar(scale);
      ref.current.rotation.y += 0.008;
    }
  });
  return (
    <Float floatIntensity={0.8} speed={1.2}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.1}
          distort={0.4}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

/* ---- Geometric wireframe torus ---- */
function WireframeTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = s.clock.getElapsedTime() * 0.15;
    }
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 16]} />
      <meshStandardMaterial
        color="#7c3aed"
        emissive="#4f46e5"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.05}
        wireframe={false}
      />
    </mesh>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#818cf8" />
      <pointLight position={[-4, -4, 2]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[0, 0, -5]} intensity={1} color="#f472b6" />

      <Float floatIntensity={0.6} speed={1}>
        <WireframeTorus />
      </Float>

      <PulseSphere position={[3.5, 0.5, -1]} color="#818cf8" phase={0} />
      <PulseSphere position={[-3.5, -0.5, -1]} color="#06b6d4" phase={2} />
      <PulseSphere position={[0, 2.5, -2]} color="#f472b6" phase={4} />

      <HelixParticles />

      <Sparkles count={80} scale={8} size={2} speed={0.3} color="#a78bfa" opacity={0.5} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3.5}
      />
    </>
  );
}

export default function ThreeDSection() {
  return (
    <section className="py-0 relative overflow-hidden">
      {/* Gradient separator */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        {/* Text content */}
        <div className="text-center mb-0 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-indigo-300 text-sm font-medium tracking-wider uppercase">Interactive 3D</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            Where Art Meets Code
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Crafting immersive digital experiences that blend creativity with cutting-edge technology.
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden mt-10 mb-16 border border-white/5 shadow-2xl glass-panel">
          {/* Gradient overlay at edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60 pointer-events-none z-10" />

          <Canvas camera={{ position: [0, 0, 7], fov: 50 }} gl={{ antialias: true, alpha: true }}>
            <Scene3D />
          </Canvas>

          {/* Floating stats overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-20">
            {[
              { label: "Certificates", value: "9+" },
              { label: "Projects", value: "5+" },
              { label: "Technologies", value: "15+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-3 rounded-2xl glass-panel border border-white/10 text-center min-w-[90px]"
              >
                <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Drag hint */}
          <div className="absolute top-5 right-5 z-20 text-slate-500 text-xs flex items-center gap-2">
            <div className="w-4 h-4 border border-slate-600 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
            </div>
            Drag to explore
          </div>
        </div>
      </motion.div>
    </section>
  );
}
