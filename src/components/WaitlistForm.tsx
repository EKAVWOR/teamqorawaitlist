import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { SERVICES } from '../lib/constants';
import toast from 'react-hot-toast';

interface WaitlistFormProps {
  onSuccess?: (email: string) => void;
}

export default function WaitlistForm({
  onSuccess,
}: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      toast.error('Full name is required');
      return;
    }

    if (!formData.email.trim()) {
      toast.error('Email is required');
      return;
    }

    if (selectedServices.length === 0) {
      toast.error('Please select at least one service');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            full_name: formData.fullName.trim(),
            email: formData.email.trim().toLowerCase(),
            company_name: formData.company.trim() || null,
            phone_number: formData.phone.trim() || null,
            services: selectedServices,
          },
        ]);

      if (error) {
        console.error('Supabase error:', error);

        if (error.message.includes('duplicate')) {
          toast.error('This email is already on the waitlist!');
        } else {
          toast.error(`Error: ${error.message}`);
        }

        return;
      }

      toast.success('🎉 Successfully joined the waitlist!');
      onSuccess?.(formData.email.trim().toLowerCase());
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
      });

      setSelectedServices([]);

      // Optional: Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        const whatsappLink = import.meta.env.VITE_WHATSAPP_GROUP_LINK;

        if (whatsappLink) {
          window.open(whatsappLink, '_blank');
        }
      }, 2000);

    } catch (err) {
      console.error('Error:', err);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Shared input styling
  const inputClassName = `
    w-full
    px-4
    py-3.5
    rounded-xl
    bg-white/[0.04]
    border
    border-white/15
    text-white
    text-sm
    sm:text-base
    placeholder:text-gray-500
    outline-none
    transition-all
    duration-300
    hover:border-white/25
    focus:border-purple-500
    focus:bg-purple-500/[0.05]
    focus:ring-4
    focus:ring-purple-500/10
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const labelClassName = `
    block
    text-sm
    font-medium
    text-gray-200
    mb-2.5
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-8"
    >

      {/* PERSONAL INFORMATION */}
      <div className="space-y-6">

        {/* Section Label */}
        <div className="flex items-center gap-3 pb-2">
          <div className="w-1 h-5 rounded-full bg-purple-500" />

          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Your Information
          </h4>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className={labelClassName}
            >
              Full Name
              <span className="text-purple-400 ml-1">*</span>
            </label>

            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={inputClassName}
              disabled={loading}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={labelClassName}
            >
              Email Address
              <span className="text-purple-400 ml-1">*</span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className={inputClassName}
              disabled={loading}
              required
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className={labelClassName}
            >
              Company Name
              <span className="text-gray-500 text-xs ml-2">
                Optional
              </span>
            </label>

            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company Inc."
              className={inputClassName}
              disabled={loading}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className={labelClassName}
            >
              Phone Number
              <span className="text-gray-500 text-xs ml-2">
                Optional
              </span>
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              className={inputClassName}
              disabled={loading}
            />
          </div>

        </div>
      </div>

      {/* SERVICES SELECTION */}
      <div className="space-y-5">

        {/* Section Heading */}
        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-3">
            <div className="w-1 h-5 rounded-full bg-purple-500" />

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services Interested In
              <span className="text-purple-400 ml-1">*</span>
            </h4>
          </div>

          {/* Selected Count */}
          <span
            className="text-xs
            px-3 py-1
            rounded-full
            bg-purple-500/10
            border border-purple-500/20
            text-purple-300
            whitespace-nowrap"
          >
            {selectedServices.length} Selected
          </span>

        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          {SERVICES.map((service) => {
            const isSelected = selectedServices.includes(service.id);

            return (
              <label
                key={service.id}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  border
                  cursor-pointer
                  transition-all
                  duration-300
                  ${
                    isSelected
                      ? 'bg-purple-600/15 border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.08)]'
                      : 'bg-white/[0.03] border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06]'
                  }
                  ${
                    loading
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }
                `}
              >

                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleServiceToggle(service.id)}
                  className="
                    w-4
                    h-4
                    flex-shrink-0
                    cursor-pointer
                    accent-purple-600
                    focus:ring-purple-500
                  "
                  disabled={loading}
                />

                {/* Icon */}
                <div
                  className={`
                    w-10
                    h-10
                    flex-shrink-0
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-xl
                    transition-all
                    duration-300
                    ${
                      isSelected
                        ? 'bg-purple-500/20'
                        : 'bg-white/[0.05] group-hover:bg-purple-500/10'
                    }
                  `}
                >
                  {service.icon}
                </div>

                {/* Service Title */}
                <span
                  className={`
                    text-sm
                    font-medium
                    leading-snug
                    transition-colors
                    ${
                      isSelected
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }
                  `}
                >
                  {service.title}
                </span>

              </label>
            );
          })}

        </div>

        {/* Helper Text */}
        <p className="text-xs text-gray-500">
          Select at least one service. You can choose multiple options.
        </p>

      </div>

      {/* SUBMIT */}
      <div className="pt-3">

        <button
          type="submit"
          disabled={loading}
          className="
            group
            relative
            w-full
            flex
            items-center
            justify-center
            gap-3
            px-6
            py-4
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            via-violet-600
            to-purple-700
            text-white
            text-base
            font-semibold
            shadow-lg
            shadow-purple-700/20
            hover:shadow-purple-600/40
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all
            duration-300
            disabled:opacity-60
            disabled:cursor-not-allowed
            disabled:hover:translate-y-0
          "
        >

          {/* Loading Spinner */}
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />

              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}

          <span>
            {loading
              ? 'Joining Waitlist...'
              : 'Join the Waitlist'}
          </span>

          {!loading && (
            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          )}

        </button>

        {/* Privacy Note */}
        <p className="text-center text-xs text-gray-500 leading-relaxed mt-5">
          We respect your privacy. Your information will never be shared.
        </p>

      </div>

    </form>
  );
}