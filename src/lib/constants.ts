export const BRAND_COLORS = {
  indigo: '#3A2F7B',
  purple: '#5F3DFF',
  lavender: '#C6B8F5',
  midnight: '#171039',
  dark: '#21164D',
  rich: '#35216F',
  muted: '#9E8BE8',
  pale: '#E8E0FF',
  offWhite: '#F5F1FF',
} as const;

export const SERVICES = [

   { id: 'web-dev',
    title: 'Web Development',
    description:
      'Build responsive, functional, and engaging websites and digital experiences.',
    icon: '🌐',
    category: 'technical',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description:
      'Create visual communication that gives brands a distinctive and professional presence.',
    icon: '🎨',
    category: 'creative',
  },
  {
    id: 'branding',
    title: 'Branding & Visual Identity',
    description:
      'Develop consistent brand identities that communicate value and personality.',
    icon: '✨',
    category: 'strategy',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Support brand visibility, audience engagement, and digital growth.',
    icon: '📈',
    category: 'marketing',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description:
      'Develop mobile experiences for businesses and their customers.',
    icon: '📱',
    category: 'technical',
  },
  {
    id: 'copywriting',
    title: 'Copywriting',
    description:
      'Craft compelling, persuasive copy that drives engagement and conversions for your brand.',
    icon: '✍️',
    category: 'creative',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description:
      'Manage your social presence with strategic content, community engagement, and growth.',
    icon: '📱💬',
    category: 'marketing',
  },
  {
    id: 'other',
    title: 'Other Digital Solutions',
    description:
      'Tailored creative and technical support based on your brand\'s needs.',
    icon: '🚀',
    category: 'other',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your goals, challenges, or the service you are looking for.',
  },
  {
    step: '02',
    title: 'We Connect the Right Solutions',
    description: 'TeamQora helps coordinate the appropriate creative and technical expertise for your requirements.',
  },
  {
    step: '03',
    title: 'Move Your Ideas Forward',
    description: 'Get the support you need to take your brand, business, or project to the next stage.',
  },
] as const;

export const USER_TYPES = [
  { value: 'business-owner', label: 'Business Owner' },
  { value: 'startup-founder', label: 'Startup Founder' },
  { value: 'individual', label: 'Individual' },
  { value: 'freelancer', label: 'Freelancer/Creative' },
  { value: 'partner', label: 'Potential Partner' },
  { value: 'other', label: 'Other' },
] as const;

export const CURRENT_YEAR = new Date().getFullYear();