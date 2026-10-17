import { motion } from 'framer-motion';
import {
  Users,
  Layers3,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function BrandIntroduction() {
  const features = [
    {
      icon: Users,
      title: 'One Team. Multiple Skills.',
      description:
        'Access creative and technical expertise without the complexity of coordinating multiple freelancers.',
    },
    {
      icon: Layers3,
      title: 'Everything in One Place.',
      description:
        'From websites and branding to marketing and design, keep your digital needs connected under one roof.',
    },
    {
      icon: Zap,
      title: 'Built Around Your Growth.',
      description:
        'Get digital solutions tailored to your goals, whether you are launching, scaling, or strengthening your brand.',
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 text-sm font-semibold uppercase tracking-[0.2em]">
            Why TeamQora
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171126] mt-4">
            More Than a Service.
            <span className="text-purple-600"> Your Digital Team.</span>
          </h2>

          <p className="text-[#6B6478] text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Stop juggling multiple service providers.
            TeamQora brings the expertise your business needs together,
            making digital growth simpler.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Feature Cards */}
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
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 5 }}
                  className="group flex items-start gap-5 p-6 sm:p-7 rounded-2xl bg-[#FAF8FF] border border-purple-100 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Icon size={24} className="text-purple-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#171126] mb-3">
                        {feature.title}
                      </h3>

                      <ArrowUpRight size={18} className="text-purple-500" />
                    </div>

                    <p className="text-sm sm:text-base text-[#6B6478] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-200/50 blur-[100px] rounded-full" />

            <div className="relative rounded-[28px] bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-500 p-8 sm:p-12 shadow-2xl shadow-purple-500/20">

              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-white/15 border border-white/20 flex items-center justify-center mb-7">
                  <Sparkles size={35} className="text-white" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Big Ideas.
                  <br />
                  One Powerful Team.
                </h3>

                <p className="text-purple-100 mt-5 max-w-sm mx-auto">
                  Everything you need to build, manage, and grow your digital presence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                {[
                  'Creative Expertise',
                  'Technical Solutions',
                  'Brand Growth',
                  'Digital Support',
                ].map(item => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl p-4"
                  >
                    <CheckCircle2 size={17} className="text-white flex-shrink-0" />
                    <span className="text-sm text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}