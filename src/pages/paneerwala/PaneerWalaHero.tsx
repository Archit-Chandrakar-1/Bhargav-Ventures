import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroImage = '/assets/paneerwala/hero.jpg'

/**
 * The Paneer Wala hero section.
 * mode="page": matches the live brand page (no CTA here; the page's own CTA lives at #enquire).
 * mode="preview": adds an Explore link to the full brand page (for the home carousel).
 */
export function PaneerWalaHero({ mode = 'page' }: { mode?: 'page' | 'preview' }) {
  const preview = mode === 'preview'
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-20">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent px-3 py-1 text-sm font-medium text-accent">
          <span className="size-2 rounded-full bg-accent" /> Pure Veg · A Bhargav Ventures brand
        </p>
        <h1 className="font-display text-5xl leading-[1.05] font-extrabold md:text-6xl">
          Fresh paneer.
          <br />
          <span className="text-primary">Your territory.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-muted-foreground">
          Join the Paneer Wala trading dealership — district and block-wise rights for supply
          chain and HoReCa distribution.
        </p>
        <div className="mt-8 flex gap-6 text-sm">
          <div>
            <p className="font-display text-3xl font-bold">3</p>pack sizes
          </div>
          <div>
            <p className="font-display text-3xl font-bold">B2B</p>&amp; HoReCa
          </div>
          <div>
            <p className="font-display text-3xl font-bold">₹</p>salesman incentives
          </div>
        </div>
        {preview && (
          <Link
            to="/brands/paneerwala"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-base"
          >
            Explore <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
      <img
        src={heroImage}
        alt="Fresh paneer cubes with a clay pot of milk"
        width={1280}
        height={1024}
        className="rounded-3xl shadow-[var(--shadow-soft)]"
      />
    </section>
  )
}
