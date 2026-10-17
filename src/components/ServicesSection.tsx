import { motion } from 'framer-motion';
import { SERVICES } from '../lib/constants';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#FAF8FF] py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 text-sm font-semibold uppercase tracking-[0.2em]">
            What We Do
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171126] mt-4 tracking-tight">
            Everything You Need.
            <span className="text-purple-600"> One Team.</span>
          </h2>

          <p className="text-[#6B6478] text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            From building your brand to growing your online presence,
            TeamQora brings the right expertise together in one place.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const featured = index === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-between min-h-[260px] p-7 rounded-2xl border transition-all duration-300 ${
                  featured
                    ? 'bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 border-purple-400 text-white shadow-xl shadow-purple-500/20'
                    : 'bg-white border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10'
                }`}
              >
                {/* Top */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug ${
                        featured ? 'text-white' : 'text-[#171126]'
                      }`}
                    >
                      {service.title}
                    </h3>

                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        featured
                          ? 'border-white/40 text-white'
                          : 'border-purple-200 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p
                    className={`mt-4 text-sm sm:text-base leading-relaxed ${
                      featured ? 'text-purple-100' : 'text-[#6B6478]'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="mt-8">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      featured
                        ? 'bg-white/15'
                        : 'bg-purple-50 border border-purple-100'
                    }`}
                  >
                    {service.icon}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}