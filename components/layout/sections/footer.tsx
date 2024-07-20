'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { icons } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Icon } from '@/components/ui/icon'
import ShineBorder from '@/components/magicui/shine-border'

import { getCurrentYear } from '@/lib/utils'

import { DATA } from '@/data'

export const FooterSection = () => {
  const { theme } = useTheme()

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <ShineBorder
        className="p-10 bg-card border border-secondary rounded-2xl w-full place-items-stretch"
        color={[DATA.color.gradient.from, DATA.color.gradient.to]}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <Image
                src={
                  theme === 'light'
                    ? '/images/logo-dark.png'
                    : '/images/logo-light.png'
                }
                width={100}
                height={100}
                alt="Kinotio"
                className="ml-2"
                priority={true}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            {DATA.footer.contact.map((contact) => (
              <Link
                key={contact.label}
                href={contact.href}
                className="flex gap-2 items-center opacity-60 hover:opacity-100"
              >
                <Icon
                  name={contact.icon as keyof typeof icons}
                  size={18}
                  color={theme === 'light' ? 'black' : 'white'}
                />
                {contact.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            {DATA.footer.help.map((help) => (
              <Link
                key={help.label}
                href={help.href}
                className="opacity-60 hover:opacity-100"
              >
                {help.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            {DATA.footer.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="opacity-60 hover:opacity-100"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            {` © ${getCurrentYear()} `}
            <Link
              target="_blank"
              href={DATA.url.github}
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Kinotio
            </Link>
          </h3>
        </section>
      </ShineBorder>
    </footer>
  )
}
