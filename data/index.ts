type RouteProps = {
  href: string
  label: string
}

export const DATA = {
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
  url: {
    github: 'https://github.com/kinotio',
    discord: 'https://discord.gg/cskvbKQA',
  },
  color: {
    gradient: {
      from: '#6048e7',
      to: '#56d49e',
    },
  },
}
