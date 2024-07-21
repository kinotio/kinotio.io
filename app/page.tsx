import { BenefitsSection } from '@/components/layout/sections/benefits'
import { FAQSection } from '@/components/layout/sections/faq'
import { FeaturesSection } from '@/components/layout/sections/features'
import { FooterSection } from '@/components/layout/sections/footer'
import { HeroSection } from '@/components/layout/sections/hero'
// import { PartenersSection } from '@/components/layout/sections/parteners'
// import { TestimonialSection } from '@/components/layout/sections/testimonial'
import { ContactSection } from '@/components/layout/sections/contact'
import { ContributorsSection } from '@/components/layout/sections/contributors'
import { ProductsSection } from '@/components/layout/sections/products'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <PartenersSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ProductsSection />
      {/* <TestimonialSection /> */}
      <ContributorsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}
