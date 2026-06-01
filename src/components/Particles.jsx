import React, { useEffect, useState } from 'react';

const rand = (min, max) => Math.random() * (max - min) + min;

const Particles = ({ count = 12 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: count }).map(() => ({
      size: Math.round(rand(8, 220)),
      left: `${Math.round(rand(0, 100))}%`,
      top: `${Math.round(rand(0, 100))}%`,
      delay: rand(0, 6),
      duration: rand(8, 28),
      opacity: rand(0.06, 0.22),
      blur: Math.round(rand(8, 40)),
    }));
    setParticles(arr);
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
