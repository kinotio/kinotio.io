import Link from 'next/link'
import { Github, DiscIcon as Discord } from 'lucide-react'

import { Kinotio } from '@/components/icons/kinotio'

import { DATA } from '@/data'

export const Header = () => {
  return (
    <header className="container flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Kinotio width={150} height={100} />
      </Link>
      <nav className="flex items-center space-x-4">
        <Link
          href={DATA.social_url.discord}
          className="text-white hover:text-gray-300"
        >
          <Discord className="h-6 w-6" />
          <span className="sr-only">Discord</span>
        </Link>
        <Link
          href={DATA.social_url.github}
          className="text-white hover:text-gray-300"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>
      </nav>
    </header>
  )
}
