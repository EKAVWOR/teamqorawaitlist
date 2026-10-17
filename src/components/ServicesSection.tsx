
import { motion } from 'framer-motion';
import { SERVICES } from '../lib/constants';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#050505] py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 -left-60
        w-[500px] h-[500px]
        bg-purple-700/10
        rounded-full blur-[150px]
        pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 text-sm font-semibold uppercase tracking-[0.2em]">
            What We Do
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Digital Solutions.
            <span className="text-purple-500">
              {' '}Built for You.
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            From powerful digital experiences to scalable business
            solutions, we help ambitious brands grow and succeed.
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
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className={`group relative
                  flex flex-col justify-between
                  min-h-[250px]
                  p-7
                  rounded-2xl
                  border
                  overflow-hidden
                  transition-all duration-300
                  ${
                    featured
                      ? 'bg-gradient-to-br from-purple-700 via-purple-600 to-violet-700 border-purple-400/40'
                      : 'bg-[#111111] border-white/15 hover:border-purple-500/50'
                  }`}
              >

                {/* TOP: Service Name and Arrow */}
                <div className="relative z-10">

                  <div className="flex items-start justify-between gap-4">

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    <span
                      className={`flex-shrink-0
                        w-9 h-9
                        rounded-full
                        border
                        flex items-center justify-center
                        text-lg
                        transition-all duration-300
                        ${
                          featured
                            ? 'border-white/40 text-white'
                            : 'border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white'
                        }`}
                    >
                      ↗
                    </span>

                  </div>

                  {/* Description directly below name */}
                  <p
                    className={`mt-4 text-sm sm:text-base leading-relaxed
                      ${
                        featured
                          ? 'text-purple-100'
                          : 'text-gray-400'
                      }`}
                  >
                    {service.description}
                  </p>

                </div>

                {/* BOTTOM: Service Icon */}
                <div className="relative z-10 mt-8">

                  <div
                    className={`w-12 h-12
                      rounded-xl
                      flex items-center justify-center
                      text-2xl
                      transition-all duration-300
                      ${
                        featured
                          ? 'bg-white/15'
                          : 'bg-purple-600/10 border border-purple-500/20 group-hover:bg-purple-600/20'
                      }`}
                  >
                    {service.icon}
                  </div>

                </div>

                {/* Subtle Hover Gradient */}
                {!featured && (
                  <div
                    className="absolute inset-0
                      rounded-2xl
                      bg-gradient-to-br
                      from-purple-600/0
                      to-transparent
                      group-hover:from-purple-600/10
                      pointer-events-none
                      transition-all duration-300"
                  />
                )}

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}