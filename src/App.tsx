import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';

import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandIntroduction from './components/BrandIntroduction';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import WaitlistSection from './components/WaitlistSection';
import SuccessModal from './components/SuccessModal';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import './index.css';

const App: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successEmail, setSuccessEmail] = useState('');

  const waitlistSectionRef = useRef<HTMLElement>(null);

  // Logo
  const logoSrc = '/teamqora-logo.png';

  // WhatsApp community link
  const whatsappLink =
    import.meta.env.VITE_WHATSAPP_GROUP_LINK || '';

  /*
   * Smooth scrolling
   *
   * Uses the browser's native smooth scrolling.
   * The offset accounts for the fixed navbar.
   */
  const scrollToElement = useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      const navbarOffset = 80;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY;

      const offsetPosition =
        elementPosition - navbarOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    },
    []
  );

  // Scroll to waitlist
  const handleJoinClick = useCallback(() => {
    scrollToElement(waitlistSectionRef.current);
  }, [scrollToElement]);

  // Scroll to services
  const handleDiscoverClick = useCallback(() => {
    const servicesSection =
      document.getElementById('services');

    scrollToElement(servicesSection);
  }, [scrollToElement]);

  // Waitlist success
  const handleFormSuccess = useCallback(
    (email: string) => {
      setSuccessEmail(email);
      setShowSuccessModal(true);
    },
    []
  );

  // WhatsApp tracking
  const handleWhatsAppClick = useCallback(() => {
    console.log(
      'User initiated WhatsApp community join'
    );
  }, []);

  // Close success modal
  const handleCloseModal = useCallback(() => {
    setShowSuccessModal(false);
  }, []);

  /*
   * Global smooth scrolling
   */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-[#050505]
        text-white
        overflow-x-hidden
        selection:bg-purple-600
        selection:text-white
      "
    >

      {/* Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        containerStyle={{
          top: 90,
          zIndex: 9999,
        }}
        toastOptions={{
          duration: 4000,

          style: {
            background: '#111111',
            color: '#ffffff',
            border: '1px solid rgba(139,92,246,0.25)',
            borderRadius: '12px',
            padding: '14px 18px',
            fontSize: '14px',
            boxShadow:
              '0 10px 40px rgba(0,0,0,0.4)',
          },

          success: {
            style: {
              background: '#171024',
              color: '#ffffff',
              border:
                '1px solid rgba(139,92,246,0.4)',
            },
            iconTheme: {
              primary: '#a78bfa',
              secondary: '#171024',
            },
          },

          error: {
            style: {
              background: '#1c1015',
              color: '#ffffff',
              border:
                '1px solid rgba(239,68,68,0.4)',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#1c1015',
            },
          },
        }}
      />

      {/* Navigation */}
      <Navbar
        onJoinClick={handleJoinClick}
        logoSrc={logoSrc}
      />

      {/* Main Content */}
      <main id="home">

        {/* Hero */}
        <HeroSection
          onJoinClick={handleJoinClick}
          onDiscoverClick={handleDiscoverClick}
        />

        {/* Services */}
        <ServicesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Why TeamQora */}
        <BrandIntroduction />

        {/* Waitlist */}
        <WaitlistSection
          ref={waitlistSectionRef}
          onSuccess={handleFormSuccess}
        />

        {/* Final CTA */}
        <FinalCTA
          onJoinClick={handleJoinClick}
        />

      </main>

      {/* Footer */}
      <Footer logoSrc={logoSrc} />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        userEmail={successEmail}
        whatsappLink={whatsappLink}
        onClose={handleCloseModal}
        onWhatsAppClick={handleWhatsAppClick}
      />

    </div>
  );
};

export default App;