import { ArrowDown, BadgeIndianRupee } from 'lucide-react'
import { Link } from 'react-router-dom'

const brandLogo = '/assets/Andeykiduniya.png'

const btnBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0'

function EggCharacter() {
  return (
    <div className="relative mx-auto h-56 w-48 sm:h-80 lg:h-96 lg:w-80" aria-hidden="true">
      <div className="yolk-drift absolute top-9 right-1 h-16 w-16 rounded-full bg-brand/30" />
      <div className="egg-bob absolute inset-x-5 top-0 h-[85%] rounded-[50%_50%_46%_46%/58%_58%_42%_42%] border border-brand/25 bg-eggshell shadow-2xl">
        <div className="absolute top-[43%] left-[26%] h-3 w-3 rounded-full bg-ink" />
        <div className="absolute top-[43%] right-[26%] h-3 w-3 rounded-full bg-ink" />
        <div className="absolute top-[53%] left-1/2 h-7 w-12 -translate-x-1/2 rounded-b-full border-b-4 border-ink" />
        <div className="absolute bottom-[9%] left-1/2 h-24 w-28 -translate-x-1/2 rotate-3 rounded-[48%_52%_58%_42%] bg-brand shadow-inner" />
        <div className="absolute bottom-[23%] left-[24%] h-4 w-9 rounded-full bg-brand/30 blur-sm" />
        <div className="absolute right-[24%] bottom-[23%] h-4 w-9 rounded-full bg-brand/30 blur-sm" />
      </div>
      <div className="egg-shadow absolute bottom-5 left-1/2 h-5 w-44 -translate-x-1/2 rounded-full bg-ink" />
    </div>
  )
}

/**
 * The Ande Ki Duniya hero section.
 * mode="page": the CTAs scroll to the page's own sections.
 * mode="preview": the CTAs link to the full brand page (for the home carousel).
 */
export function AndeyHero({ mode = 'page' }: { mode?: 'page' | 'preview' }) {
  const preview = mode === 'preview'
  const primaryBtn = `${btnBase} h-12 bg-brand px-6 text-base text-brand-foreground shadow-brand hover:bg-brand-strong`
  const secondaryBtn = `${btnBase} h-12 border border-ink/20 bg-transparent px-6 text-base hover:bg-yolk-soft`

  return (
    <section className="relative isolate border-b border-ink/10 px-5 pt-8 pb-8 sm:px-8 sm:pt-10 sm:pb-12 lg:px-12 lg:pt-14 lg:pb-16">
      <div className="absolute top-12 -left-12 -z-10 h-40 w-40 rounded-full border-[24px] border-brand/15 sm:top-20 sm:-left-16 sm:h-56 sm:w-56 sm:border-[36px]" />
      <div className="absolute -right-6 bottom-6 -z-10 h-24 w-24 rounded-full bg-yolk-soft sm:-right-10 sm:bottom-10 sm:h-36 sm:w-36" />
      <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-in max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-background/70 px-4 py-2 text-xs font-bold tracking-widest uppercase">
            <span className="size-2 rounded-full bg-brand" />
            FOCO franchise opportunity
          </p>
          <img src={brandLogo} alt="Ande Ki Duniya" className="mb-7 w-full max-w-xl object-contain" />
          <h1 className="font-display text-5xl leading-[0.95] font-extrabold sm:text-6xl lg:text-7xl">
            Crack into a <span className="text-brand-strong">ready-to-grow</span> food business.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
            A compact, operations-led outlet model designed for entrepreneurs who want a distinctive
            egg-focused brand with the essentials already planned.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {preview ? (
              <>
                <Link to="/brands/andey-ki-duniya" className={primaryBtn}>
                  <BadgeIndianRupee /> View investment
                </Link>
                <Link to="/brands/andey-ki-duniya" className={secondaryBtn}>
                  What&apos;s included <ArrowDown />
                </Link>
              </>
            ) : (
              <>
                <a href="#investment" className={primaryBtn}>
                  <BadgeIndianRupee /> View investment
                </a>
                <a href="#included" className={secondaryBtn}>
                  What&apos;s included <ArrowDown />
                </a>
              </>
            )}
          </div>
        </div>
        <div className="relative hidden min-h-[500px] items-center justify-center lg:flex">
          <EggCharacter />
          <div className="absolute bottom-2 left-0 rounded-md border border-ink/10 bg-background/90 p-4 shadow-lg sm:left-10">
            <p className="text-xs font-bold text-ink/55 uppercase">Investment range</p>
            <p className="font-display text-3xl font-extrabold">₹11–13 lakh</p>
            <p className="text-xs text-ink/55">GST included</p>
          </div>
        </div>
      </div>
    </section>
  )
}
