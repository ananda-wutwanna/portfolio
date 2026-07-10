'use client';

import { useEffect, useState } from 'react';

// Types out a short "boot" line once on load — the single scripted motion of
// the hero. Respects reduced-motion by rendering the full string immediately.
export default function BootLine({ text }: { text: string }) {
  const [shown, setShown] = useState(text);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(text);
      return;
    }

    setShown('');
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 34);

    return () => window.clearInterval(id);
  }, [text]);

  return (
    <span className="font-mono text-[11px] uppercase tracking-label text-accent">
      <span className="text-subink">$ </span>
      {shown}
      <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-accent align-baseline animate-blink" />
    </span>
  );
}
