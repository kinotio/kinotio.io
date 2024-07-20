type RouteProps = {
  href: string
  label: string
}

type PartenersOrSponsorsProps = {
  icon: string
  name: string
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
      name: 'Acmebrand',
    },
    {
      icon: 'Vegan',
      name: 'Acmelogo',
    },
    {
      icon: 'Ghost',
      name: 'Acmesponsor',
    },
    {
      icon: 'Puzzle',
      name: 'Acmeipsum',
    },
    {
      icon: 'Squirrel',
      name: 'Acme',
    },
    {
      icon: 'Cookie',
      name: 'Accmee',
    },
    {
      icon: 'Drama',
      name: 'Acmetech',
    },
  ] satisfies PartenersOrSponsorsProps[],
  sponsors: [
    {
      icon: 'Crown',
      name: 'Acmebrand',
    },
    {
      icon: 'Vegan',
      name: 'Acmelogo',
    },
    {
      icon: 'Ghost',
      name: 'Acmesponsor',
    },
    {
      icon: 'Puzzle',
      name: 'Acmeipsum',
    },
    {
      icon: 'Squirrel',
      name: 'Acme',
    },
    {
      icon: 'Cookie',
      name: 'Accmee',
    },
    {
      icon: 'Drama',
      name: 'Acmetech',
    },
  ] satisfies PartenersOrSponsorsProps[],
}
