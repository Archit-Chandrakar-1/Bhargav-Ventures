import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spices } from './Spices'

const logo = '/assets/SamosaKing.png'

/**
 * The Samosa King hero.
 * mode="page": full-height hero, the CTA scrolls to the page's franchise section.
 * mode="preview": content height, the CTA links to the full brand page (for the home carousel).
 */
export function Hero({ mode = 'page' }: { mode?: 'page' | 'preview' }) {
  const preview = mode === 'preview'
  const [y, setY] = useState(0)

  useEffect(() => {
    const onScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`relative isolate flex flex-col overflow-hidden px-5 pb-10 ${
        preview ? 'pt-12' : 'min-h-[100svh] pt-24'
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-fry)' }}
      />
      <Spices />

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: brand logo */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-full blur-3xl"
              style={{ background: 'color-mix(in oklab, var(--gold) 30%, transparent)' }}
            />
            <div
              aria-hidden
              className="animate-spin-slow absolute -inset-5 rounded-full border border-dashed border-primary/30"
            />
            <img
              src={logo}
              alt="Samosa King logo"
              className="animate-bob relative w-52 drop-shadow-2xl sm:w-72 lg:w-[30rem]"
              style={{ transform: `translateY(${y * -0.05}px)` }}
            />
          </div>
        </div>

        {/* Right: content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="animate-fade-in text-xs font-semibold tracking-[0.42em] text-primary uppercase">
            Est. on the street · Hot since forever
          </p>

          <h1 className="animate-shimmer mt-4 text-6xl leading-[0.9] font-extrabold sm:text-7xl lg:text-8xl">
            <span className="block text-cream">Samosa</span>
            <span className="text-gradient-gold block">King</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            Hand-folded, fresh-fried, dangerously crunchy. The crown belongs to the triangle.
          </p>

          {preview ? (
            <Link
              to="/brands/samosa-king"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-transform duration-200 hover:scale-105"
              style={{ backgroundImage: 'var(--gradient-crust)' }}
            >
              View the franchise
            </Link>
          ) : (
            <a
              href="#franchise"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-transform duration-200 hover:scale-105"
              style={{ backgroundImage: 'var(--gradient-crust)' }}
            >
              View the franchise
            </a>
          )}
        </div>
      </div>

      <div
        aria-hidden
        className="mt-8 w-full overflow-hidden border-y border-border/60 py-3"
      >
        <div className="animate-marquee flex w-max gap-10 text-sm font-semibold tracking-[0.3em] text-primary/70 uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Crispy</span>
              <span>◆</span>
              <span>Fresh Fried</span>
              <span>◆</span>
              <span>Chai Ready</span>
              <span>◆</span>
              <span>Chutney Loaded</span>
              <span>◆</span>
              <span>Crispy</span>
              <span>◆</span>
              <span>Fresh Fried</span>
              <span>◆</span>
              <span>Chai Ready</span>
              <span>◆</span>
              <span>Chutney Loaded</span>
              <span>◆</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
