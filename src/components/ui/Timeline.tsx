import React from 'react';
import Reveal from './Reveal';

/** Vertical rail that TimelineItems hang off. */
export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="absolute left-6 md:left-8 top-6 bottom-6 w-px bg-gradient-to-b from-blue-400/70 via-gray-600/50 to-transparent"
      />
      {children}
    </ol>
  );
}

export function PulseDot({ title = 'Current' }: { title?: string }) {
  return (
    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5" title={title}>
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-gray-900" />
    </span>
  );
}

/** One entry: a tile on the rail and a glowing card beside it. */
export function TimelineItem({
  accent,
  tile,
  current = false,
  children,
}: {
  accent: string;
  tile: React.ReactNode;
  current?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className="glow-group relative mb-8 last:mb-0" style={{ '--accent': accent } as React.CSSProperties}>
      <Reveal className="flex gap-3 md:gap-6">
        <div className="relative shrink-0 z-10">
          {tile}
          {current && <PulseDot title="Current" />}
        </div>
        <div className="glow-card flex-1 min-w-0 p-4 md:p-6">{children}</div>
      </Reveal>
    </li>
  );
}
