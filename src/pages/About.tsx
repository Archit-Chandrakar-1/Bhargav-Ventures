import { AboutHero } from '@/pages/about/AboutHero'

const brands = [
  { logo: '/assets/Bhargavas.jpg', name: "Bhargava's", tagline: 'The house brand', category: 'Flagship' },
  {
    logo: '/assets/Paneerwala.png',
    name: 'Paneer Wala',
    tagline: 'Pure veg. Fresh paneer, every day',
    category: 'Fresh paneer',
  },
  {
    logo: '/assets/SamosaKing.png',
    name: 'Samosa King',
    tagline: 'The royalty of taste',
    category: 'Snacks',
  },
]

const focoSteps = [
  {
    step: '01',
    title: 'You invest',
    body: 'A franchise partner puts in the capital for the outlet. Your money buys the store — not overheads, not guesswork.',
  },
  {
    step: '02',
    title: 'We build & operate',
    body: 'Bhargava Venture sets up the outlet, staffs it, runs daily operations and keeps quality identical across every location.',
  },
  {
    step: '03',
    title: 'You earn',
    body: 'Because the company operates the outlet, partners share in the revenue without running it. Ownership without the workload.',
  },
]

const stats = [
  { value: '10+', label: 'Years of operating experience' },
  { value: 'FOCO', label: 'Franchise Owned, Company Operated' },
  { value: '3', label: 'Brands in the family today' },
  { value: '100%', label: 'Outlets run by the company' },
]

export default function About() {
  return (
    <main className="overflow-x-hidden bg-brand-charcoal text-brand-ivory">
      <AboutHero />

      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
              01 — Who we are
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-heading text-3xl leading-snug font-medium md:text-4xl">
              We are a franchise company — not a chain that sells its name.
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-brand-ivory-muted">
              <p>
                Bhargava Venture Private Limited creates food brands and expands them through
                outlets across the country. Every outlet follows the FOCO model — Franchise
                Owned, Company Operated — which means the outlet belongs to its investor, but the
                day-to-day running stays firmly in our hands.
              </p>
              <p>
                For our partners, that removes the hardest part of retail: operations. Hiring,
                training, sourcing, quality control, daily discipline — that is our job, and we
                have been doing it for over a decade.
              </p>
              <p>
                Our experience predates the company&apos;s current brand family. We were the
                previous owners of <strong className="font-semibold text-brand-ivory">Gwala</strong>
                , and what we learned building that name is now poured into every outlet we open.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10 bg-brand-forest/20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 border-brand-ivory/10 px-8 py-12 lg:border-l lg:first:border-l-0"
            >
              <span className="font-heading text-4xl font-semibold text-brand-gold md:text-5xl">
                {stat.value}
              </span>
              <span className="text-xs leading-relaxed tracking-[0.18em] text-brand-ivory-muted uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
            02 — The FOCO model
          </p>
          <h2 className="mt-6 max-w-3xl font-heading text-3xl leading-snug font-medium md:text-4xl">
            You put in the capital. We put in the work.
          </h2>
          <div className="mt-16 grid gap-px border border-brand-ivory/10 md:grid-cols-3">
            {focoSteps.map((item) => (
              <div
                key={item.step}
                className="group flex flex-col gap-6 bg-brand-charcoal p-10 transition-colors duration-300 hover:bg-brand-forest/30"
              >
                <span className="font-heading text-sm text-brand-gold italic">{item.step}</span>
                <h3 className="font-heading text-2xl font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-ivory-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
                03 — Our outlets
              </p>
              <h2 className="mt-6 font-heading text-3xl leading-snug font-medium md:text-4xl">
                One family. Five ways to feed a city.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-brand-ivory-muted">
              Each brand runs on the same FOCO engine — built by Bhargava Venture, operated by
              Bhargava Venture, owned by its franchise partner.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, i) => (
              <div
                key={brand.name}
                className={
                  'group overflow-hidden rounded-xl border border-brand-ivory/10 bg-brand-forest/20 transition-transform duration-300 hover:-translate-y-1' +
                  (i === 0 ? ' flex flex-col lg:row-span-2' : '')
                }
              >
                <div className="flex items-center justify-center bg-white p-8">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={
                      (i === 0 ? 'h-48' : 'h-36') +
                      ' object-contain transition-transform duration-300 group-hover:scale-105'
                    }
                  />
                </div>
                <div className={'flex flex-col gap-2 p-6' + (i === 0 ? ' flex-1 justify-center' : '')}>
                  <span className="text-[10px] tracking-[0.25em] text-brand-ivory-muted uppercase">
                    {brand.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold">{brand.name}</h3>
                  <p className="text-sm text-brand-ivory-muted">{brand.tagline}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-start justify-center gap-4 rounded-xl border border-dashed border-brand-ivory/15 p-8">
              <span className="font-heading text-2xl font-medium">Next?</span>
              <p className="text-sm leading-relaxed text-brand-ivory-muted">
                New outlets open under these brands all the time. If you are looking to invest,
                one of them could be yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10 bg-brand-forest/20">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
            04 — Our legacy
          </p>
          <div className="mt-10 grid items-center gap-12 md:grid-cols-12">
            <h2 className="font-heading text-[clamp(3rem,9vw,7rem)] leading-none font-semibold md:col-span-5">
              Gwala
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-brand-ivory-muted md:col-span-7">
              <p>
                Before the current brand family, there was{' '}
                <strong className="font-semibold text-brand-ivory">Gwala</strong> — a name we
                owned, built and ran ourselves. It taught us how a food brand earns trust outlet
                by outlet, and how the FOCO model keeps that trust intact as it grows.
              </p>
              <p>
                We have since passed Gwala on and turned everything we learned into Bhargava
                Venture: a company built specifically to give investors a genuinely hands-off way
                to own a food franchise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center md:py-36">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
            Partner with us
          </p>
          <h2 className="mx-auto mt-8 max-w-3xl font-heading text-3xl leading-snug font-medium md:text-5xl">
            Own an outlet.{' '}
            <em className="font-light text-brand-ivory-muted italic">Leave the running to us.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-brand-ivory-muted">
            Bhargava Venture Private Limited — a decade of food retail, one proven model, and a
            family of brands ready for their next outlet.
          </p>
        </div>
      </section>
    </main>
  )
}
