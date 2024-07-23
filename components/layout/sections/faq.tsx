'use client'

import { memo } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { GradientText } from '@/components/shared/gradient-text'

import { DATA } from '@/data'

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common <GradientText>Questions</GradientText>
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {DATA.faq.map((faq, idx) => (
          <FAQ key={idx} faq={faq} />
        ))}
      </Accordion>
    </section>
  )
}

const FAQ = memo(
  ({
    faq,
  }: {
    faq: {
      question: string
      answer: string
      value: string
    }
  }) => {
    return (
      <AccordionItem value={faq.value}>
        <AccordionTrigger className="text-left">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </AccordionItem>
    )
  }
)

FAQ.displayName = 'FAQ'
