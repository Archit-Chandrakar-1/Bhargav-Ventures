import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const heading = 'Five Unique Stories. One Bigger Purpose.'
const typingSpeedMs = 55
const pauseAfterTypedMs = 2000

function TypingHeading() {
  const [length, setLength] = useState(0)

  useEffect(() => {
    const delay = length < heading.length ? typingSpeedMs : pauseAfterTypedMs
    const timer = setTimeout(() => {
      setLength((prev) => (prev < heading.length ? prev + 1 : 0))
    }, delay)
    return () => clearTimeout(timer)
  }, [length])

  return (
    <h2
      aria-label={heading}
      className="font-heading text-3xl text-brand-ivory sm:text-4xl lg:text-5xl"
    >
      <span aria-hidden="true">
        {heading.slice(0, length)}
        <span className="animate-caret-blink text-brand-gold">|</span>
      </span>
    </h2>
  )
}

interface Brand {
  name: string
  slug: string
  logo?: string
  tagline: string
  cardClassName: string
  taglineClassName: string
  buttonClassName: string
  logoClassName?: string
  quote?: string
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
    quote: 'Since the 11th century, the samosa has been the universal language of food happiness.',
  },
  {
    name: 'Andey Ki Duniya',
    slug: 'andey-ki-duniya',
    logo: '/assets/Andeykiduniya.png',
    tagline: 'Eggstraordinary everyday',
    cardClassName: 'bg-[#4FA8D8]',
    taglineClassName: 'text-white',
    buttonClassName: 'bg-[#0B2E44] text-[#EAF6FF] hover:bg-[#0B2E44]/90',
    logoClassName: 'scale-[1.3]',
    quote: 'Love and eggs are best when they are fresh.',
  },
  {
    name: 'Doodhwala',
    slug: 'doodhwala',
    logo: '/assets/Doodhwala.png',
    tagline: 'Pure goodness, everyday',
    cardClassName: 'bg-[#F5F1E4]',
    taglineClassName: 'text-[#4A3F2E]',
    buttonClassName: 'bg-[#3F4A2D] text-brand-ivory hover:bg-[#3F4A2D]/90',
    quote: "Every drop tested, every batch trusted — we are the digital era's doodhwala.",
  },
  {
    name: 'Paneerwala',
    slug: 'paneerwala',
    logo: '/assets/Paneerwala.png',
    tagline: 'Fresh, rich and wholesome',
    cardClassName: 'bg-[#B5502E]',
    taglineClassName: 'text-[#FBEAE0]',
    buttonClassName: 'bg-[#6E2F16] text-[#FBEAE0] hover:bg-[#6E2F16]/90',
    quote: "From farm to your family's frying pan — redefining the original, pure paneerwala for the digital home.",
  },
  {
    name: 'Coffee Roasters',
    slug: 'chai-zindagi',
    tagline: 'Warmth in every sip',
    cardClassName: 'bg-[#8B5A2B]',
    taglineClassName: 'text-[#FDF3E7]',
    buttonClassName: 'bg-[#4A2E14] text-[#FDF3E7] hover:bg-[#4A2E14]/90',
    quote:
      'Legend says coffee was discovered when a herder saw his goats dance after tasting the berries — we roast that same spark into every cup.',
  },
  {
    name: "Bhargava's Frozen Food",
    slug: 'bhargavas-frozen-food',
    logo: '/assets/Bhargavas.jpg',
    tagline: 'Frozen fresh, every time',
    cardClassName: 'bg-white',
    taglineClassName: 'text-brand-forest',
    buttonClassName: 'bg-brand-forest text-white hover:bg-brand-forest/90',
    quote:
      "Flash-frozen at its peak, food can lock in more nutrients than 'fresh' produce days into its journey — freshness, paused in time.",
  },
]

// Cards that actually carry a quote — the auto-rotation cycles through these.
const quoteIndices = brands.reduce<number[]>((acc, brand, index) => {
  if (brand.quote) acc.push(index)
  return acc
}, [])

const quoteRotationMs = 3000

export default function OurBrands() {
  const [activeQuote, setActiveQuote] = useState(0)

  useEffect(() => {
    if (quoteIndices.length === 0) return
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quoteIndices.length)
    }, quoteRotationMs)
    return () => clearInterval(timer)
  }, [])

  const activeBrandIndex = quoteIndices[activeQuote]

  return (
    <section className="bg-brand-charcoal py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-brand-gold" />
            <span className="text-xs tracking-[0.2em] text-brand-gold uppercase">Our Brands</span>
          </div>
          <TypingHeading />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {brands.map((brand, index) => {
            const isActive = Boolean(brand.quote) && index === activeBrandIndex
            return (
            <div key={brand.slug} className="group relative">
              <div
                className={`flex flex-col overflow-hidden rounded-2xl ${brand.cardClassName}`}
              >
                <div className="flex h-40 items-center justify-center p-6 sm:h-44">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={`h-full max-h-full w-full object-contain ${brand.logoClassName ?? ''}`}
                    />
                  ) : (
                    <span
                      className={`font-heading text-xl leading-tight ${brand.taglineClassName}`}
                    >
                      {brand.name}
                    </span>
                  )}
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

              {brand.quote && (
                <div
                  className={`pointer-events-none absolute top-full right-0 left-0 z-30 mt-3 transition-all duration-300 ease-out ${
                    isActive
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                  }`}
                >
                  <div className="relative rounded-xl bg-white p-4 shadow-2xl ring-1 ring-brand-gold/25">
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white" />
                    <p className="relative font-heading text-sm text-brand-charcoal italic">
                      &ldquo;{brand.quote}&rdquo;
                    </p>
                  </div>
                </div>
              )}
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
