import { Boxes, Mail, Megaphone, MessageCircle, MonitorCog, Phone, Store } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'
import { Button } from '@/pages/doodhwala/Button'
import { DoodhWalaHero } from '@/pages/doodhwala/DoodhWalaHero'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const phoneHref = 'tel:+918305010777'
const whatsappHref = 'https://wa.me/918305010777'

const inclusions = ['BMC', 'Deep freezer', 'Milk chiller', 'Furniture & interiors']
const support = [
  {
    icon: MonitorCog,
    title: 'Software support',
    body: 'Systems to support billing, inventory and smooth day-to-day outlet operations.',
  },
  {
    icon: Store,
    title: 'Branding support',
    body: 'A consistent Doodh Wala identity across the storefront, interiors and customer touchpoints.',
  },
  {
    icon: Megaphone,
    title: 'Marketing support',
    body: 'Launch and ongoing marketing support to help establish your outlet in its local market.',
  },
  {
    icon: Boxes,
    title: 'Equipment guidance',
    body: 'A complete equipment setup planned around modern dairy storage and retail needs.',
  },
]

export default function DoodhWala() {
  const navigate = useNavigate()

  return (
    <main className="doodhwala min-h-screen overflow-hidden bg-background text-foreground">
      <DoodhWalaHero />

      <section id="concept" className="border-y border-border bg-secondary px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="section-kicker">One brand. Two investments.</p>
              <h2 className="section-title">A complete dairy business setup</h2>
            </div>
            <p className="max-w-md leading-7 text-muted-foreground">
              Start with the customer-facing retail outlet, then add the processing and production
              unit as a separate investment.
            </p>
          </div>

          <div id="investment" className="grid scroll-mt-28 gap-6 md:grid-cols-2">
            <article className="investment-card bg-background text-foreground">
              <div className="flex items-start justify-between gap-5">
                <span className="module-tag">Module 01</span>
                <span className="font-heading text-4xl font-semibold">₹25L</span>
              </div>
              <h3 className="mt-12 font-heading text-3xl font-semibold">Retail outlet</h3>
              <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
                A fully furnished 1,500–2,000 sq ft outlet, planned for a 40–50 ft frontage and ready
                for modern dairy retail.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border pt-7">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="investment-card bg-primary text-primary-foreground">
              <div className="flex items-start justify-between gap-5">
                <span className="module-tag-dark">Module 02</span>
                <span className="font-heading text-4xl font-semibold">₹25L</span>
              </div>
              <h3 className="mt-12 font-heading text-3xl font-semibold">Processing &amp; production</h3>
              <p className="mt-4 max-w-lg leading-7 text-primary-foreground/65">
                A separate investment for the milk processing and production unit that supports the
                franchise operation.
              </p>
              <div className="mt-10 border-t border-primary-foreground/15 pt-7">
                <p className="text-sm font-semibold tracking-[0.14em] text-primary-foreground/45 uppercase">
                  Additional unit investment
                </p>
                <p className="mt-3 text-lg font-medium">Built to complement the retail outlet</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="support" className="scroll-mt-20 px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.5fr]">
          <div>
            <p className="section-kicker">Backed at every step</p>
            <h2 className="section-title">Support beyond the setup</h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              The franchise package brings practical support across operations, identity and market
              launch.
            </p>
            <div className="mt-10 border-l-2 border-accent bg-accent-soft p-5">
              <p className="text-sm font-semibold text-accent">
                Software, branding and marketing support included.
              </p>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {support.map(({ icon: Icon, title, body }, index) => (
              <article key={title} className="support-item">
                <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>
                <p className="mb-3 text-xs font-semibold text-accent">0{index + 1}</p>
                <h3 className="font-heading text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-20 px-5 pb-20 sm:px-8 lg:px-12 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-border bg-accent-soft p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-accent uppercase">
              Your city could be next
            </p>
            <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
              Bring Doodh Wala to your market
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Take the next step with Bhargava Ventures and discuss your proposed location, outlet
              space and franchise plan.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <Button onClick={() => navigate('/')} className="h-14 px-7 text-base">
              <MessageCircle className="size-4" /> Connect via Bhargava Ventures
            </Button>

            <div className="flex flex-col items-start gap-2.5 text-sm">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-accent" />
                {email}
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-accent" />
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
          Investment figures are indicative and vary by location, format, site condition and final
          scope. Figures are for initial evaluation, not guaranteed costs or returns.
        </p>
      </section>
    </main>
  )
}
