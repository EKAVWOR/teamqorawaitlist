
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onJoinClick: () => void;
}

export default function FinalCTA({
  onJoinClick,
}: FinalCTAProps) {
  return (
    <section className="relative bg-[#050505] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[800px] h-[500px]
        bg-purple-700/15
        rounded-full blur-[160px]
        pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden
          rounded-[28px]
          border border-purple-400/30
          bg-gradient-to-br
          from-[#2c076e]
          via-[#4c0db5]
          to-[#28045f]
          px-6 sm:px-12 lg:px-20
          py-20 sm:py-24
          text-center
          shadow-[0_0_100px_rgba(109,40,217,0.15)]"
        >

          {/* Decorative Glows */}
          <div
            className="absolute -top-40 -left-40
            w-[500px] h-[500px]
            bg-purple-400/20
            rounded-full blur-[100px]
            pointer-events-none"
          />

          <div
            className="absolute -bottom-60 -right-40
            w-[600px] h-[600px]
            bg-violet-500/30
            rounded-full blur-[120px]
            pointer-events-none"
          />

          {/* Decorative Circle */}
          <div
            className="absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[650px] h-[650px]
            rounded-full
            border border-white/10
            pointer-events-none"
          />

          <div
            className="absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[900px] h-[900px]
            rounded-full
            border border-white/5
            pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2
              px-4 py-2 mb-8
              rounded-full
              border border-white/20
              bg-white/10
              backdrop-blur-md"
            >
              <Sparkles size={15} className="text-purple-200" />

              <span className="text-sm text-purple-100 font-medium">
                Let's Build Something Great
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold text-white
              tracking-tight leading-[1.15]"
            >
              Ready to Transform
              <span className="block mt-2">
                Your Business?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg
              text-purple-100/80
              max-w-xl mx-auto
              mt-7 leading-relaxed"
            >
              Take the next step toward digital success.
              Join the TeamQora waitlist and be among the first
              to experience smarter, more powerful digital solutions.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <button
                onClick={onJoinClick}
                className="group inline-flex
                items-center justify-center gap-3
                w-full sm:w-auto
                px-9 py-4
                rounded-xl
                bg-white
                text-purple-800
                font-bold
                shadow-xl shadow-black/20
                hover:bg-purple-50
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all duration-300"
              >
                Join the Waitlist Today

                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            {/* Supporting Text */}
            <p className="mt-6 text-sm text-purple-200/70">
              Your next big digital move starts here.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}