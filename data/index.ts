import {
  FeaturesProps,
  PartenersOrSponsorsProps,
  RouteProps,
  BenefitsProps,
  FAQProps,
  ReviewProps,
} from '@/lib/definitions'

export const DATA = {
  name: 'Kinotio',
  url: 'https://kinotio.io',
  description: 'We do open-source',
  typeform: 'https://grkisim22mo.typeform.com/to/tUMWdPVx',
  social_url: {
    github: 'https://github.com/kinotio',
    discord: 'https://discord.gg/cskvbKQA',
    linkedin: 'https://linkedin.com/company/kinotio',
    x: 'https://x.com/kinotio_io',
  },
  color: {
    gradient: {
      from: '#6048e7',
      to: '#56d49e',
    },
    base: {
      dark: '#000000',
      light: '#ffffff',
    },
  },
  navbar: [
    {
      href: '#benefits',
      name: 'benefits',
    },
    {
      href: '#features',
      name: 'features',
    },
    // {
    //   href: '#testimonials',
    //   label: 'Testimonials',
    // },
    {
      href: '#contributors',
      name: 'contributors',
    },
    {
      href: '#faq',
      name: 'faq',
    },
    {
      href: '#contact',
      name: 'contact',
    },
  ] satisfies RouteProps[],
  footer: {
    contact: [
      {
        icon: 'Mail',
        href: 'mailto:contact@kinotio.io',
        label: 'contact@kinotio.io',
      },
    ],
    help: [
      {
        href: '#contact',
        name: 'contact',
      },
      {
        href: '#faq',
        name: 'faq',
      },
      {
        href: '#feedback',
        name: 'feedback',
      },
    ],
    socials: [
      {
        icon: 'Github',
        href: 'https://github.com/kinotio',
        name: 'github',
      },
      {
        icon: 'X',
        href: 'https://x.com/kinotio_io',
        label: 'X',
      },
      {
        icon: 'Linkedin',
        href: 'https://linkedin.com/company/kinotio',
        label: 'LinkedIn',
      },
      {
        icon: 'MessageCircle',
        href: 'https://discord.gg/cskvbKQA',
        label: 'Discord',
      },
    ],
  },
  images: {
    'drowser-studio': '/images/products/drowser-studio.png',
    gelda: '/images/products/gelda.png',
  },
  products: [
    {
      name: 'Drowser Studio',
      description:
        'Drowser Studio is a robust and intuitive app designed to help users track, visualize, and analyze the performance of various tests over time.',
      href: '/drowser',
    },
    {
      name: 'Gelda',
      description:
        'Gelda is a revolutionary AI-powered helpdesk assistant designed to provide users with an efficient and personalized support experience.',
      href: '/gelda',
    },
  ],
  partners: [
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Crown',
      name: 'Your company',
    },
  ] satisfies PartenersOrSponsorsProps[],
  sponsors: [
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Crown',
      name: 'Your company',
    },
  ] satisfies PartenersOrSponsorsProps[],
  benefits: [
    {
      icon: 'Wallet',
      name: 'financial_benefits',
    },
    {
      icon: 'TrendingUp',
      name: 'market_insights',
    },
    {
      icon: 'Handshake',
      name: 'csr',
    },
    {
      icon: 'Sparkle',
      name: 'influence_and_leadership',
    },
  ] satisfies BenefitsProps[],
  features: [
    {
      icon: 'Zap',
      name: 'diversity_inclusion',
    },
    {
      icon: 'BadgeCheck',
      name: 'contributor_recognition',
    },
    {
      icon: 'Vote',
      name: 'open_decision_making',
    },
    {
      icon: 'Lightbulb',
      name: 'innovation_focus',
    },
    {
      icon: 'Map',
      name: 'collaborative_roadmapping',
    },
    {
      icon: 'HeartHandshake',
      name: 'ethical_responsible_development',
    },
  ] satisfies FeaturesProps[],
  reviews: [
    {
      image: 'https://github.com/shadcn.png',
      name: 'John Doe',
      userName: 'Product Manager',
      comment:
        'Wow NextJs + Shadcn is awesome!. This template lets me change colors, fonts and images to match my brand identity. ',
      rating: 2.5,
    },
    {
      image: 'https://github.com/shadcn.png',
      name: 'John Doe',
      userName: 'Product Manager',
      comment:
        'Wow NextJs + Shadcn is awesome!. This template lets me change colors, fonts and images to match my brand identity. ',
      rating: 2.5,
    },
    {
      image: 'https://github.com/shadcn.png',
      name: 'John Doe',
      userName: 'Product Manager',
      comment:
        'Wow NextJs + Shadcn is awesome!. This template lets me change colors, fonts and images to match my brand identity. ',
      rating: 2.5,
    },
  ] satisfies ReviewProps[],
  faq: [
    {
      question: 'What is the primary goal of this open source community?',
      answer:
        'Our primary goal is to foster innovation, collaboration, and growth among developers by providing a supportive and inclusive environment. We aim to create high-quality open source software that addresses real-world problems and advances technology.',
      id: 'q1',
    },
    {
      question: 'Who can join the community?',
      answer:
        'Anyone with a passion for open source software is welcome to join! We embrace diversity and inclusivity, and we encourage developers of all backgrounds and skill levels to participate.',
      id: 'q2',
    },
    {
      question: 'How can I start contributing to projects?',
      answer:
        'To start contributing, browse our project repositories and look for issues tagged as “good first issue” or “help wanted.” You can also join our community discussions on forums and chat platforms to get more guidance. Don’t forget to check our comprehensive documentation and contribution guides.',
      id: 'q3',
    },
    {
      question: 'Can I propose new projects or features?',
      answer:
        'Absolutely! We encourage innovation and welcome new ideas. You can propose new projects or features through our collaborative roadmapping process, where community members discuss and prioritize new initiatives.',
      id: 'q4',
    },
    {
      question: 'How can I stay updated with community events and news?',
      answer:
        'Stay updated by following us on social media, subscribing to our newsletter, and participating in our forums and chat platforms. We regularly announce events, updates, and news through these channels.',
      id: 'q5',
    },
  ] satisfies FAQProps[],
}
