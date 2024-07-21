import { icons } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import BlurFade from '@/components/magicui/blur-fade'

import { DATA } from '@/data'

const BLUR_FADE_DELAY = 0.02

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Features
        </h2>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Makes Us Different
        </h2>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          {`We are thrilled to introduce our open source developer community, a
        vibrant and inclusive hub for innovation, collaboration, and growth.
        Here's what sets us apart and why you should join us`}
        </h3>
      </BlurFade>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {DATA.features.map(({ icon, title, description }, idx) => (
          <BlurFade delay={(BLUR_FADE_DELAY + idx) * 0.1} key={idx}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center h-36">
                <div className="from-primary-200 to-primary-500 p-2 rounded-full ring-8 ring-gradient-to-r mb-4 bg-gradient-to-r from-[#6048e7] to-[#56d49e] ">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
