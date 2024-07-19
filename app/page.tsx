import { BenefitsSection } from '@/components/layout/sections/benefits'
import { FAQSection } from '@/components/layout/sections/faq'
import { FeaturesSection } from '@/components/layout/sections/features'
import { FooterSection } from '@/components/layout/sections/footer'
import { HeroSection } from '@/components/layout/sections/hero'
import { PartenersSection } from '@/components/layout/sections/parteners'
import { PricingSection } from '@/components/layout/sections/pricing'
import { ServicesSection } from '@/components/layout/sections/services'
import { TestimonialSection } from '@/components/layout/sections/testimonial'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartenersSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  )
}
