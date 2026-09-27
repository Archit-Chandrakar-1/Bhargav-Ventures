import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const logoImg = '/assets/Bhargavas.jpg'

/**
 * The Bhargava's Frozen Food hero.
 * mode="page": full hero at the top of the brand page.
 * mode="preview": shorter, with an Explore link to the full brand page (for the home carousel).
 */
export function FrozenFoodHero({ mode = 'page' }: { mode?: 'page' | 'preview' }) {
  const preview = mode === 'preview'

  return (
    <section className={`relative overflow-hidden px-6 ${preview ? 'pb-16 pt-12' : 'pb-32 pt-24'}`}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
        <img src={logoImg} alt="" aria-hidden className="size-[600px] object-contain" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="fade-up mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-sage">
          Est. by Bhargava Ventures
        </span>
        <h1 className="fade-up mb-8 font-display text-5xl italic leading-[1.1] text-balance [animation-delay:100ms] md:text-7xl">
          A Legacy of Taste,
          <br />
          <span className="text-sage">Preserved for Tomorrow.</span>
        </h1>
        <p className="fade-up mx-auto max-w-xl text-lg leading-relaxed text-sage/80 [animation-delay:200ms]">
          Bhargava's Frozen Food invites you to carry forward a heritage of culinary excellence. Our
          FOCO model ensures your investment is protected by our operational mastery.
        </p>
        {preview && (
          <Link
            to="/brands/bhargavas-frozen-food"
            className="fade-up mt-9 inline-flex items-center gap-2 rounded-full bg-sage px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors [animation-delay:300ms] hover:bg-clay"
          >
            Explore
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </section>
  )
}
