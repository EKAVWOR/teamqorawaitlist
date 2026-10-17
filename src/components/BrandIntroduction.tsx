
import { motion } from 'framer-motion';

import {
  Users,
  Layers,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Code2,
  Palette,
  Globe,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export default function BrandIntroduction() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description:
        'Our experienced professionals bring deep industry knowledge, creativity, and technical expertise to every project.',
    },
    {
      icon: Layers,
      title: 'Custom Solutions',
      description:
        'Every business is unique. We build tailored digital solutions designed around your goals and challenges.',
    },
    {
      icon: TrendingUp,
      title: 'Results That Matter',
      description:
        'We focus on creating meaningful digital experiences that help your business grow and succeed.',
    },
  ];

  return (
    <section
      id="about"
      className="relative
      bg-[#050505]
      py-24 sm:py-32
      px-4 sm:px-6 lg:px-8
      overflow-hidden"
    >

      {/* Background Glow */}
      <div
        className="absolute top-1/2 right-0
        w-[600px] h-[600px]
        bg-purple-700/10
        rounded-full
        blur-[160px]
        pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="text-purple-500
            text-sm font-semibold
            uppercase tracking-[0.2em]"
          >
            Why TeamQora
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl
            font-bold text-white
            mt-4 tracking-tight"
          >
            Built on Trust.
            <span className="text-purple-500">
              {' '}Driven by Innovation.
            </span>
          </h2>

          <p
            className="text-gray-400
            text-base sm:text-lg
            max-w-2xl mx-auto
            mt-6 leading-relaxed"
          >
            We combine expertise, creativity, and technology
            to transform ambitious ideas into exceptional
            digital experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Feature Cards */}
          <div className="space-y-5">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{ x: 6 }}
                  className="group relative
                  flex items-start gap-5
                  p-6 sm:p-7
                  rounded-2xl
                  border border-white/10
                  bg-[#111111]
                  hover:border-purple-500/40
                  hover:bg-[#151020]
                  transition-all duration-300"
                >

                  {/* Icon */}
                  <div
                    className="flex-shrink-0
                    w-14 h-14
                    rounded-xl
                    bg-purple-600/10
                    border border-purple-500/20
                    flex items-center justify-center
                    group-hover:bg-purple-600
                    transition-all duration-300"
                  >
                    <Icon
                      size={24}
                      className="text-purple-400 group-hover:text-white transition-colors"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>

                      <ArrowUpRight
                        size={18}
                        className="text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity"
                      />

                    </div>

                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* RIGHT: Futuristic Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Outer Glow */}
            <div
              className="absolute inset-0
              bg-purple-600/20
              blur-[100px]
              rounded-full
              pointer-events-none"
            />

            {/* Main Dashboard */}
            <div
              className="relative
              rounded-[24px]
              border border-purple-500/20
              bg-gradient-to-br
              from-[#171020]
              via-[#100d17]
              to-[#0b0b0d]
              p-6 sm:p-8
              shadow-[0_0_80px_rgba(109,40,217,0.12)]
              overflow-hidden"
            >

              {/* Top Decorative Gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-px
                bg-gradient-to-r
                from-transparent
                via-purple-400/70
                to-transparent"
              />

              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-10">

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                    TeamQora Ecosystem
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    Digital Excellence
                  </h3>
                </div>

                <div
                  className="w-11 h-11
                  rounded-xl
                  bg-purple-600/20
                  border border-purple-500/20
                  flex items-center justify-center"
                >
                  <Sparkles size={20} className="text-purple-400" />
                </div>

              </div>

              {/* Center Illustration */}
              <div className="relative flex items-center justify-center py-14">

                {/* Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute
                  w-64 h-64
                  rounded-full
                  border border-purple-500/20"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute
                  w-48 h-48
                  rounded-full
                  border border-purple-400/30
                  border-dashed"
                />

                {/* Central Brand */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10
                  w-28 h-28
                  rounded-3xl
                  bg-gradient-to-br
                  from-purple-500
                  to-violet-800
                  flex flex-col
                  items-center justify-center
                  shadow-[0_0_60px_rgba(139,92,246,0.45)]
                  border border-purple-300/30"
                >
                  <span className="text-4xl font-black text-white">
                    TQ
                  </span>

                  <span className="text-[10px] text-purple-100 tracking-widest mt-1">
                    TEAMQORA
                  </span>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-0 left-8
                  w-12 h-12 rounded-xl
                  bg-[#211331]
                  border border-purple-500/30
                  flex items-center justify-center"
                >
                  <Code2 size={23} className="text-purple-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-4 right-8
                  w-12 h-12 rounded-xl
                  bg-[#211331]
                  border border-purple-500/30
                  flex items-center justify-center"
                >
                  <Palette size={23} className="text-purple-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute bottom-0 left-10
                  w-12 h-12 rounded-xl
                  bg-[#211331]
                  border border-purple-500/30
                  flex items-center justify-center"
                >
                  <Globe size={23} className="text-purple-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity }}
                  className="absolute bottom-3 right-10
                  w-12 h-12 rounded-xl
                  bg-[#211331]
                  border border-purple-500/30
                  flex items-center justify-center"
                >
                  <Zap size={23} className="text-purple-400" />
                </motion.div>

              </div>

              {/* Bottom Status Bar */}
              <div className="mt-10 grid grid-cols-2 gap-4">

                <div
                  className="rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2
                      size={16}
                      className="text-purple-400"
                    />

                    <span className="text-xs text-gray-400">
                      Our Approach
                    </span>
                  </div>

                  <p className="text-white font-semibold text-sm">
                    Quality First
                  </p>
                </div>

                <div
                  className="rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Zap
                      size={16}
                      className="text-purple-400"
                    />

                    <span className="text-xs text-gray-400">
                      Our Mission
                    </span>
                  </div>

                  <p className="text-white font-semibold text-sm">
                    Digital Growth
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}