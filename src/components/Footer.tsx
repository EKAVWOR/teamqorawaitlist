

import {
  ArrowUpRight,
  Mail,
  ArrowRight,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa6';

interface FooterProps {
  logoSrc: string;
}

export default function Footer({ logoSrc }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebookF size={18} />,
      href: 'https://facebook.com/',
    },
    {
      name: 'TikTok',
      icon: <FaTiktok size={18} />,
      href: 'https://tiktok.com/',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={18} />,
      href: 'https://instagram.com/',
    },
  ];

  // Navigation links
  const quickLinks = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Services',
      href: '#services',
    },
    {
      name: 'How It Works',
      href: '#how-it-works',
    },
    {
      name: 'About Us',
      href: '#about',
    },
  ];

  // Services
  const services = [
    'Web Development',
    'Graphic Design',
    'Digital Marketing',
    'Social Media Management',
  ];

  return (
    <footer
      className="
        relative
        bg-[#050505]
        text-white
        overflow-hidden
      "
    >
      {/* Background Purple Glow */}
      <div
        className="
          absolute
          -bottom-60
          -left-40
          w-[500px]
          h-[500px]
          bg-purple-700/10
          rounded-full
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[400px]
          h-[400px]
          bg-violet-800/5
          rounded-full
          blur-[130px]
          pointer-events-none
        "
      />

      {/* Top Gradient Border */}
      <div
        className="
          h-px
          bg-gradient-to-r
          from-transparent
          via-purple-500/40
          to-transparent
        "
      />

      {/* Footer Container */}
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-20
          pb-8
        "
      >
        {/* Main Footer Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-12
            lg:gap-10
            pb-16
          "
        >
          {/* BRAND SECTION */}
          <div>
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 mb-6"
            >
              <img
                src={logoSrc}
                alt="TeamQora Logo"
                className="h-11 w-auto rounded-lg"
              />

              <span className="text-2xl font-bold tracking-tight">
                Team
                <span className="text-purple-500">
                  Qora
                </span>
                <span className="text-white">.</span>
              </span>
            </a>

            {/* Brand Description */}
            <p
              className="
                text-gray-400
                text-sm
                leading-relaxed
                max-w-xs
              "
            >
              Empowering businesses with innovative digital
              solutions. We turn ambitious ideas into
              exceptional digital experiences.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-3 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit TeamQora on ${social.name}`}
                  title={social.name}
                  className="
                    group
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/[0.04]
                    border
                    border-white/10
                    text-gray-400
                    hover:text-white
                    hover:bg-purple-600
                    hover:border-purple-500
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-purple-600/20
                    transition-all
                    duration-300
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold text-base mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-gray-400
                      text-sm
                      hover:text-purple-400
                      transition-colors
                      duration-300
                    "
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={14}
                      className="
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-300
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold text-base mb-6">
              Our Services
            </h4>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="
                      text-gray-400
                      text-sm
                      hover:text-purple-400
                      transition-colors
                      duration-300
                    "
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h4 className="text-white font-semibold text-base mb-6">
              Get In Touch
            </h4>

            <p
              className="
                text-gray-400
                text-sm
                leading-relaxed
                mb-6
              "
            >
              Have a project in mind? We'd love to hear about it.
              Let's create something extraordinary together.
            </p>

            {/* Email */}
            <a
              href="mailto:info@teamqora.com"
              className="
                flex
                items-center
                gap-3
                text-gray-400
                hover:text-purple-400
                transition-colors
                duration-300
                mb-6
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-purple-600/10
                  border
                  border-purple-500/20
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <Mail
                  size={19}
                  className="text-purple-400"
                />
              </div>

              <span className="text-sm break-all">
                info@teamqora.com
              </span>
            </a>

            {/* Contact Link */}
            <a
              href="mailto:info@teamqora.com"
              className="
                inline-flex
                items-center
                gap-2
                text-purple-400
                text-sm
                font-semibold
                hover:text-purple-300
                transition-colors
                group
              "
            >
              Start a Conversation

              <ArrowRight
                size={16}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />

        {/* COPYRIGHT */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
            pt-8
          "
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} TeamQora. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Built for the future.
            <span className="text-purple-500 ml-1">
              Powered by innovation.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}