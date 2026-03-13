'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';

function CSSParticleFallback() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.10) 0%, transparent 55%),
          radial-gradient(ellipse at 60% 80%, rgba(16,185,129,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 40% 30%, rgba(244,63,94,0.06) 0%, transparent 45%)
        `,
        pointerEvents: 'none',
      }}
    />
  );
}

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export interface ThreeCanvasProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ThreeCanvas({ children, className, style }: ThreeCanvasProps) {
  return (
    <WebGLErrorBoundary fallback={<CSSParticleFallback />}>
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 75 }}
        className={className}
        style={style}
      >
        {children}
      </Canvas>
    </WebGLErrorBoundary>
  );
}
