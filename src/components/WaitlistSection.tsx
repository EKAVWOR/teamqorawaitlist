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
        'Unlock exclusive launch rates reserved for early waitlist members.',
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
        'Receive helpful guides, templates, and insights.',
    },
    {
      icon: Users,
      title: 'Community Access',
      description:
        'Connect with entrepreneurs in our private WhatsApp community.',
    },
  ];

  return (
    <section
      ref={ref}
      id="waitlist"
      className="relative bg-[#F3EDFF] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 mb-7">
            <Sparkles size={15} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              Exclusive Early Access
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171126]">
            Be First.
            <span className="text-purple-600"> Stay Ahead.</span>
          </h2>

          <p className="text-[#6B6478] text-base sm:text-lg max-w-2xl mx-auto mt-6">
            Join the TeamQora waitlist and unlock exclusive benefits
            designed to help your business grow.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-7 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-7">
                  <Icon size={23} className="text-purple-600" />
                </div>

                <h3 className="text-lg font-semibold text-[#171126] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[#6B6478] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute -inset-4 bg-purple-300/30 rounded-[32px] blur-[50px] pointer-events-none" />

          <div className="relative rounded-[24px] bg-white border border-purple-100 p-6 sm:p-10 md:p-12 shadow-xl shadow-purple-500/10">

            <div className="text-center mb-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <CheckCircle2 size={27} className="text-purple-600" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#171126] mb-4">
                Secure Your Spot
              </h3>

              <p className="text-[#6B6478] text-sm sm:text-base max-w-md mx-auto">
                Fill out the form below to join the TeamQora waitlist.
              </p>
            </div>

            <WaitlistForm onSuccess={onSuccess} />

          </div>
        </motion.div>

      </div>
    </section>
  );
});

WaitlistSection.displayName = 'WaitlistSection';

export default WaitlistSection;