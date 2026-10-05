import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const phoneHref = 'tel:+918305010777'
const whatsappHref = 'https://wa.me/918305010777'
const address = '29 A, Sector 7 B, Kamal Vihar, in front of Prem Sound, Raipur 492015'
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

const presenceStats = [
  { value: '10+', label: 'Years operating in Raipur' },
  { value: '5', label: 'Brands running from one home base' },
  { value: 'FOCO', label: 'Franchise Owned, Company Operated' },
]

const brands = [
  { name: "Bhargava's", logo: '/assets/Bhargavas.jpg' },
  { name: 'Samosa King', logo: '/assets/SamosaKing.png' },
  // { name: 'Andey Ki Duniya', logo: '/assets/Andeykiduniya.png' },
  { name: 'Doodhwala', logo: '/assets/Doodhwala.png' },
  // { name: 'Paneerwala', logo: '/assets/Paneerwala.png' },
]

export default function OurPresence() {
  return (
    <main className="bg-brand-charcoal text-brand-ivory">
      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-24">
          <p className="text-xs tracking-[0.35em] text-brand-gold uppercase">Our presence</p>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.1] font-medium tracking-tight md:text-6xl">
            Rooted in Raipur.
            <br />
            <em className="font-light text-brand-ivory-muted italic">Reaching for every city next.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-brand-ivory-muted md:text-lg">
            Every Bhargava Venture brand runs today from a single home base in Raipur, Chhattisgarh.
            That's deliberate — we built, tested and refined the FOCO model here before taking it
            anywhere else. Now we're opening district and block-wise franchise territories across
            India, one city at a time.
          </p>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {presenceStats.map((stat) => (
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
              <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">Headquarters</p>
              <h2 className="mt-5 font-heading text-3xl leading-snug font-medium text-brand-gold md:text-4xl">
                Raipur, Chhattisgarh
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-ivory-muted">
                Our registered office and the operating base for all five brands — Samosa King, Andey
                Ki Duniya, Doodhwala, Paneer Wala and Bhargava's Frozen Food — sits here. If you're in
                Raipur, you can already order through any major delivery app or connect with us
                directly over WhatsApp.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-brand-ivory-muted transition-colors hover:text-brand-gold"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                  {address}
                </a>
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 text-brand-ivory-muted transition-colors hover:text-brand-gold"
                >
                  <Phone className="size-4 shrink-0 text-brand-gold" />
                  {phoneDisplay}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-brand-ivory-muted transition-colors hover:text-brand-gold"
                >
                  <Mail className="size-4 shrink-0 text-brand-gold" />
                  {email}
                </a>
              </div>
            </div>
            <iframe
              title="Bhargava Venture headquarters location"
              src={mapsEmbedSrc}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl border border-brand-ivory/10 grayscale invert-[0.92]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10 bg-brand-forest/20">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">One home base, five brands</p>
          <h2 className="mt-6 max-w-2xl font-heading text-3xl leading-snug font-medium md:text-4xl">
            Every brand we franchise is already proven, right here in Raipur.
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center gap-5 rounded-xl border border-brand-ivory/10 bg-brand-charcoal p-10"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-white p-2">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="h-full w-full object-contain" />
                </div>
                <p className="text-center text-sm font-medium">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">Where we're headed</p>
          <h2 className="mt-6 max-w-2xl font-heading text-3xl leading-snug font-medium md:text-4xl">
            District and block-wise territories, open across India.
          </h2>
          <div className="mt-14 grid gap-px border border-brand-ivory/10 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'District-wise',
                body: 'Exclusive rights to an entire district for established distributors and investors ready to scale.',
              },
              {
                step: '02',
                title: 'Block-wise',
                body: 'Start smaller — take one block or neighbourhood and grow outward from there.',
              },
              {
                step: '03',
                title: 'Any state, any city',
                body: "No region is off the table. If your city doesn't have a Bhargava Venture outlet yet, tell us — it could be next.",
              },
            ].map((item) => (
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

      <section id="enquire" className="scroll-mt-20 border-b border-brand-ivory/10 bg-brand-forest/20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs tracking-[0.35em] text-brand-gold uppercase">Your city could be next</p>
            <h2 className="mt-3 font-heading text-3xl leading-tight font-medium md:text-5xl">
              Tell us where, and we'll tell you what's possible.
            </h2>
            <p className="mt-4 max-w-md text-brand-ivory-muted">
              Share your city or district with the Bhargava Venture team, and we'll walk you through
              availability, investment and next steps for the brand you have in mind.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-charcoal transition-colors hover:bg-brand-gold/90"
            >
              Connect via Bhargava Venture <ArrowRight className="size-4" />
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
