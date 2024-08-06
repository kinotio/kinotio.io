'use client'

import { memo } from 'react'
import { icons } from 'lucide-react'

import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { GradientText } from '@/components/shared/gradient-text'

import { useScopedI18n } from '@/locales/client'

import { DATA } from '@/data'

export const BenefitsSection = () => {
  const translate = useScopedI18n('benefits')

  return (
    <section id="benefits" className="container">
      <div className="py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              {translate('benefits')}
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {translate('for')}{' '}
              <GradientText>{translate('parteners')}</GradientText>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              {translate('description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 w-full">
            {DATA.benefits.map((benefit, idx) => (
              <BenefitCard
                key={idx}
                idx={idx}
                benefit={benefit}
                translate={translate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const BenefitCard = memo(
  ({
    idx,
    benefit,
    translate,
  }: {
    idx: number
    benefit: { icon: string; name: string }
    translate: any
  }) => {
    return (
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
              name={benefit.icon as keyof typeof icons}
              size={32}
              color="hsl(var(--primary))"
              className="mb-6 text-primary"
            />
            <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
              0{idx + 1}
            </span>
          </div>

          <CardTitle>{translate(`${benefit.name}.title`)}</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground">
          {translate(`${benefit.name}.description`)}
        </CardContent>
      </NeonGradientCard>
    )
  }
)

BenefitCard.displayName = 'BenefitCard'
