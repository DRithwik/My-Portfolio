import React, { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function MouseTracker() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute w-[150px] h-[150px] transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: 'rgba(0, 100, 255, 0.1)',
          border: '1px solid rgba(0, 150, 255, 0.2)',
          boxShadow: '0 0 20px rgba(0, 150, 255, 0.15)',
        }}
      />
    </div>
  );
}