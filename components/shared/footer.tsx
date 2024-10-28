'use client'

import Link from 'next/link'
import { icons } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Icon } from '@/components/ui/icon'
import { KinotioLogo } from '@/components/logos/kinotio-logo'
import { Badge } from '@/components/ui/badge'

import { getCurrentYear } from '@/lib/utils'

import { DATA } from '@/data'

import { useScopedI18n } from '@/locales/client'

export const FooterSection = () => {
  const translate = useScopedI18n('footer')

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl w-full place-items-stretch">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8 z-50">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <KinotioLogo width={100} height={30} className="ml-2" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{translate('contact')}</h3>
            {DATA.footer.contact.map((contact, idx) => (
              <Link
                key={idx}
                href={contact.href}
                className="flex gap-2 items-center opacity-60 hover:opacity-100"
              >
                <Icon name={contact.icon as keyof typeof icons} size={18} />
                {contact.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{translate('help')}</h3>
            {DATA.footer.help.map((help, idx) => (
              <Link
                key={idx}
                href={help.href}
                className="opacity-60 hover:opacity-100"
              >
                {translate(help.name as keyof typeof translate)}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{translate('socials')}</h3>
            {DATA.footer.socials.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                className="opacity-60 hover:opacity-100"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <section className="flex w-full justify-between">
          <h3>
            Copyright
            {` © ${getCurrentYear()} `}
            <Link
              target="_blank"
              href={DATA.social_url.github}
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Kinotio. All rights reserved.
            </Link>
          </h3>

          <Link href={'https://kinotio.instatus.com'}>
            <Badge className="text-sm flex gap-3">
              <span className="bg-green-400 w-3 h-3 rounded-full"></span>
              <span>All systems operational</span>
            </Badge>
          </Link>
        </section>
      </div>
    </footer>
  )
}
