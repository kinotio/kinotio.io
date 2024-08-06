'use client'

import { memo } from 'react'
import { icons } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { GradientText } from '@/components/shared/gradient-text'

import { useScopedI18n } from '@/locales/client'

import { DATA } from '@/data'

export const FeaturesSection = () => {
  const translate = useScopedI18n('features')

  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {translate('features')}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {translate('what')} <GradientText>{translate('make_us')}</GradientText>{' '}
        {translate('different')}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {translate('description')}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {DATA.features.map((feature, idx) => (
          <FeatureCard key={idx} feature={feature} translate={translate} />
        ))}
      </div>
    </section>
  )
}

const FeatureCard = memo(
  ({
    feature,
    translate,
  }: {
    feature: { icon: string; name: string }
    translate: any
  }) => {
    return (
      <Card className="h-full bg-background border-0 shadow-none">
        <CardHeader className="flex justify-center items-center h-36">
          <div className="from-primary-200 to-primary-500 p-2 rounded-full ring-8 ring-gradient-to-r mb-4 bg-gradient-to-r from-[#6048e7] to-[#56d49e] ">
            <Icon
              name={feature.icon as keyof typeof icons}
              size={24}
              className="text-primary dark:text-white"
            />
          </div>
          <CardTitle>{translate(`${feature.name}.title`)}</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-center">
          {translate(`${feature.name}.description`)}
        </CardContent>
      </Card>
    )
  }
)

FeatureCard.displayName = 'FeatureCard'
