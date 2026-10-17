import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -20 - i * 10, 0],
      rotate: [0, 5 - i * 2, 0],
    }),
  };

  const services = [
    { label: 'Web Dev', angle: 0 },
    { label: 'Design', angle: 60 },
    { label: 'Branding', angle: 120 },
    { label: 'Marketing', angle: 180 },
    { label: 'Mobile', angle: 240 },
    { label: 'Solutions', angle: 300 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Central circle with logo space */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Orbital rings */}
        <div className="absolute w-full h-full border border-brand-purple/20 rounded-full" />
        <div
          className="absolute w-3/4 h-3/4 border border-brand-purple/15 rounded-full"
          style={{ animation: 'rotate 20s linear reverse infinite' }}
        />
      </motion.div>

      {/* Center element */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-24 h-24 bg-gradient-to-br from-brand-purple to-brand-indigo rounded-2xl shadow-2xl shadow-brand-purple/50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">T</div>
            <div className="text-2xl font-bold text-brand-lavender">Q</div>
          </div>
        </div>
      </motion.div>

      {/* Floating service nodes */}
      {services.map((service, i) => {
        const rad = (service.angle * Math.PI) / 180;
        const radius = 100;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <motion.div
            key={service.label}
            custom={i}
            variants={floatingVariants}
            animate="animate"
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <motion.div
              className="w-12 h-12 bg-brand-purple/80 rounded-lg shadow-lg shadow-brand-purple/40 flex items-center justify-center text-white text-xs font-bold text-center p-2 backdrop-blur cursor-pointer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(95, 61, 255, 1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {service.label}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connecting lines between nodes (animated) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5F3DFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C6B8F5" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {services.map((_, i) => {
          const current = services[i];
          const next = services[(i + 1) % services.length];
          const rad1 = (current.angle * Math.PI) / 180;
          const rad2 = (next.angle * Math.PI) / 180;
          const radius = 100;
          const x1 = 200 + Math.cos(rad1) * radius;
          const y1 = 200 + Math.sin(rad1) * radius;
          const x2 = 200 + Math.cos(rad2) * radius;
          const y2 = 200 + Math.sin(rad2) * radius;

          return (
            <motion.line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};