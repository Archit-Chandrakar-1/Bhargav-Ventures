import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const phoneHref = 'tel:+918305010777'
const whatsappHref = 'https://wa.me/918305010777'

const heritageCards = [
  {
    name: 'Samosa King',
    logo: '/assets/SamosaKing.png',
    fact: "The samosa travelled to India with Central Asian traders well before the Mughal era — 10th-century Persian court writings already describe a spiced, meat-filled pastry called ‘sambosa’ served to royalty. What began as a traveller's snack on the Silk Road became the subcontinent's favourite street food.",
  },
  {
    name: 'Doodhwala',
    logo: '/assets/Doodhwala.png',
    fact: "Milk is called ‘amrit’ (nectar) in texts over 3,000 years old, and the doodhwala who delivered it door to door at dawn has been a fixture of Indian neighbourhoods for generations — long before refrigeration, trust in your local doodhwala was the only quality guarantee there was.",
  },
  {
    name: "Bhargava's Frozen Food",
    logo: '/assets/Bhargavas.jpg',
    fact: 'Long before freezers existed, Indian households preserved the harvest through sun-drying, salting and fermenting — papad, achaar and badi are all ancient freezing-before-freezing techniques. Flash-freezing is simply that same instinct to protect a harvest, continued with modern technology.',
  },
]

const storyStats = [
  { value: '10+', label: 'Years building food brands' },
  { value: 'FOCO', label: 'Franchise Owned, Company Operated' },
  { value: '3', label: 'Brands open to franchise today' },
]

export default function Franchise() {
  return (
    <main className="bg-brand-charcoal text-brand-ivory">
      <section className="relative overflow-hidden border-b border-brand-ivory/10">
        <img
          src="/assets/Bhargavas.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[-6rem] w-[34rem] -translate-y-1/2 opacity-[0.14] mix-blend-multiply select-none sm:w-[42rem]"
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-24">
          <p className="text-xs tracking-[0.35em] text-brand-gold uppercase">Franchise with us</p>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.1] font-medium tracking-tight md:text-6xl">
            Food has been a trust business for thousands of years.
            <br />
            <em className="font-light text-brand-ivory-muted italic">We just built a company around that.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-brand-ivory-muted md:text-lg">
            Bhargava Venture Private Limited gives entrepreneurs a way to own a food outlet without
            having to become food operators themselves. You bring the capital and the belief in a
            brand; we bring a decade of day-to-day operating experience, under the FOCO model —
            Franchise Owned, Company Operated.
          </p>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {storyStats.map((stat) => (
              <div key={stat.label} className="border border-brand-gold/20 px-4 py-4">
                <p className="font-heading text-2xl font-semibold text-brand-gold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-tight tracking-[0.1em] text-brand-ivory-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">Our story</p>
              <h2 className="mt-5 font-heading text-3xl leading-snug font-medium text-brand-gold md:text-4xl">
                Why we started: too many good food businesses were being run by people who never
                wanted to run a business.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-ivory-muted">
                <p>
                  Long before Bhargava Venture existed, our team was in the dairy trade — building
                  and running <strong className="font-semibold text-brand-ivory">Gwaala</strong>, a
                  doorstep milk brand, outlet by outlet, route by route. What we learned there stayed
                  with us: the people with the sharpest instinct for food are rarely the people
                  equipped to handle licensing, staffing, supply chains and daily discipline.
                </p>
                <p>
                  We started Bhargava Venture to close that gap — a partner invests in an outlet, and
                  we run it, the same way we once ran Gwaala's routes ourselves.
                </p>
              </div>
              <a
                href="#enquire"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-gold transition-colors hover:text-brand-ivory"
              >
                Learn more <ArrowRight className="size-4" />
              </a>
            </div>
            <img
              src="/assets/doodhwala/doodhwala-outlet.jpg"
              alt="A Bhargava Venture outlet storefront"
              className="aspect-[4/3] w-full rounded-2xl border border-brand-ivory/10 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10 bg-brand-forest/20">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src="/assets/bhargavas-frozen-food/kiosk.jpg"
              alt="A Bhargava Venture outlet counter, built and run by the company"
              className="aspect-[4/3] w-full rounded-2xl border border-brand-ivory/10 object-cover lg:order-1"
            />
            <div className="lg:order-2">
              <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
                The FOCO model
              </p>
              <h2 className="mt-5 font-heading text-3xl leading-snug font-medium text-brand-gold md:text-4xl">
                What you own. What we run.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-ivory-muted">
                Every outlet we open splits the work the same way: the franchise partner funds the
                site, the fit-out and the equipment — and Bhargava Venture handles sourcing,
                staffing, training and the daily discipline that keeps quality identical across every
                location. Because we run the outlet, you share in its earnings without needing to run
                it yourself.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-ivory-muted">
                <li className="flex gap-3">
                  <span className="font-heading text-brand-gold italic">01</span> You invest in the outlet.
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-brand-gold italic">02</span> We operate it, day to day.
                </li>
                <li className="flex gap-3">
                  <span className="font-heading text-brand-gold italic">03</span> You earn from it, without running it.
                </li>
              </ul>
              <a
                href="#enquire"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-gold transition-colors hover:text-brand-ivory"
              >
                Learn more <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
                A taste of history
              </p>
              <h2 className="mt-5 font-heading text-3xl leading-snug font-medium text-brand-gold md:text-4xl">
                Every brand in our family carries food a lot older than our company.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-ivory-muted">
                The samosa, the doodhwala's milk pail, the egg, paneer, even the instinct behind
                flash-freezing — every product we franchise has a history that stretches back
                centuries, long before it had a brand name. Here's a taste of where each one comes
                from.
              </p>
              <a
                href="#heritage"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-gold transition-colors hover:text-brand-ivory"
              >
                Learn more <ArrowRight className="size-4" />
              </a>
            </div>
            <img
              src="/assets/samosa-king/hero-samosa.jpg"
              alt="A freshly fried samosa, steam still rising"
              className="aspect-[4/3] w-full rounded-2xl border border-brand-ivory/10 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="heritage" className="scroll-mt-20 border-b border-brand-ivory/10 bg-brand-forest/20">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">Brand by brand</p>

          <div className="mt-10 space-y-16 md:space-y-20">
            {heritageCards.map((brand, i) => (
              <div key={brand.name} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div
                  className={
                    'flex aspect-square items-center justify-center rounded-2xl border border-brand-ivory/10 bg-white p-12 sm:p-16' +
                    (i % 2 === 1 ? ' lg:order-2' : '')
                  }
                >
                  <img src={brand.logo} alt={`${brand.name} logo`} className="h-full w-full object-contain" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : undefined}>
                  <span className="font-heading text-sm text-brand-gold italic">0{i + 1}</span>
                  <h3 className="mt-2 font-heading text-3xl font-semibold md:text-4xl">{brand.name}</h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-ivory-muted">
                    {brand.fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-20 border-b border-brand-ivory/10 bg-brand-forest/20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs tracking-[0.35em] text-brand-gold uppercase">Your city could be next</p>
            <h2 className="mt-3 font-heading text-3xl leading-tight font-medium md:text-5xl">
              Own a piece of a story worth continuing.
            </h2>
            <p className="mt-4 max-w-md text-brand-ivory-muted">
              Tell us which brand and which city or district you have in mind, and our franchise team
              will walk you through investment, availability and next steps.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-charcoal transition-colors hover:bg-brand-gold/90"
            >
              <MessageCircle className="size-4" /> Connect via Bhargava Venture
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 font-medium text-brand-ivory-muted transition-colors hover:text-brand-gold"
            >
              <Mail className="size-4 shrink-0" /> {email}
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 font-medium text-brand-ivory-muted transition-colors hover:text-brand-gold"
            >
              <Phone className="size-4 shrink-0" /> {phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              Chat with us on WhatsApp — {phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
