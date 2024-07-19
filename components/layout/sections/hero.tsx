'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import Particles from '@/components/magicui/particles'

import { DATA } from '@/data'

export const HeroSection = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState(DATA.color.base.light)

  useEffect(() => {
    setColor(theme === 'dark' ? DATA.color.base.light : DATA.color.base.dark)
  }, [theme])

  return (
    <section className="container w-full lg:min-h-[65vh] md:min-h-[65vh]">
      <div className="relative grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 z-50">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Imagine, Develop and Share
              <span className="text-transparent px-2 bg-gradient-to-r from-[#6048e7] to-[#56d49e] bg-clip-text">
                Openly
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Collaborative digital space where software, applications, or projects are developed and shared openly.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              className="cursor-pointer w-5/6 md:w-1/4 font-bold group/arrow"
              onClick={() => window.open(DATA.typeform, '__blank')}
            >
              Join us
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
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
