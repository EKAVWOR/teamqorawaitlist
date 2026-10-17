import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick: () => void;
  onDiscoverClick: () => void;
}

export default function HeroSection({
  onJoinClick,
  onDiscoverClick,
}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Purple atmospheric glow */}
        <div
          className="absolute top-[15%] left-1/2 -translate-x-1/2
          w-[900px] h-[600px]
          bg-purple-700/10
          blur-[150px] rounded-full"
        />

        {/* Main glowing arc */}
        <div
          className="absolute
          top-[25%]
          left-1/2
          -translate-x-1/2
          w-[1100px]
          h-[1100px]
          rounded-full
          border-[65px]
          border-purple-600
          blur-[35px]
          opacity-80"
        />

        {/* Inner bright arc */}
        <div
          className="absolute
          top-[25%]
          left-1/2
          -translate-x-1/2
          w-[1100px]
          h-[1100px]
          rounded-full
          border-[35px]
          border-purple-400
          blur-[18px]
          opacity-70"
        />

        {/* White outer glow */}
        <div
          className="absolute
          top-[25%]
          left-1/2
          -translate-x-1/2
          w-[1100px]
          h-[1100px]
          rounded-full
          border-[12px]
          border-white
          blur-[18px]
          opacity-80"
        />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />

      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2
          px-4 py-2 mb-8
          rounded-full
          border border-purple-500/30
          bg-purple-500/10
          backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

          <span className="text-sm text-purple-200 font-medium">
            Your Digital Growth Partner
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-bold tracking-tight leading-[1.1] text-white"
        >
          Your Digital Solutions.
          <span
            className="block mt-2
            bg-gradient-to-r
            from-white
            via-purple-300
            to-purple-600
            bg-clip-text text-transparent"
          >
            Simplified.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-base sm:text-lg md:text-xl
          text-gray-300
          max-w-2xl mx-auto
          leading-relaxed"
        >
          Premium digital services that transform your business.
          From web development to social media management,
          we deliver everything you need to succeed online.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row
          items-center justify-center gap-4 mt-10"
        >

          <button
            onClick={onJoinClick}
            className="group relative
            w-full sm:w-auto
            px-8 py-4
            rounded-lg
            bg-gradient-to-r from-purple-600 to-violet-700
            text-white font-semibold
            shadow-lg shadow-purple-700/30
            hover:shadow-purple-600/50
            hover:-translate-y-1
            transition-all duration-300"
          >
            Join the Waitlist

            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>

          <button
            onClick={onDiscoverClick}
            className="w-full sm:w-auto
            px-8 py-4
            rounded-lg
            border border-white/25
            bg-white/5
            backdrop-blur-md
            text-white font-semibold
            hover:bg-white/10
            hover:border-purple-400/60
            transition-all duration-300"
          >
            Discover Services
          </button>

        </motion.div>

      </div>

      {/* Trust Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10
        w-full max-w-4xl
        mt-24
        rounded-2xl
        border border-white/15
        bg-white/[0.05]
        backdrop-blur-xl
        shadow-2xl
        shadow-purple-900/20"
      >

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">

          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '40+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-8 py-7 text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 mt-14 text-gray-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>

    </section>
  );
}