import { ArrowRight, Heart, ImageIcon, Leaf, Play, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface HeroContent {
  eyebrow: string
  headlineLine1: string
  headlineLine2: string
  paragraph: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  image?: string
  video?: string
}

const heroContent: HeroContent = {
  eyebrow: 'A family of food brands',
  headlineLine1: 'Different flavours.',
  headlineLine2: 'One stronger vision.',
  paragraph:
    'Placeholder copy — Bhargava’s Venture builds and grows distinctive food brands across India. Real content to follow.',
  primaryCta: { label: 'Explore Our Brands', href: '/our-brands' },
  secondaryCta: { label: 'Our Story', href: '/about' },
  // image: '/assets/Carousel-1.png',
  video: '/assets/Carousel.mp4',
}

const badges = [
  { icon: Leaf, label: 'Authentic Food Brands' },
  { icon: Users, label: 'Growing Across India' },
  { icon: Heart, label: 'Loved by Millions' },
]

export default function Hero() {
  return (
    <section className="relative bg-brand-charcoal">
      <div className="relative flex aspect-4/3 items-center sm:aspect-video lg:aspect-auto lg:min-h-[calc(100svh-5rem)]">
        {heroContent.video ? (
          <>
            <video
              src={heroContent.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover object-[70%_55%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-brand-charcoal/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
          </>
        ) : heroContent.image ? (
          <>
            {/* <img
              src={heroContent.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[70%_55%]"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-brand-charcoal/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-forest/40">
            <div className="flex flex-col items-center gap-2 text-brand-ivory-muted">
              <ImageIcon className="h-8 w-8" />
              <span className="text-xs">Hero image placeholder</span>
            </div>
          </div>
        )}

        <div className="relative z-10 w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-6 bg-brand-gold" />
                <span className="text-xs tracking-[0.2em] text-brand-gold uppercase">
                  {heroContent.eyebrow}
                </span>
              </div>

              <h1 className="font-heading text-4xl leading-[1.1] text-brand-ivory sm:text-5xl lg:text-6xl">
                {heroContent.headlineLine1}
                <br />
                <span className="text-brand-olive">{heroContent.headlineLine2}</span>
              </h1>

              <p className="mt-6 max-w-md text-brand-ivory-muted">{heroContent.paragraph}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  render={<Link to={heroContent.primaryCta.href} />}
                  nativeButton={false}
                  className="rounded-full bg-brand-gold px-5 text-brand-charcoal hover:bg-brand-gold/90"
                >
                  {heroContent.primaryCta.label}
                  <ArrowRight />
                </Button>

                <Button
                  render={<Link to={heroContent.secondaryCta.href} />}
                  nativeButton={false}
                  variant="outline"
                  className="rounded-full border-brand-ivory/25 bg-transparent px-5 text-brand-ivory hover:bg-brand-ivory/10"
                >
                  <Play className="fill-current" />
                  {heroContent.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <p className="pointer-events-none absolute top-6 right-6 z-10 hidden text-right font-heading text-sm text-brand-gold/80 italic lg:block">
          Good food.
          <br />
          Brighter people.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 border-t border-brand-gold/10 px-4 py-8 sm:px-6 lg:px-8">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2.5">
            <badge.icon className="h-5 w-5 text-brand-olive" />
            <span className="text-sm text-brand-ivory-muted">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
