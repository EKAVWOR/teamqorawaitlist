import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import {
  BadgePercent,
  Headphones,
  Gift,
  Users,
  Sparkles,
  CheckCircle2
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
        'Get direct access to our team and personalized assistance.',
    },
    {
      icon: Gift,
      title: 'Exclusive Resources',
      description:
        'Receive valuable guides, templates, and resources to support your growth.',
    },
    {
      icon: Users,
      title: 'Community Access',
      description:
        'Connect with entrepreneurs and creatives in our private WhatsApp community.',
    },
  ];

  return (
    <section
      ref={ref}
      id="waitlist"
      className="
        relative
        bg-[#F3EDFF]
        py-16
        sm:py-20
        px-4
        sm:px-6
        lg:px-8
        overflow-hidden
        scroll-mt-20
      "
    >

      {/* Background Decorative Glow */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-[600px]
          h-[600px]
          bg-purple-200/50
          rounded-full
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[500px]
          h-[500px]
          bg-fuchsia-200/30
          rounded-full
          blur-[130px]
          pointer-events-none
        "
      />

      <div className="relative max-w-6xl mx-auto">

        {/* FORM FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >

          {/* Form Glow */}
          <div
            className="
              absolute
              -inset-3
              bg-purple-300/20
              rounded-[30px]
              blur-[40px]
              pointer-events-none
            "
          />

          {/* Main Form Card */}
          <div
            className="
              relative
              bg-white
              border
              border-purple-200
              rounded-[24px]
              p-5
              sm:p-8
              md:p-10
              shadow-xl
              shadow-purple-500/10
            "
          >

            {/* Top Accent */}
            <div
              className="
                absolute
                top-0
                left-10
                right-10
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-purple-500
                to-transparent
              "
            />

            {/* Form Heading */}
            <div className="text-center mb-8">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-purple-50
                  border
                  border-purple-100
                  mb-5
                "
              >
                <Sparkles size={15} className="text-purple-600" />

                <span className="text-xs sm:text-sm font-semibold text-purple-700">
                  Exclusive Early Access
                </span>
              </div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-bold
                  text-[#171126]
                  tracking-tight
                "
              >
                Join the
                <span className="text-purple-600">
                  {' '}TeamQora Waitlist
                </span>
              </h2>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-[#6B6478]
                  max-w-md
                  mx-auto
                  mt-4
                  leading-relaxed
                "
              >
                Secure your spot today and be among the first
                to experience your all-in-one digital team.
              </p>

            </div>

            {/* WAITLIST FORM */}
            <WaitlistForm onSuccess={onSuccess} />

            {/* Trust Note */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                mt-7
                pt-6
                border-t
                border-purple-100
              "
            >
              <CheckCircle2
                size={16}
                className="text-purple-600 flex-shrink-0"
              />

              <p className="text-xs sm:text-sm text-[#8A8296] text-center">
                Your information is safe and secure with TeamQora.
              </p>
            </div>

          </div>

        </motion.div>

        {/* EXPLANATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mt-20 mb-12"
        >

          <span
            className="
              text-purple-600
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
            "
          >
            Why Join Early?
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-[#171126]
              mt-4
              tracking-tight
            "
          >
            Be First.
            <span className="text-purple-600">
              {' '}Stay Ahead.
            </span>
          </h2>

          <p
            className="
              text-base
              sm:text-lg
              text-[#6B6478]
              mt-6
              leading-relaxed
            "
          >
            Joining the TeamQora waitlist means more than
            getting early access. You'll be among the first
            to discover a simpler way to build, manage,
            and grow your business with one dedicated digital team.
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
          "
        >

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  relative
                  bg-white
                  p-6
                  sm:p-7
                  rounded-2xl
                  border
                  border-purple-100
                  hover:border-purple-300
                  hover:shadow-xl
                  hover:shadow-purple-500/10
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
                    bg-purple-100
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
                      text-purple-600
                      group-hover:text-white
                      transition-colors
                    "
                  />
                </div>

                {/* Benefit Title */}
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[#171126]
                    mb-3
                  "
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-sm
                    text-[#6B6478]
                    leading-relaxed
                  "
                >
                  {benefit.description}
                </p>

                {/* Hover Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-7
                    right-7
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-purple-500
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

      </div>
    </section>
  );
});

WaitlistSection.displayName = 'WaitlistSection';

export default WaitlistSection;