'use client'

import { icons } from 'lucide-react'
import { Marquee } from '@devnomic/marquee'
import { useTheme } from 'next-themes'

import { Icon } from '@/components/ui/icon'

import { DATA } from '@/data'

export const CompaniesSection = () => {
  const { theme } = useTheme()

  return (
    <section id="parteners" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">Trusted by</h2>

      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]">
          {DATA.partners.map(({ icon, name }, idx) => (
            <div
              key={idx}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color={theme === 'dark' ? 'white' : 'black'}
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
