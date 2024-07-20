type RouteProps = {
  href: string
  label: string
}

type PartenersOrSponsorsProps = {
  icon: string
  name: string
}

type BenefitsProps = {
  icon: string
  title: string
  description: string
}

type FeaturesProps = {
  icon: string
  title: string
  description: string
}

export const DATA = {
  typeform: 'https://grkisim22mo.typeform.com/to/tUMWdPVx',
  url: {
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
      href: '#testimonials',
      label: 'Testimonials',
    },
    {
      href: '#team',
      label: 'Team',
    },
    {
      href: '#contact',
      label: 'Contact',
    },
    {
      href: '#faq',
      label: 'FAQ',
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
        label: 'Contact Us',
      },
      {
        href: '#faq',
        label: 'FAQ',
      },
      {
        href: '#feedback',
        label: 'Feedback',
      },
    ],
    socials: [
      {
        icon: 'Github',
        href: 'https://github.com/kinotio',
        label: 'Github',
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
  partners: [
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Vegan',
      name: 'Your company',
    },
    {
      icon: 'Ghost',
      name: 'Your company',
    },
    {
      icon: 'Puzzle',
      name: 'Your company',
    },
    {
      icon: 'Squirrel',
      name: 'Your company',
    },
    {
      icon: 'Cookie',
      name: 'Your company',
    },
    {
      icon: 'Drama',
      name: 'Your company',
    },
  ] satisfies PartenersOrSponsorsProps[],
  sponsors: [
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Vegan',
      name: 'Your company',
    },
    {
      icon: 'Ghost',
      name: 'Your company',
    },
    {
      icon: 'Puzzle',
      name: 'Your company',
    },
    {
      icon: 'Squirrel',
      name: 'Your company',
    },
    {
      icon: 'Cookie',
      name: 'Your company',
    },
    {
      icon: 'Drama',
      name: 'Your company',
    },
  ] satisfies PartenersOrSponsorsProps[],
  benefits: [
    {
      icon: 'Wallet',
      title: 'Financial Benefits',
      description:
        'Reduced development costs by leveraging open source contributions and resources.',
    },
    {
      icon: 'TrendingUp',
      title: 'Market Insights',
      description:
        'Feedback from a diverse group of users and developers to inform product development and improvement.',
    },
    {
      icon: 'Handshake',
      title: 'Corporate Social Responsibility (CSR)',
      description:
        'Demonstration of commitment to open source principles and social responsibility.',
    },
    {
      icon: 'Sparkle',
      title: 'Influence and Leadership',
      description:
        'Ability to shape industry standards and best practices through active participation and support.',
    },
  ] satisfies BenefitsProps[],
  features: [
    {
      icon: 'Zap',
      title: 'Diversity and Inclusion',
      description:
        'Supportive environment that welcomes contributors of all backgrounds and skill levels.',
    },
    {
      icon: 'BadgeCheck',
      title: 'Contributor Recognition',
      description:
        'Opportunities for contributors to present their work at community events and conferences.',
    },
    {
      icon: 'Vote',
      title: 'Open Decision-Making',
      description:
        'Community involvement in key decisions through votes, polls, and discussions.',
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation Focus',
      description:
        'Encouragement of experimental projects and innovative ideas.',
    },
    {
      icon: 'Map',
      title: 'Collaborative Roadmapping',
      description:
        'Regular updates and reviews to align with community and user needs.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Ethical and Responsible Development',
      description:
        'Projects aimed at solving social issues and contributing to the public good.',
    },
  ] satisfies FeaturesProps[],
}
