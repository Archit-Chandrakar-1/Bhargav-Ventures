import { Check, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const phoneHref = 'tel:+918305010777'
const whatsappHref = 'https://wa.me/918305010777'

interface Model {
  name: string
  range: string
  size: string
  tagline: string
  includes: string[]
  featured?: boolean
}

const models: Model[] = [
  {
    name: 'Cart Model',
    range: '₹7–9 Lakh',
    size: '150 sq ft',
    tagline: 'Compact and quick to launch.',
    includes: [
      'MS work',
      'ACP work',
      'Branding & strategy',
      'Software',
      'Equipment as per needs',
      'Deep freezer',
    ],
  },
  {
    name: 'Kiosk Model',
    range: '₹13–15 Lakh',
    size: '200–250 sq ft',
    tagline: 'A fixed footprint, fully fitted out.',
    includes: [
      'MS work',
      'ACP work',
      'Tiles & flooring',
      'Branding & strategy',
      'Software',
      'Skilled team provided by us',
      'Interior',
      'Deep freezer',
    ],
  },
  {
    name: 'Executive',
    range: '₹18 Lakh+',
    size: '500 sq ft',
    tagline: 'A full dine-in outlet, 15–20 seats.',
    includes: [
      'MS work',
      'ACP work',
      'Tiles & flooring',
      'Branding & strategy',
      'Software',
      'Skilled team provided by us',
      'Interior',
      'Furniture',
      '15–20 seating capacity',
      'Deep freezer',
      'Kitchen Equipments',
    ],
    featured: true,
  },
]

const stats = [
  { label: 'Operating model', value: 'FOCO', sub: 'Franchise owned, company operated' },
  { label: 'Investment', value: '₹7L–18L+', sub: 'Across three formats' },
  { label: 'Formats', value: 'Three', sub: 'Cart · Kiosk · Executive' },
]

const bannerTags = ['Branding', 'Software', 'Equipment', 'Interior', 'Skilled team', 'Deep freezer']

export function Franchise() {
  return (
    <>
      {/* The opportunity */}
      <section
        id="franchise"
        className="bg-[#241809] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold tracking-widest text-gold uppercase">
              The opportunity
            </p>
            <h2 className="text-4xl leading-tight font-extrabold text-[#fdf3e7] sm:text-5xl">
              Three formats. One FOCO model.
            </h2>
            <p className="mt-5 max-w-md text-[#fdf3e7]/70">
              Franchise owned, company operated — a Samosa King format for every budget and space,
              set up end to end by our team.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-[#fdf3e7]/12 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#241809] p-6">
                <p className="text-sm text-[#fdf3e7]/60">{s.label}</p>
                <p className="mt-2 text-3xl font-bold text-[#fdf3e7]">{s.value}</p>
                <p className="mt-1 text-xs text-[#fdf3e7]/55">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built into the package */}
      <section id="formats" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold tracking-widest text-primary uppercase">
              Built into the package
            </p>
            <h2 className="text-4xl font-extrabold text-cream sm:text-5xl">
              Pick the format that fits your space.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {models.map((m) => (
              <article
                key={m.name}
                className={`flex flex-col rounded-3xl border bg-card p-7 ${
                  m.featured ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border'
                }`}
              >
                {m.featured && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-widest text-[#3d2b12] uppercase">
                    Most complete
                  </span>
                )}
                <h3 className="text-2xl font-bold text-cream">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.size}</p>
                <p className="mt-4 text-4xl font-extrabold text-primary">{m.range}</p>
                <p className="mt-3 text-sm text-muted-foreground">{m.tagline}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {m.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand banner */}
      <section className="border-y border-border bg-gold px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-3xl font-extrabold text-[#3d2b12] sm:text-4xl">
              From a cart to a full outlet — we set it all up.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#3d2b12]/75">
              MS &amp; ACP work, branding, software, interiors and a skilled team come together in one
              franchise-ready Samosa King format.
            </p>
          </div>
          <div className="grid shrink-0 grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            {bannerTags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-md bg-[#3d2b12] px-4 py-3 text-[#fdf3e7]"
              >
                <Check className="size-4 text-gold" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Your city could be next */}
      <section id="franchise-enquiry" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-border bg-secondary p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-primary uppercase">
              Your city could be next
            </p>
            <h2 className="text-4xl font-extrabold text-cream sm:text-5xl">Ready to wear the crown?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-foreground/70">
              Share your preferred city, available space and budget with the Bhargava&apos;s Venture
              team, and we&apos;ll help you pick the right Samosa King format.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-start">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-transform duration-200 hover:scale-105"
              style={{ backgroundImage: 'var(--gradient-crust)' }}
            >
              Connect via Bhargava&apos;s Venture
            </Link>

            <div className="flex flex-col gap-2.5 text-sm lg:items-start">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {email}
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                Chat with us on WhatsApp — {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-xs leading-5 text-muted-foreground">
          Investment ranges are indicative and vary by location, format, site condition and final
          scope. Figures are for initial evaluation, not guaranteed costs or returns.
        </p>
      </section>
    </>
  )
}
