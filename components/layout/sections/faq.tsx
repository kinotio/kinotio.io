'use client'

import { memo } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { GradientText } from '@/components/shared/gradient-text'

import { useScopedI18n } from '@/locales/client'

import { DATA } from '@/data'

export const FAQSection = () => {
  const translate = useScopedI18n('faq')

  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {translate('faq')}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {translate('some')}{' '}
          <GradientText>{translate('questions')}</GradientText>
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {DATA.faq.map((faq, idx) => (
          <FAQ key={idx} faq={faq} translate={translate} />
        ))}
      </Accordion>
    </section>
  )
}

const FAQ = memo(
  ({
    faq,
    translate,
  }: {
    faq: {
      question: string
      answer: string
      id: string
    }
    translate: any
  }) => {
    return (
      <AccordionItem value={faq.id}>
        <AccordionTrigger className="text-left">
          {translate(`faqs.${translate(faq.id)}.question`)}
        </AccordionTrigger>
        <AccordionContent>
          {translate(`faqs.${translate(faq.id)}.answer`)}
        </AccordionContent>
      </AccordionItem>
    )
  }
)

FAQ.displayName = 'FAQ'
