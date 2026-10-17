
import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us Your Needs',
      description:
        'Share your project requirements, business goals, and vision with our team.',
    },
    {
      number: '02',
      title: 'We Plan & Propose',
      description:
        'We develop a tailored strategy and clear roadmap for your success.',
    },
    {
      number: '03',
      title: 'We Execute',
      description:
        'Our experts transform your ideas into high-quality digital solutions.',
    },
    {
      number: '04',
      title: 'You Succeed',
      description:
        'Launch confidently and achieve measurable business growth.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative
      py-24 sm:py-28
      px-4 sm:px-6 lg:px-8
      bg-gradient-to-br
      from-[#210057]
      via-[#390099]
      to-[#4c0bc4]
      overflow-hidden"
    >

      {/* Background Effects */}
      <div
        className="absolute -top-40 -right-40
        w-[500px] h-[500px]
        bg-purple-400/20
        rounded-full
        blur-[150px]
        pointer-events-none"
      />

      <div
        className="absolute -bottom-60 -left-40
        w-[500px] h-[500px]
        bg-indigo-900/40
        rounded-full
        blur-[150px]
        pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <span
            className="text-purple-200
            text-sm font-semibold
            uppercase tracking-[0.2em]"
          >
            Our Process
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl
            font-bold text-white mt-4 tracking-tight"
          >
            Simple Process.
            <span className="text-purple-200">
              {' '}Powerful Results.
            </span>
          </h2>

          <p
            className="text-purple-100/75
            text-base sm:text-lg
            max-w-2xl mx-auto mt-5"
          >
            From your first idea to the final launch,
            we make bringing your vision to life simple and seamless.
          </p>

        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative
              min-h-[280px]
              rounded-2xl
              border border-white/25
              bg-white/[0.04]
              backdrop-blur-sm
              p-7
              hover:bg-white/[0.09]
              hover:border-white/50
              transition-all duration-300"
            >

              {/* Top */}
              <div className="flex justify-between items-start mb-12">

                <span
                  className="text-5xl
                  font-bold text-white
                  tracking-tight"
                >
                  {step.number}
                </span>

                <span
                  className="w-8 h-8
                  rounded-full
                  border border-white/40
                  flex items-center justify-center
                  text-white
                  group-hover:bg-white
                  group-hover:text-purple-700
                  transition-all duration-300"
                >
                  ↗
                </span>

              </div>

              {/* Content */}
              <h3
                className="text-xl
                font-semibold text-white mb-3"
              >
                {step.title}
              </h3>

              <p
                className="text-sm
                text-purple-100/75
                leading-relaxed"
              >
                {step.description}
              </p>

              {/* Bottom Decorative Line */}
              <div
                className="absolute bottom-0 left-7 right-7
                h-[2px]
                bg-gradient-to-r
                from-white/0 via-white/50 to-white/0
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300"
              />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}