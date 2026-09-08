import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface Brand {
  name: string
  slug: string
  logo: string
  tagline: string
  cardClassName: string
  taglineClassName: string
  buttonClassName: string
}

const brands: Brand[] = [
  {
    name: 'Samosa King',
    slug: 'samosa-king',
    logo: '/assets/SamosaKing.png',
    tagline: 'Crispy happiness, always',
    cardClassName: 'bg-[#F6B93B]',
    taglineClassName: 'text-[#3D2B12]',
    buttonClassName: 'bg-[#3D2B12] text-[#F6B93B] hover:bg-[#3D2B12]/90',
  },
  {
    name: 'Andey Ki Duniya',
    slug: 'andey-ki-duniya',
    logo: '/assets/Andeykiduniya.png',
    tagline: 'Eggstraordinary everyday',
    cardClassName: 'bg-[#FFC93C]',
    taglineClassName: 'text-[#1A1A1A]',
    buttonClassName: 'bg-[#1A1A1A] text-[#FFC93C] hover:bg-[#1A1A1A]/90',
  },
  {
    name: 'Cafe Cochin',
    slug: 'cafe-cochin',
    logo: '/assets/CafeCochin.png',
    tagline: 'Flavours without borders',
    cardClassName: 'bg-[#3F4A2D]',
    taglineClassName: 'text-[#E4E8D8]',
    buttonClassName: 'bg-[#2A331F] text-brand-ivory hover:bg-[#2A331F]/90',
  },
  {
    name: 'Doodhwala',
    slug: 'doodhwala',
    logo: '/assets/Doodhwala.png',
    tagline: 'Pure goodness, everyday',
    cardClassName: 'bg-[#F5F1E4]',
    taglineClassName: 'text-[#4A3F2E]',
    buttonClassName: 'bg-[#3F4A2D] text-brand-ivory hover:bg-[#3F4A2D]/90',
  },
  {
    name: 'Paneerwala',
    slug: 'paneerwala',
    logo: '/assets/Paneerwala.png',
    tagline: 'Fresh, rich and wholesome',
    cardClassName: 'bg-[#B5502E]',
    taglineClassName: 'text-[#FBEAE0]',
    buttonClassName: 'bg-[#6E2F16] text-[#FBEAE0] hover:bg-[#6E2F16]/90',
  },
]

export default function OurBrands() {
  return (
    <section className="bg-brand-charcoal py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-brand-gold" />
            <span className="text-xs tracking-[0.2em] text-brand-gold uppercase">Our Brands</span>
          </div>
          <h2 className="font-heading text-3xl text-brand-ivory sm:text-4xl lg:text-5xl">
            Five Unique Stories. One Bigger Purpose.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.slug}
              className={`flex flex-col overflow-hidden rounded-2xl ${brand.cardClassName}`}
            >
              <div className="flex h-40 items-center justify-center p-6 sm:h-44">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full max-h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col items-center gap-4 px-5 pb-6 text-center">
                <p className={`text-sm font-medium ${brand.taglineClassName}`}>{brand.tagline}</p>

                <Button
                  render={<Link to={`/brands/${brand.slug}`} />}
                  nativeButton={false}
                  className={`mt-auto w-full rounded-full ${brand.buttonClassName}`}
                >
                  Explore
                  <ArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
