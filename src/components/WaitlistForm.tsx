import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { SERVICES } from '../lib/constants';
import toast from 'react-hot-toast';

export default function WaitlistForm() {
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
    setFormData(prev => ({ ...prev, [name]: value }));
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
          }
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
      
      // Reset form
      setFormData({ fullName: '', email: '', company: '', phone: '' });
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

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 tracking-wide">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-family-inherit transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-50 focus:shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={loading}
          required
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 tracking-wide">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-family-inherit transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-50 focus:shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={loading}
          required
        />
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-semibold text-gray-900 tracking-wide">
          Company Name <span className="text-xs font-normal text-gray-500 ml-1">(Optional)</span>
        </label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Your Company Inc."
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-family-inherit transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-50 focus:shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={loading}
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 tracking-wide">
          Phone Number <span className="text-xs font-normal text-gray-500 ml-1">(Optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+1 (555) 123-4567"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-family-inherit transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-50 focus:shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={loading}
        />
      </div>

      {/* Services */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-gray-900 tracking-wide">
          Services Interested In <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          {SERVICES.map((service) => (
            <label key={service.id} className="flex items-center gap-3 p-2 cursor-pointer hover:bg-blue-50 border-2 border-transparent rounded-lg transition-all duration-200 hover:border-blue-500">
              <input
                type="checkbox"
                checked={selectedServices.includes(service.id)}
                onChange={() => handleServiceToggle(service.id)}
                className="w-5 h-5 cursor-pointer accent-blue-500 flex-shrink-0"
                disabled={loading}
              />
              <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="text-lg">{service.icon}</span>
                <span>{service.name}</span>
              </span>
            </label>
          ))}
        </div>
        <p className="text-xs italic text-gray-500 mt-2">Select at least one service</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-8 py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-semibold text-base rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none shadow-md flex items-center justify-center gap-2"
      >
        {loading && (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {loading ? 'Joining Waitlist...' : 'Join the Waitlist'}
      </button>

      {/* Privacy Note */}
      <p className="text-center text-xs text-gray-500 leading-relaxed mt-4">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}