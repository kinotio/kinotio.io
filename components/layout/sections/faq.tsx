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

export const FAQSection = memo(() => {
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

      <Accordion type="single" collapsible>
        {DATA.faq.map((faq, idx) => (
          <AccordionItem key={idx} value={faq.id}>
            <AccordionTrigger className="text-left">
              {translate(
                `faqs.${translate(
                  faq.id as keyof typeof translate
                )}.question` as keyof typeof translate
              )}
            </AccordionTrigger>
            <AccordionContent>
              {translate(
                `faqs.${translate(
                  faq.id as keyof typeof translate
                )}.answer` as keyof typeof translate
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
})

FAQSection.displayName = 'FAQSection'
