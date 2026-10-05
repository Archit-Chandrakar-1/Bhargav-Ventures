import { Mail, MessageCircle, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'
import { PaneerWalaHero } from '@/pages/paneerwala/PaneerWalaHero'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const phoneHref = 'tel:+918305010777'
const whatsappHref = 'https://wa.me/918305010777'

const packs = [
  { size: '500 g', use: 'Retail & households', note: 'Kirana stores, dairy booths' },
  { size: '1 kg', use: 'Small kitchens', note: 'Dhabas, caterers, sweet shops' },
  { size: '5 kg', use: 'Bulk & HoReCa', note: 'Hotels, restaurants, cafés' },
]

const range = [
  { title: 'Milk', text: 'Daily fresh milk for your route.' },
  { title: 'Ice Cream', text: 'Cups, cones & family packs.' },
  { title: 'Frozen Items', text: 'Ready-to-cook frozen range.' },
]

const dealershipModel = [
  ['District-wise', 'Exclusive rights to an entire district for established distributors.'],
  ['Block-wise', 'Start smaller — take one block and grow from there.'],
  ['Salesman support', 'Your salesmen earn incentives and subsidy support on every target achieved.'],
]

export default function Paneerwala() {
  return (
    <main className="paneerwala min-h-screen overflow-x-hidden bg-background text-foreground">
      <PaneerWalaHero />

      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl font-extrabold">Pack formats</h2>
          <p className="mt-2 opacity-80">One fresh product, sized for every buyer on your route.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packs.map((p) => (
              <div key={p.size} className="rounded-3xl bg-card p-8 text-card-foreground">
                <p className="font-display text-6xl font-extrabold text-primary">{p.size}</p>
                <p className="mt-4 text-lg font-bold">{p.use}</p>
                <p className="text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-10">
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Channel 01</p>
          <h3 className="mt-2 font-display text-3xl font-extrabold">Supply Chain</h3>
          <p className="mt-3 text-muted-foreground">
            Cold-chain distribution to retailers, dairy outlets and sub-distributors across your
            district.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-10">
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Channel 02</p>
          <h3 className="mt-2 font-display text-3xl font-extrabold">HoReCa</h3>
          <p className="mt-3 text-muted-foreground">
            Consistent bulk supply for hotels, restaurants and caterers — the 5 kg format is built
            for them.
          </p>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl font-extrabold">More than paneer</h2>
          <p className="mt-2 text-muted-foreground">Add these to the same delivery run.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {range.map((r) => (
              <div key={r.title} className="rounded-3xl bg-card p-8">
                <h3 className="font-display text-2xl font-bold">{r.title}</h3>
                <p className="mt-2 text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-extrabold">How the dealership works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {dealershipModel.map(([title, detail], index) => (
            <div key={title}>
              <p className="font-display text-5xl font-extrabold text-primary">0{index + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="enquire" className="scroll-mt-20 bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-widest opacity-80 uppercase">
              Your city could be next
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Ready to wear the crown?
            </h2>
            <p className="mt-4 max-w-md opacity-90">
              Share your preferred district or block with the Bhargav Ventures team, and we&apos;ll
              help you pick the right Paneer Wala dealership.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-bold text-secondary-foreground"
            >
              <MessageCircle className="size-4" /> Connect via Bhargav Ventures
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
            >
              <Mail className="size-4 shrink-0" /> {email}
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline"
            >
              <Phone className="size-4 shrink-0" /> {phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground"
            >
              <WhatsAppIcon className="size-4 shrink-0" /> Chat with us on WhatsApp — {phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
