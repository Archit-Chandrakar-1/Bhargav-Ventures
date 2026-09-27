import {
  Armchair,
  Expand,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Paintbrush,
  Phone,
  Store,
  WandSparkles,
} from 'lucide-react'
import { FrozenFoodHero } from '@/pages/bhargavas-frozen-food/FrozenFoodHero'

const kioskImg = '/assets/bhargavas-frozen-food/kiosk.jpg'
const executiveImg = '/assets/bhargavas-frozen-food/executive.jpg'

export default function BhargavasFrozenFood() {
  return (
    <main className="bhargavas-frozen-food min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-sage/10">
      <FrozenFoodHero />
      <FocoStrip />
      <FranchiseTiers />
      <Essentials />
      <Enquiry />
    </main>
  )
}

function FocoStrip() {
  return (
    <section className="bg-sage px-6 py-16 text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="font-display text-3xl italic">The FOCO Philosophy</h2>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Franchise Owned, Company Operated. You provide the vision and capital; we provide the
              expertise and daily management.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-primary-foreground/20 p-6">
            <span className="font-mono text-[10px] opacity-50">Partner role</span>
            <p className="font-display text-lg tracking-wide">Asset Ownership &amp; Prime Location</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-primary-foreground/10 p-6">
            <span className="font-mono text-[10px] opacity-50">Company role</span>
            <p className="font-display text-lg tracking-wide">
              Supply Chain, Staffing &amp; Operations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const tiers = [
  {
    type: 'Type A',
    name: 'Kiosk Model',
    price: '₹11 Lakhs',
    image: kioskImg,
    imageAlt: 'Kiosk model storefront with olive green paneling and display counter',
    rows: [
      { label: 'Floor Area', value: '200 – 260 SQFT' },
      { label: 'Structural Work', value: 'MS Work & Tiles' },
      { label: 'Branding', value: 'Full Branding & Interior' },
      { label: 'Operations', value: 'Software & Team Provided' },
    ],
    featured: false,
  },
  {
    type: 'Type B',
    name: 'Executive Model',
    price: '₹15 Lakhs',
    image: executiveImg,
    imageAlt: 'Executive model interior with 15 to 20 seats and botanical decor',
    rows: [
      { label: 'Floor Area', value: '500 SQFT' },
      { label: 'Capacity', value: '15 – 20 Seating' },
      { label: 'Premium Build', value: 'ACP, MS Work, Furniture' },
      { label: 'Operations', value: 'Software, Tiles & Interior' },
    ],
    featured: true,
  },
]

function FranchiseTiers() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-20 text-center">
        <h2 className="mb-4 font-display text-4xl">Franchise Tiers</h2>
        <div className="mx-auto h-px w-24 bg-clay/30" />
      </div>

      <div className="grid items-stretch gap-8 md:grid-cols-2">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`group relative flex flex-col rounded-sm p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-sage/10 md:p-12 ${
              tier.featured ? 'border border-sage/20 bg-sage-light' : 'border border-border'
            }`}
          >
            {tier.featured && (
              <div className="absolute right-0 top-0 p-4">
                <span className="rounded-full bg-clay px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary-foreground">
                  Recommended
                </span>
              </div>
            )}
            <div className="mb-8">
              <span className="mb-2 block font-mono text-[10px] tracking-widest text-sage">
                {tier.type}
              </span>
              <h3 className="mb-1 font-display text-3xl">{tier.name}</h3>
              <p className="font-mono text-2xl text-clay">{tier.price}</p>
            </div>

            <div className="mb-12 flex-grow space-y-6">
              <img
                src={tier.image}
                alt={tier.imageAlt}
                loading="lazy"
                width={944}
                height={704}
                className="aspect-[4/3] w-full rounded border border-black/5 object-cover outline-1 -outline-offset-1"
              />
              <ul>
                {tier.rows.map((row) => (
                  <li
                    key={row.label}
                    className={`flex justify-between gap-4 py-2 text-sm ${
                      tier.featured ? 'border-b border-sage/20' : 'border-b border-border/60'
                    }`}
                  >
                    <span className="text-sage/70">{row.label}</span>
                    <span className="text-right">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#enquiry"
              className={`w-full py-4 text-center font-mono text-xs uppercase tracking-[0.2em] transition-all ${
                tier.featured
                  ? 'bg-sage text-primary-foreground hover:bg-clay'
                  : 'border border-sage text-sage hover:bg-sage hover:text-primary-foreground'
              }`}
            >
              Enquire about {tier.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

const essentials = [
  {
    icon: Store,
    title: 'Interior works',
    detail: 'Included in both franchise formats',
  },
  {
    icon: Expand,
    title: '200–260 / 500 sq ft',
    detail: 'Kiosk / Executive floor area',
  },
  {
    icon: Armchair,
    title: '15–20 seats',
    detail: 'Executive model seating capacity',
  },
  {
    icon: MonitorSmartphone,
    title: 'Software',
    detail: 'Included in both franchise formats',
  },
  {
    icon: WandSparkles,
    title: 'MS work & tiles',
    detail: 'Included in both franchise formats',
  },
  {
    icon: Paintbrush,
    title: 'Format-specific extras',
    detail: 'Kiosk: branding & team · Executive: ACP & furniture',
  },
]

function Essentials() {
  return (
    <section
      className="border-t border-border bg-paper px-6 py-24"
      aria-labelledby="essentials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-widest text-clay">
            Built into the package
          </span>
          <h2
            id="essentials-heading"
            className="font-display text-4xl font-semibold leading-tight md:text-5xl"
          >
            The essentials, already on the list.
          </h2>
        </div>
        <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {essentials.map(({ icon: Icon, title, detail }, index) => (
            <div
              key={title}
              className="flex min-h-48 flex-col border-b border-r border-border px-7 py-7 transition-colors hover:bg-sage-light/40 md:min-h-52 md:px-8"
            >
              <div className="flex items-start justify-between">
                <Icon className="size-6 text-clay" strokeWidth={1.8} aria-hidden="true" />
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-auto pt-8">
                <h3 className="font-display text-2xl font-semibold leading-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Enquiry() {
  return (
    <section id="enquiry" className="border-t border-border bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 rounded-xl bg-honey p-8 md:p-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
              Your city could be next
            </span>
            <h2 className="font-display text-4xl italic leading-tight text-foreground md:text-5xl">
              Ready to talk franchise?
            </h2>
            <p className="max-w-md leading-relaxed text-foreground/70">
              Share your preferred city, available site size and investment timeline with the
              Bhargavas Venture team to begin the discussion.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:bhargavventures.pvtltd@gmail.com"
              className="flex items-center justify-center gap-3 rounded-lg bg-espresso py-4 font-body text-sm font-medium text-honey transition-colors hover:bg-sage"
            >
              <MessageCircle className="size-4" aria-hidden />
              Connect via Bhargavas Venture
            </a>

            <div className="space-y-3 px-1 py-2">
              <a
                href="mailto:bhargavventures.pvtltd@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-sage"
              >
                <Mail className="size-4 shrink-0 text-amber" aria-hidden />
                bhargavventures.pvtltd@gmail.com
              </a>
              <a
                href="tel:+918305010777"
                className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-sage"
              >
                <Phone className="size-4 shrink-0 text-amber" aria-hidden />
                +91 83050 10777
              </a>
            </div>

            <a
              href="https://wa.me/918305010777"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-whatsapp py-4 font-body text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chat with us on WhatsApp — +91 83050 10777
            </a>
          </div>
        </div>

        <p className="mt-8 font-mono text-[10px] leading-relaxed tracking-wide text-muted-foreground">
          Investment and one-year ROI figures are assumptions for initial evaluation, not guaranteed
          returns. Final projections depend on location, sales, operating costs and commercial
          terms.
        </p>
      </div>
    </section>
  )
}
