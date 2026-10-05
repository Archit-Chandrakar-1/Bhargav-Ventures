import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EnquiryButton } from '@/components/EnquiryModal'
import { AndeyHero } from '@/pages/andey-ki-duniya/AndeyHero'
import { FrozenFoodHero } from '@/pages/bhargavas-frozen-food/FrozenFoodHero'
import { DoodhWalaHero } from '@/pages/doodhwala/DoodhWalaHero'
import { PaneerWalaHero } from '@/pages/paneerwala/PaneerWalaHero'
import { Hero as SamosaHero } from '@/pages/samosa-king/Hero'

interface BrandSlide {
  name: string
  tagline: string
  logo?: string
  logoClassName?: string
  cardClassName: string
  textClassName: string
  buttonClassName: string
  /** Set only for brands that have a live page. */
  to?: string
  /** Renders the brand's own hero section instead of the simple card. */
  custom?: 'andey' | 'samosa' | 'doodhwala' | 'frozen' | 'paneerwala'
}

const slides: BrandSlide[] = [
  {
    name: 'Samosa King',
    tagline: 'Crispy happiness, always',
    cardClassName: 'bg-background',
    textClassName: 'text-foreground',
    buttonClassName: '',
    to: '/brands/samosa-king',
    custom: 'samosa',
  },
  {
    name: 'Andey Ki Duniya',
    tagline: 'Eggstraordinary everyday',
    cardClassName: 'bg-eggshell',
    textClassName: 'text-ink',
    buttonClassName: '',
    to: '/brands/andey-ki-duniya',
    custom: 'andey',
  },
  {
    name: 'Doodhwala',
    tagline: 'Pure goodness, everyday',
    cardClassName: 'bg-background',
    textClassName: 'text-foreground',
    buttonClassName: '',
    to: '/brands/doodhwala',
    custom: 'doodhwala',
  },
  {
    name: 'Paneerwala',
    tagline: 'Fresh, rich and wholesome',
    cardClassName: 'bg-background',
    textClassName: 'text-foreground',
    buttonClassName: '',
    to: '/brands/paneerwala',
    custom: 'paneerwala',
  },
  {
    name: "Bhargava's Frozen Food",
    tagline: 'Frozen fresh, every time',
    cardClassName: 'bg-background',
    textClassName: 'text-foreground',
    buttonClassName: '',
    to: '/brands/bhargavas-frozen-food',
    custom: 'frozen',
  },
]

const autoplayMs = 4500

export default function PhotoCarousel() {
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, autoplayMs)
    return () => clearInterval(timer)
  }, [isHovering])

  function goTo(next: number) {
    setIndex((next + slides.length) % slides.length)
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-brand-charcoal"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex items-stretch transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) =>
          slide.custom === 'andey' ? (
            <div key={slide.name} className="andey-ki-duniya w-full shrink-0 bg-eggshell text-ink">
              <AndeyHero mode="preview" />
            </div>
          ) : slide.custom === 'samosa' ? (
            <div key={slide.name} className="samosa-king w-full shrink-0 bg-background text-foreground">
              <SamosaHero mode="preview" />
            </div>
          ) : slide.custom === 'doodhwala' ? (
            <div
              key={slide.name}
              className="doodhwala flex w-full shrink-0 items-center bg-background text-foreground"
            >
              <div className="w-full">
                <DoodhWalaHero mode="preview" />
              </div>
            </div>
          ) : slide.custom === 'frozen' ? (
            <div
              key={slide.name}
              className="bhargavas-frozen-food flex w-full shrink-0 items-center bg-background text-foreground"
            >
              <div className="w-full">
                <FrozenFoodHero mode="preview" />
              </div>
            </div>
          ) : slide.custom === 'paneerwala' ? (
            <div
              key={slide.name}
              className="paneerwala flex w-full shrink-0 items-center bg-background text-foreground"
            >
              <div className="w-full">
                <PaneerWalaHero mode="preview" />
              </div>
            </div>
          ) : (
          <div
            key={slide.name}
            className={`flex w-full shrink-0 flex-col items-center justify-center gap-5 px-6 py-12 text-center sm:gap-7 ${slide.cardClassName}`}
          >
            {slide.logo ? (
              <img
                src={slide.logo}
                alt={slide.name}
                className={`h-28 w-28 object-contain sm:h-44 sm:w-44 lg:h-52 lg:w-52 ${slide.logoClassName ?? ''}`}
              />
            ) : (
              <span className={`font-heading text-4xl sm:text-6xl lg:text-7xl ${slide.textClassName}`}>
                {slide.name}
              </span>
            )}

            <p className={`text-base font-medium sm:text-xl ${slide.textClassName} opacity-90`}>
              {slide.tagline}
            </p>

            {slide.to ? (
              <Link
                to={slide.to}
                className={`mt-1 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:text-base ${slide.buttonClassName}`}
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span
                className={`mt-1 rounded-full border border-current px-5 py-2 text-xs font-medium sm:text-sm ${slide.textClassName} opacity-70`}
              >
                Coming soon
              </span>
            )}
          </div>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous brand"
        className="absolute top-1/2 left-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-charcoal/60 text-brand-ivory ring-1 ring-brand-gold/30 backdrop-blur transition-colors hover:bg-brand-charcoal/80 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next brand"
        className="absolute top-1/2 right-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-charcoal/60 text-brand-ivory ring-1 ring-brand-gold/30 backdrop-blur transition-colors hover:bg-brand-charcoal/80 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <EnquiryButton className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 text-base font-bold text-brand-gold transition-opacity hover:opacity-80 sm:text-lg" />

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.name}
            type="button"
            onClick={() => goTo(slideIndex)}
            aria-label={`Go to ${slide.name}`}
            className={`h-2.5 rounded-full ring-1 ring-brand-charcoal/20 transition-all ${
              slideIndex === index ? 'w-6 bg-brand-gold' : 'w-2.5 bg-brand-charcoal/40 hover:bg-brand-charcoal/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
