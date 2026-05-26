"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function InteractiveBox() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      const targetY = Math.sin(t) * 0.8 + (state.pointer.x * 0.5);
      const targetX = Math.cos(t * 0.4) * 0.15 - (state.pointer.y * 0.5);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.05);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, 0.05);
    }
  });
  return (
    <Float floatIntensity={0.8} rotationIntensity={0.4}>
      <mesh ref={ref} castShadow>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <meshStandardMaterial color="#818cf8" metalness={0.55} roughness={0.25} />
      </mesh>
    </Float>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += 0.003;
      ref.current.rotation.x += 0.002;
      const targetY = state.pointer.x * 0.3;
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.05);
    }
  });
  return (
    <Float floatIntensity={0.7} rotationIntensity={0.2}>
      <mesh ref={ref}>
        <torusGeometry args={[1.9, 0.12, 16, 100]} />
        <meshStandardMaterial color="#7c3aed" emissive="#a78bfa" emissiveIntensity={0.6} metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} />
        <InteractiveBox />
        <FloatingRing />
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}
