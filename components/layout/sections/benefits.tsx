import { icons } from 'lucide-react'

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import BlurFade from '@/components/magicui/blur-fade'

import { DATA } from '@/data'

const BLUR_FADE_DELAY = 0.02

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container">
      <div className="py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h2 className="text-lg text-primary mb-2 tracking-wider">
                Benefits
              </h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                For Parteners
              </h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <p className="text-xl text-muted-foreground mb-8">
                By partnering with and sponsoring an open source community,
                organizations can not only drive innovation and efficiency but
                also strengthen their market position and reputation.
              </p>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 w-full">
            {DATA.benefits.map(({ icon, title, description }, idx) => (
              <BlurFade key={idx} delay={(BLUR_FADE_DELAY + idx) * 0.1}>
                <NeonGradientCard
                  neonColors={{
                    firstColor: DATA.color.gradient.from,
                    secondColor: DATA.color.gradient.to,
                  }}
                  className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
                >
                  <CardHeader>
                    <div className="flex justify-between">
                      <Icon
                        name={icon as keyof typeof icons}
                        size={32}
                        color="hsl(var(--primary))"
                        className="mb-6 text-primary"
                      />
                      <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                        0{idx + 1}
                      </span>
                    </div>

                    <CardTitle>{title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground">
                    {description}
                  </CardContent>
                </NeonGradientCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
