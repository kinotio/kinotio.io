'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

import Particles from '@/components/magicui/particles'
import BlurFade from '@/components/magicui/blur-fade'

import { GradientText } from '@/components/shared/gradient-text'
import { Contributors } from '@/components/shared/contributors'

import { useScopedI18n } from '@/locales/client'

import { DATA } from '@/data'

const BLUR_FADE_DELAY = 0.02

export const HeroSection = () => {
  const { theme } = useTheme()
  const translate = useScopedI18n('hero')

  const [color, setColor] = useState(DATA.color.base.light)

  useEffect(() => {
    setColor(theme === 'dark' ? DATA.color.base.light : DATA.color.base.dark)
  }, [theme])

  return (
    <section
      id="hero"
      className="container w-full lg:min-h-[65vh] md:min-h-[65vh] relative"
    >
      <div className="relative grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 z-10">
        <div className="text-center space-y-8">
          <div className="max-w-screen-lg mx-auto text-center ">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="text-4xl md:text-7xl font-bold">
                {translate('title')}{' '}
                <GradientText>{translate('openly')}</GradientText>
              </h1>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              {translate('description')}
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button
                className="cursor-pointer w-5/6 md:w-1/4 font-bold group/arrow"
                onClick={() => window.open(DATA.typeform, '__blank')}
              >
                {translate('join')}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <Contributors />
        </BlurFade>
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </section>
  )
}
