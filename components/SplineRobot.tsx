'use client';

import { Component, Suspense, lazy, useEffect, useState, type ReactNode } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

// If the WebGL scene fails (network, GPU, or a removed scene URL), fall back to
// an ambient placeholder so the hero never looks broken.
class SplineBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative h-56 w-56">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent/10" />
        <span className="absolute inset-6 rounded-full border border-accent/30" />
        <span className="absolute inset-16 rounded-full bg-accent/10 blur-xl" />
        <span className="absolute inset-0 grid place-items-center font-mono text-[10px] uppercase tracking-label text-subink">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function SplineRobot({
  scene,
  loadingLabel,
}: {
  scene: string;
  loadingLabel: string;
}) {
  // Only mount the (heavy) WebGL runtime on the client, and skip it entirely
  // for users who prefer reduced motion.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) setEnabled(true);
  }, []);

  const fallback = <Placeholder label={loadingLabel} />;

  if (!enabled) return fallback;

  return (
    <SplineBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <Spline scene={scene} />
      </Suspense>
    </SplineBoundary>
  );
}
