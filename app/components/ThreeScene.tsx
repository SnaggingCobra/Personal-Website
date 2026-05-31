"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles, MeshDistortMaterial, Torus } from "@react-three/drei";

/* ---------- Animated glowing core sphere ---------- */
function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    }
  });
  return (
    <Float floatIntensity={1.2} rotationIntensity={0.3} speed={1.5}>
      <mesh ref={ref} castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#818cf8"
          emissive="#4f46e5"
          emissiveIntensity={0.6}
          metalness={0.7}
          roughness={0.15}
          distort={0.35}
          speed={2.5}
        />
      </mesh>
    </Float>
  );
}

/* ---------- Orbiting torus ring ---------- */
function OrbitRing({ radius = 2.2, color = "#7c3aed", speed = 0.4, tilt = 0 }: {
  radius?: number; color?: string; speed?: number; tilt?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += speed * 0.008;
      ref.current.rotation.y = state.pointer.x * 0.3;
    }
  });
  return (
    <Float floatIntensity={0.4} rotationIntensity={0.1}>
      <mesh ref={ref} rotation={[tilt, 0, 0]}>
        <torusGeometry args={[radius, 0.07, 24, 120]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          metalness={0.4}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

/* ---------- Floating small crystals / icosahedra ---------- */
function FloatingCrystal({ position, scale = 0.25, color = "#a78bfa", speed = 1 }: {
  position: [number, number, number]; scale?: number; color?: string; speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
      ref.current.position.y = position[1] + Math.sin(t) * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={position} scale={scale} castShadow>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.1}
      />
    </mesh>
  );
}

/* ---------- Particle field ---------- */
function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 9;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#818cf8"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#818cf8" />
        <pointLight position={[-4, -4, -4]} intensity={0.8} color="#7c3aed" />
        <pointLight position={[4, 4, 0]} intensity={0.6} color="#06b6d4" />

        <ParticleField />
        <CoreSphere />
        <OrbitRing radius={2.2} color="#7c3aed" speed={0.5} tilt={0} />
        <OrbitRing radius={2.7} color="#06b6d4" speed={-0.3} tilt={Math.PI / 3} />
        <FloatingCrystal position={[2.8, 0.5, 0]} color="#a78bfa" scale={0.22} speed={0.9} />
        <FloatingCrystal position={[-2.5, -0.8, 0.5]} color="#22d3ee" scale={0.18} speed={1.3} />
        <FloatingCrystal position={[0.5, 2.2, -1]} color="#f472b6" scale={0.15} speed={1.1} />
        <FloatingCrystal position={[-1.5, 2.0, 0]} color="#818cf8" scale={0.2} speed={0.8} />

        <Sparkles count={60} scale={6} size={1.5} speed={0.4} color="#a78bfa" opacity={0.6} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.4}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
