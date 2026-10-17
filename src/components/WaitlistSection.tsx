import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import {
  BadgePercent,
  Headphones,
  Gift,
  Users,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import WaitlistForm from './WaitlistForm';

interface WaitlistSectionProps {
  onSuccess: (email: string) => void;
}

const WaitlistSection = forwardRef<
  HTMLElement,
  WaitlistSectionProps
>(({ onSuccess }, ref) => {

  const benefits = [
    {
      icon: BadgePercent,
      title: 'Early Bird Pricing',
      description:
        'Unlock exclusive launch rates reserved for our early waitlist members.',
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description:
        'Get direct access to our team and personalized assistance when you need it.',
    },
    {
      icon: Gift,
      title: 'Exclusive Resources',
      description:
        'Receive valuable guides, templates, and insights to accelerate your growth.',
    },
    {
      icon: Users,
      title: 'Community Access',
      description:
        'Connect with like-minded entrepreneurs in our private WhatsApp community.',
    },
  ];

  return (
    <section
      ref={ref}
      id="waitlist"
      className="
        relative
        bg-[#050505]
        py-24
        sm:py-32
        px-4
        sm:px-6
        lg:px-8
        overflow-hidden
        scroll-mt-20
      "
    >

      {/* Background Purple Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[500px]
          bg-purple-700/10
          rounded-full
          blur-[160px]
          pointer-events-none
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-[600px]
          h-[600px]
          bg-violet-700/10
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-purple-600/10
              border
              border-purple-500/25
              mb-7
            "
          >
            <Sparkles
              size={15}
              className="text-purple-400"
            />

            <span className="text-purple-300 text-sm font-medium">
              Exclusive Early Access
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-white
              tracking-tight
              leading-tight
            "
          >
            Be First.
            <span className="text-purple-500">
              {' '}Stay Ahead.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              max-w-2xl
              mx-auto
              mt-6
              leading-relaxed
            "
          >
            Join the TeamQora waitlist and unlock exclusive
            benefits designed to help your business grow.
            Be among the first to experience smarter digital solutions.
          </p>

        </motion.div>

        {/* BENEFITS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            mb-20
          "
        >

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  p-6
                  sm:p-7
                  rounded-2xl
                  bg-[#111111]
                  border
                  border-white/10
                  hover:border-purple-500/50
                  hover:bg-[#151020]
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-purple-600/10
                    border
                    border-purple-500/20
                    flex
                    items-center
                    justify-center
                    mb-7
                    group-hover:bg-purple-600
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    size={23}
                    className="
                      text-purple-400
                      group-hover:text-white
                      transition-colors
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Bottom Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-7
                    right-7
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-purple-500/60
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

              </motion.div>
            );
          })}

        </div>

        {/* FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="relative max-w-3xl mx-auto"
        >

          {/* Form Glow */}
          <div
            className="
              absolute
              -inset-4
              bg-purple-600/10
              rounded-[32px]
              blur-[60px]
              pointer-events-none
            "
          />

          {/* Form Container */}
          <div
            className="
              relative
              rounded-[24px]
              border
              border-purple-500/25
              bg-gradient-to-br
              from-[#171020]
              via-[#101014]
              to-[#0d0d10]
              p-6
              sm:p-10
              md:p-12
              shadow-[0_0_80px_rgba(109,40,217,0.1)]
              overflow-hidden
            "
          >

            {/* Top Glow Line */}
            <div
              className="
                absolute
                top-0
                left-0
                right-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-purple-400/70
                to-transparent
              "
            />

            {/* Form Header */}
            <div className="text-center mb-10">

              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-14
                  h-14
                  rounded-2xl
                  bg-purple-600/15
                  border
                  border-purple-500/25
                  mb-6
                "
              >
                <CheckCircle2
                  size={27}
                  className="text-purple-400"
                />
              </div>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                  tracking-tight
                  mb-4
                "
              >
                Secure Your Spot
              </h3>

              <p
                className="
                  text-gray-400
                  text-sm
                  sm:text-base
                  max-w-md
                  mx-auto
                  leading-relaxed
                "
              >
                Fill out the form below to join our exclusive
                waitlist and get early access to TeamQora.
              </p>

            </div>

            {/* Existing Waitlist Form */}
            <WaitlistForm onSuccess={onSuccess} />

            {/* Supporting Text */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                mt-8
                pt-6
                border-t
                border-white/10
              "
            >
              <CheckCircle2
                size={15}
                className="text-purple-400"
              />

              <p className="text-xs sm:text-sm text-gray-500">
                Your information is safe with us.
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
});

WaitlistSection.displayName = 'WaitlistSection';

export default WaitlistSection;