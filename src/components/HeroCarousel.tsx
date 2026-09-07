import { ArrowRight, Heart, ImageIcon, Leaf, Play, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

interface HeroSlide {
  eyebrow: string
  headlineLine1: string
  headlineLine2: string
  paragraph: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  image?: string
}

const slides: HeroSlide[] = [
  {
    eyebrow: 'A family of food brands',
    headlineLine1: 'Different flavours.',
    headlineLine2: 'One stronger vision.',
    paragraph:
      'Placeholder copy — Bhargava’s Venture builds and grows distinctive food brands across India. Real slide content to follow.',
    primaryCta: { label: 'Explore Our Brands', href: '/our-brands' },
    secondaryCta: { label: 'Our Story', href: '/about' },
    image: '/assets/Carousel-1.png',
  },
  {
    eyebrow: 'Placeholder slide 2',
    headlineLine1: 'Rooted in tradition.',
    headlineLine2: 'Built for tomorrow.',
    paragraph: 'Placeholder copy for the second slide — swap in real content whenever it is ready.',
    primaryCta: { label: 'Explore Our Brands', href: '/our-brands' },
    secondaryCta: { label: 'Our Story', href: '/about' },
  },
  {
    eyebrow: 'Placeholder slide 3',
    headlineLine1: 'Five brands.',
    headlineLine2: 'One bigger family.',
    paragraph: 'Placeholder copy for the third slide — swap in real content whenever it is ready.',
    primaryCta: { label: 'Explore Our Brands', href: '/our-brands' },
    secondaryCta: { label: 'Our Story', href: '/about' },
  },
]

const badges = [
  { icon: Leaf, label: 'Authentic Food Brands' },
  { icon: Users, label: 'Growing Across India' },
  { icon: Heart, label: 'Loved by Millions' },
]

function HeroDots() {
  const { api } = useCarousel()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  if (count <= 1) return null

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            'h-1.5 rounded-full transition-all',
            index === current ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-ivory/30',
          )}
        />
      ))}
    </div>
  )
}

function HeroArrowControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand-ivory ring-1 ring-brand-gold/30 transition-colors hover:bg-brand-ivory/10 disabled:opacity-30"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand-ivory ring-1 ring-brand-gold/30 transition-colors hover:bg-brand-ivory/10 disabled:opacity-30"
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  )
}

export default function HeroCarousel() {
  return (
    <section className="bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Carousel opts={{ loop: true }} className="relative">
          <p className="pointer-events-none absolute top-0 right-0 z-10 hidden text-right font-heading text-sm text-brand-gold/80 italic lg:block">
            Good food.
            <br />
            Brighter people.
          </p>

          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.eyebrow}>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="h-px w-6 bg-brand-gold" />
                      <span className="text-xs tracking-[0.2em] text-brand-gold uppercase">
                        {slide.eyebrow}
                      </span>
                    </div>

                    <h1 className="font-heading text-4xl leading-[1.1] text-brand-ivory sm:text-5xl lg:text-6xl">
                      {slide.headlineLine1}
                      <br />
                      <span className="text-brand-olive">{slide.headlineLine2}</span>
                    </h1>

                    <p className="mt-6 max-w-md text-brand-ivory-muted">{slide.paragraph}</p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button
                        render={<Link to={slide.primaryCta.href} />}
                        nativeButton={false}
                        className="rounded-full bg-brand-gold px-5 text-brand-charcoal hover:bg-brand-gold/90"
                      >
                        {slide.primaryCta.label}
                        <ArrowRight />
                      </Button>

                      <Button
                        render={<Link to={slide.secondaryCta.href} />}
                        nativeButton={false}
                        variant="outline"
                        className="rounded-full border-brand-ivory/25 bg-transparent px-5 text-brand-ivory hover:bg-brand-ivory/10"
                      >
                        <Play className="fill-current" />
                        {slide.secondaryCta.label}
                      </Button>
                    </div>
                  </div>

                  {slide.image ? (
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-brand-gold/15">
                      <img
                        src={slide.image}
                        alt=""
                        className="h-full w-full object-cover object-[75%_center]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-brand-charcoal/20" />
                    </div>
                  ) : (
                    <div className="flex aspect-4/3 items-center justify-center rounded-2xl border border-brand-gold/15 bg-brand-forest/40 lg:aspect-square">
                      <div className="flex flex-col items-center gap-2 text-brand-ivory-muted">
                        <ImageIcon className="h-8 w-8" />
                        <span className="text-xs">Slide image placeholder</span>
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-between">
            <HeroDots />
            <HeroArrowControls />
          </div>
        </Carousel>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-brand-gold/10 pt-8">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5">
              <badge.icon className="h-5 w-5 text-brand-olive" />
              <span className="text-sm text-brand-ivory-muted">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
