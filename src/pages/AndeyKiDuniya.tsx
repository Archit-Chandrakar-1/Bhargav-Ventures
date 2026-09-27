import {
  BadgeIndianRupee,
  Building2,
  Check,
  Clock3,
  Mail,
  Maximize2,
  MessageCircle,
  Phone,
  ReceiptIndianRupee,
  Sofa,
  Sparkles,
  Store,
  TabletSmartphone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'
import { AndeyHero } from '@/pages/andey-ki-duniya/AndeyHero'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const phoneHref = 'tel:+918305010777'
const whatsappHref = 'https://wa.me/918305010777'

const btnBase =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0'

const inclusions = [
  { icon: Store, title: 'Interior works', detail: 'A launch-ready outlet environment' },
  { icon: Maximize2, title: '300–500 sq ft', detail: 'A compact, efficient footprint' },
  { icon: Sofa, title: '10–12 seats', detail: 'Built for comfortable dine-in service' },
  { icon: TabletSmartphone, title: 'Software', detail: 'Operational technology included' },
  { icon: Sparkles, title: 'Tiles & finishes', detail: 'Core finishing elements included' },
  { icon: ReceiptIndianRupee, title: 'GST included', detail: 'A clearer headline investment' },
]

export default function AndeyKiDuniya() {
  return (
    <main className="andey-ki-duniya min-h-screen overflow-hidden bg-eggshell text-ink">
      <AndeyHero />

      <section
        id="investment"
        className="bg-ink px-5 py-20 text-ink-foreground sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold text-brand uppercase">The opportunity</p>
            <h2 className="font-display text-4xl leading-tight font-extrabold sm:text-5xl">
              One focused format. A clear launch plan.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg bg-ink-foreground/15 sm:grid-cols-3">
            <div className="bg-ink p-6">
              <Building2 className="mb-8 size-7 text-brand" />
              <p className="text-sm text-ink-foreground/60">Operating model</p>
              <p className="mt-2 font-display text-3xl font-bold">FOCO</p>
              <p className="mt-1 text-xs text-ink-foreground/55">Franchise owned, company operated</p>
            </div>
            <div className="bg-ink p-6">
              <BadgeIndianRupee className="mb-8 size-7 text-brand" />
              <p className="text-sm text-ink-foreground/60">Franchise cost</p>
              <p className="mt-2 font-display text-3xl font-bold">₹11–13L</p>
              <p className="mt-1 text-xs text-ink-foreground/55">Inclusive of GST</p>
            </div>
            <div className="bg-ink p-6">
              <Clock3 className="mb-8 size-7 text-brand" />
              <p className="text-sm text-ink-foreground/60">ROI assumption</p>
              <p className="mt-2 font-display text-3xl font-bold">1 year</p>
              <p className="mt-1 text-xs text-ink-foreground/55">Subject to outlet performance</p>
            </div>
          </div>
        </div>
      </section>

      <section id="included" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold text-brand-strong uppercase">Built into the package</p>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
              The essentials, already on the list.
            </h2>
          </div>
          <div className="grid border-t border-l border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map(({ icon: Icon, title, detail }, index) => (
              <article
                key={title}
                className="group min-h-56 border-r border-b border-ink/15 p-6 transition-colors hover:bg-yolk-soft sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-7 text-brand-strong" />
                  <span className="font-display text-sm font-bold text-ink/35">0{index + 1}</span>
                </div>
                <h3 className="mt-12 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-brand px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="font-display text-3xl font-extrabold sm:text-4xl">
              From empty shell to egg destination.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-foreground/70">
              The proposed package brings space planning, finishes, software and seating together in
              one compact outlet format.
            </p>
          </div>
          <div className="grid shrink-0 grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            {['Site fit', 'Interiors', 'Technology'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-3 text-ink-foreground"
              >
                <Check className="size-4 text-brand" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="franchise-enquiry" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg bg-yolk-soft p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
          <div>
            <p className="mb-3 text-sm font-bold text-brand-strong uppercase">
              Your city could be next
            </p>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
              Ready to talk franchise?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/65">
              Share your preferred city, available site size and investment timeline with the
              Bhargavas Venture team to begin the discussion.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link
              to="/"
              className={`${btnBase} h-14 bg-ink px-7 text-base text-ink-foreground shadow-sm hover:bg-ink/90`}
            >
              <MessageCircle /> Connect via Bhargavas Venture
            </Link>

            <div className="flex flex-col items-start gap-2.5 text-sm">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-medium text-ink/80 transition-colors hover:text-brand-strong"
              >
                <Mail className="size-4 shrink-0 text-brand-strong" />
                {email}
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 font-medium text-ink/80 transition-colors hover:text-brand-strong"
              >
                <Phone className="size-4 shrink-0 text-brand-strong" />
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
        <p className="mx-auto mt-5 max-w-7xl text-xs leading-5 text-ink/45">
          Investment and one-year ROI figures are assumptions for initial evaluation, not guaranteed
          returns. Final projections depend on location, sales, operating costs and commercial terms.
        </p>
      </section>
    </main>
  )
}
