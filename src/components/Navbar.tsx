import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onJoinClick: () => void;
  logoSrc: string;
}

export default function Navbar({
  onJoinClick,
  logoSrc,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <img
              src={logoSrc}
              alt="TeamQora Logo"
              className="h-10 w-auto rounded-lg"
            />

            <span className="text-2xl font-bold tracking-tight text-white">
              Team
              <span className="text-purple-500">
                Qora
              </span>
              <span className="text-white">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#services"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Services
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              How It Works
            </a>

            <button
              onClick={onJoinClick}
              className="px-6 py-3
              bg-purple-600
              hover:bg-purple-500
              text-white
              text-sm font-semibold
              rounded-lg
              shadow-lg shadow-purple-700/20
              hover:shadow-purple-600/40
              transition-all duration-300"
            >
              Join Waitlist
            </button>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden
            p-2 rounded-lg
            border border-white/10
            text-white
            hover:bg-white/10
            transition"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-6 pt-3 space-y-2 border-t border-white/10">

                <a
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-purple-400"
                >
                  Services
                </a>

                <a
                  href="#how-it-works"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-purple-400"
                >
                  How It Works
                </a>

                <button
                  onClick={() => {
                    onJoinClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 mt-3 bg-purple-600 text-white font-semibold rounded-lg"
                >
                  Join Waitlist
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}