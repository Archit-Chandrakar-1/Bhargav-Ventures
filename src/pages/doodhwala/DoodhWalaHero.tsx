import { ArrowDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/pages/doodhwala/Button'

const outletImage = '/assets/doodhwala/doodhwala-outlet.jpg'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * The Doodh Wala hero section.
 * mode="page": the CTAs scroll to the page's own sections.
 * mode="preview": the CTAs link to the full brand page (for the home carousel).
 */
export function DoodhWalaHero({ mode = 'page' }: { mode?: 'page' | 'preview' }) {
  const preview = mode === 'preview'
  const navigate = useNavigate()
  const onPrimary = preview ? () => navigate('/brands/doodhwala') : () => scrollTo('investment')
  const onSecondary = preview ? () => navigate('/brands/doodhwala') : () => scrollTo('support')

  return (
    <section id="top" className="relative px-5 pt-12 pb-20 sm:px-8 md:pt-16 md:pb-28">
      <div className="pointer-events-none absolute top-28 left-[8%] h-28 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_450px]">
        <div className="animate-reveal">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            <span className="h-px w-8 bg-accent" /> A Bhargava Ventures franchise
          </p>
          <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
            Doodh Wala
            <span className="mt-2 block text-accent">Modern Dairy Retail</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Build a neighbourhood dairy destination with a complete retail outlet, dedicated
            processing setup and the support of Bhargava Ventures.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button onClick={onPrimary}>
              Explore the investment <ArrowDown className="size-4" />
            </Button>
            <Button variant="outline" onClick={onSecondary}>
              See what is included
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3">
            <div className="fact-tile">
              <span className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                1,500–2,000
              </span>
              <span className="mt-2 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Sq ft outlet
              </span>
            </div>
            <div className="fact-tile">
              <span className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                40–50 ft
              </span>
              <span className="mt-2 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Recommended frontage
              </span>
            </div>
          </div>
        </div>

        <div className="animate-reveal-delayed relative">
          <div className="overflow-hidden rounded-xl bg-secondary shadow-hero">
            <img
              src={outletImage}
              alt="Concept for a modern Doodh Wala dairy retail outlet"
              width={912}
              height={1200}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 left-4 rounded-lg border border-border bg-background p-5 shadow-float sm:-left-7 sm:p-6">
            <span className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase">
              Retail outlet investment
            </span>
            <p className="mt-1 font-heading text-3xl font-semibold">₹25 lakh</p>
            <p className="mt-1 text-xs text-muted-foreground">Including interiors &amp; equipment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
