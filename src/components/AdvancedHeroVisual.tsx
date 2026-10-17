import React from 'react';
import { motion } from 'framer-motion';

export const AdvancedHeroVisual: React.FC = () => {
  const services = [
    { label: 'Web Dev', color: '#5F3DFF', icon: '🌐' },
    { label: 'Design', color: '#C6B8F5', icon: '🎨' },
    { label: 'Branding', color: '#9E8BE8', icon: '✨' },
    { label: 'Marketing', color: '#5F3DFF', icon: '📈' },
    { label: 'Mobile', color: '#C6B8F5', icon: '📱' },
    { label: 'Solutions', color: '#9E8BE8', icon: '🚀' },
  ];

  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -30 - i * 5, 0],
      rotate: [0, 5 - i * 1.5, 0],
    }),
  };

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Background orbs */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 border border-brand-purple/20 rounded-full" />
        <div className="absolute inset-8 border border-brand-purple/15 rounded-full" />
        <div className="absolute inset-16 border border-brand-purple/10 rounded-full" />
      </motion.div>

      {/* Center glowing element */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative w-28 h-28">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-indigo rounded-2xl shadow-2xl"
            style={{
              boxShadow: '0 0 50px rgba(95, 61, 255, 0.5)',
            }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(95, 61, 255, 0.3)',
                '0 0 60px rgba(95, 61, 255, 0.6)',
                '0 0 30px rgba(95, 61, 255, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-black text-white">TQ</div>
              <div className="text-xs font-bold text-brand-lavender mt-1">
                TeamQora
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating service nodes */}
      {services.map((service, i) => {
        const angle = (i / services.length) * Math.PI * 2;
        const radius = 110;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={service.label}
            custom={i}
            variants={floatingVariants}
            animate="animate"
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-brand-purple/30 rounded-xl blur-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Service card */}
              <div
                className="relative w-16 h-16 rounded-xl shadow-lg flex flex-col items-center justify-center cursor-pointer backdrop-blur-md border border-brand-purple/40 bg-brand-dark/50"
                style={{
                  background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                  borderColor: service.color,
                }}
              >
                <div className="text-2xl mb-1">{service.icon}</div>
                <div className="text-xs font-bold text-white text-center px-1">
                  {service.label}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Animated connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5F3DFF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#C6B8F5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#5F3DFF" stopOpacity="0.1" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Center pulse circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="30"
          fill="none"
          stroke="#5F3DFF"
          strokeWidth="1"
          opacity="0.3"
          animate={{
            r: [30, 50, 30],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Connecting lines between nodes */}
        {services.map((_, i) => {
          const current = services[i];
          const next = services[(i + 1) % services.length];
          const angle1 = (i / services.length) * Math.PI * 2;
          const angle2 = (((i + 1) % services.length) / services.length) *
            Math.PI * 2;
          const radius = 110;

          const x1 = 200 + Math.cos(angle1) * radius;
          const y1 = 200 + Math.sin(angle1) * radius;
          const x2 = 200 + Math.cos(angle2) * radius;
          const y2 = 200 + Math.sin(angle2) * radius;

          return (
            <motion.line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          );
        })}

        {/* Orbiting dots */}
        <motion.g>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`orbit-${i}`}
              cx="200"
              cy="200"
              r="80"
              fill="none"
              stroke="none"
              animate={{
                rotate: [0 + i * 120, 360 + i * 120],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <motion.circle
                cx="280"
                cy="200"
                r="3"
                fill="#5F3DFF"
                opacity="0.4"
              />
            </motion.circle>
          ))}
        </motion.g>
      </svg>
    </div>
  );
};