import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Palette,
  Megaphone,
  Layers3,
} from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
  onDiscoverClick: () => void;
}

export default function HeroSection({
  onJoinClick,
  onDiscoverClick,
}: HeroProps) {
  const services = [
    { icon: Code2, label: 'Development' },
    { icon: Palette, label: 'Design' },
    { icon: Megaphone, label: 'Marketing' },
    { icon: Layers3, label: 'Branding' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FAF8FF] pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-purple-200/50 blur-[140px]" />
        <div className="absolute bottom-0 -left-60 w-[600px] h-[600px] rounded-full bg-fuchsia-200/40 blur-[140px]" />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#6D28D9 1px, transparent 1px), linear-gradient(90deg, #6D28D9 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[650px]">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white/80 shadow-sm mb-8"
            >
              <Sparkles size={15} className="text-purple-600" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-purple-700">
                YOUR ALL-IN-ONE DIGITAL GROWTH PARTNER
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[42px] sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.08] text-[#171126]"
            >
              Your Business
              <br />
              Deserves a Team.
              <span className="block mt-3 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                We Built You One.
              </span>
            </motion.h1>

            {/* Core Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 text-lg sm:text-xl font-semibold text-purple-700"
            >
              One subscription. One platform. One remote team.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-[#6B6478] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Meet <span className="font-bold text-[#171126]">TeamQora</span>,
              your all-in-one digital team for web development, branding,
              graphic design, marketing, and more.
              We bring the creative and technical expertise your business
              needs together, so you can focus on what matters most —
              growing your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10"
            >
              <button
                onClick={onJoinClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold shadow-xl shadow-purple-600/20 hover:shadow-purple-600/35 hover:-translate-y-1 transition-all duration-300"
              >
                Join the Waitlist
                <ArrowUpRight
                  size={19}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>

              <button
                onClick={onDiscoverClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-purple-200 text-purple-700 font-semibold hover:bg-purple-50 hover:border-purple-400 transition-all duration-300"
              >
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-2 mt-8"
            >
              <CheckCircle2 size={17} className="text-purple-600" />
              <span className="text-sm text-gray-500">
                Everything your business needs. One team behind it.
              </span>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative w-full max-w-[540px] mx-auto"
          >
            {/* Main Glow */}
            <div className="absolute inset-0 bg-purple-400/25 rounded-full blur-[100px]" />

            {/* Main Illustration Card */}
            <div className="relative rounded-[32px] bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-500 p-1 shadow-[0_30px_100px_rgba(124,58,237,0.25)]">
              <div className="relative rounded-[29px] bg-[#F9F5FF] p-6 sm:p-9 overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <div className="w-3 h-3 rounded-full bg-fuchsia-400" />
                    <div className="w-3 h-3 rounded-full bg-purple-200" />
                  </div>

                  <span className="text-xs font-semibold text-purple-600">
                    TEAMQORA WORKSPACE
                  </span>
                </div>

                {/* Center Brand */}
                <div className="text-center mb-12">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center shadow-xl shadow-purple-500/30"
                  >
                    <span className="text-white font-black text-3xl">TQ</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#171126] mt-6">
                    Your Digital Team
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    Everything connected. Everything simplified.
                  </p>
                </div>

                {/* Service Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <motion.div
                        key={service.label}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3 + index * 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-purple-100 shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                          <Icon size={20} className="text-purple-600" />
                        </div>

                        <span className="text-sm font-semibold text-[#171126]">
                          {service.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Status */}
                <div className="flex items-center justify-center gap-2 mt-8 py-3 rounded-xl bg-purple-100/70">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-purple-800">
                    Your Team. Your Growth.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}