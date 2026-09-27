import Compliance from '@/components/Compliance'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import HowToOrder from '@/components/HowToOrder'
import OurBrands from '@/components/OurBrands'
import OurPromises from '@/components/OurPromises'
import PhotoCarousel from '@/components/PhotoCarousel'

export default function Home() {
  return (
    <main>
      {/* 1. Hero — who Bhargava's Venture is */}
      <Hero />
      {/* 2. Our Brands — the portfolio of five unique stories */}
      <OurBrands />
      {/* 3. Brand visual showcase — proof of the brands */}
      <PhotoCarousel />
      {/* 4 & 5. Quality Promise (5-step) + Quality at the Source, brand by brand */}
      <OurPromises />
      {/* 6. Compliance — registered & compliant at every step */}
      <Compliance />
      {/* 7. Next step / contact (interim; dedicated Franchise CTA to follow) */}
      <HowToOrder />
      {/* 8. FAQ — franchise questions + WhatsApp */}
      <Faq />
      {/* 9. Footer lives in PublicLayout, rendered after this main */}
    </main>
  )
}
