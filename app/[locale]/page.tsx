import { BenefitsSection } from '@/components/layout/sections/benefits'
import { FAQSection } from '@/components/layout/sections/faq'
import { FeaturesSection } from '@/components/layout/sections/features'
import { FooterSection } from '@/components/shared/footer'
import { HeroSection } from '@/components/layout/sections/hero'
// import { PartenersSection } from '@/components/layout/sections/parteners'
// import { TestimonialSection } from '@/components/layout/sections/testimonial'
import { ContactSection } from '@/components/layout/sections/contact'
import { ContributorsSection } from '@/components/layout/sections/contributors'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <PartenersSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      {/* <TestimonialSection /> */}
      <ContributorsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}
