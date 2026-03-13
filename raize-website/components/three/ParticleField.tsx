'use client'

import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  
  // Try to access useThree safely in case rendering context is invalid
  const { size } = useThree();

  // Generate particle positions and colours once on mount
  const { positions, colors } = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // rAIze brand colours in RGB (0-1 range)
    const palette = [
      [0.145, 0.388, 0.922],  // #2563EB — Primary Blue
      [0.545, 0.361, 0.965],  // #8B5CF6 — Accent Violet
      [0.063, 0.725, 0.506],  // #10B981 — Accent Green
      [0.957, 0.247, 0.369],  // #F43F5E — Accent Coral
      [0.980, 0.800, 0.082],  // #FACC15 — Accent Yellow
    ];

    for (let i = 0; i < count; i++) {
      // Spread particles across a wide 3D space
      positions[i * 3]     = (Math.random() - 0.5) * 20;  // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;  // z (shallower depth)

      // Assign a random brand colour to each particle
      const colour = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = colour[0];
      colors[i * 3 + 1] = colour[1];
      colors[i * 3 + 2] = colour[2];
    }

    return { positions, colors };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  // Animate: slow drift + cursor reaction
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    // Slow base rotation — feels like particles floating in space
    meshRef.current.rotation.y = time * 0.03;
    meshRef.current.rotation.x = time * 0.01;

    // Cursor reaction — particles lean gently toward the cursor
    const targetX = state.mouse.x * 0.4;
    const targetY = state.mouse.y * 0.3;

    meshRef.current.rotation.y +=
      (targetX - meshRef.current.rotation.y) * 0.02;
    meshRef.current.rotation.x +=
      (targetY - meshRef.current.rotation.x) * 0.02;
  });

  // Dispose geometry on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        vertexColors={true}
        transparent={true}
        opacity={0.7}
        sizeAttenuation={true}
      />
    </points>
  );
}
