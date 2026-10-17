import React from 'react';
import WaitlistForm from './WaitlistForm';

interface WaitlistSectionProps {
  onSuccess: (email: string) => void;
}

export default function WaitlistSection({ onSuccess }: WaitlistSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pointer-events-none"></div>

      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-20 w-80 h-80 bg-gradient-radial from-blue-200 to-transparent rounded-full opacity-10 pointer-events-none blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-radial from-indigo-200 to-transparent rounded-full opacity-10 pointer-events-none blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4">
            Join Our Exclusive Waitlist
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Be among the first to experience TeamQora's premium digital solutions.
            Get priority access, special pricing, and exclusive benefits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Benefit 1 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold mb-4">
              ✓
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Early Bird Pricing</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get special rates only for waitlist members
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold mb-4">
              ✓
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Priority Support</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Direct access to our dedicated support team
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold mb-4">
              ✓
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Exclusive Resources</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Free guides, templates, and industry insights
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold mb-4">
              ✓
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Community Access</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Join our private WhatsApp community group
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-xl border border-blue-100 p-8 sm:p-10 mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Get Started Today
            </h3>
            <p className="text-gray-600">
              Fill out the form below to join our exclusive waitlist.
            </p>
          </div>
          
          {/* Form */}
          <WaitlistForm onSuccess={onSuccess} />
        </div>
      </div>
    </section>
  );
}