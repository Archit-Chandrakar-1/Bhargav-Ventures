import { Award, Building2, Copyright, FileText, Rocket, ShieldCheck } from 'lucide-react'

interface Registration {
  name: string
  description: string
  href: string
  icon: typeof ShieldCheck
}

const registrations: Registration[] = [
  {
    name: 'FSSAI',
    description: 'Food Safety & Standards License',
    href: 'https://fssai.gov.in',
    icon: ShieldCheck,
  },
  {
    name: 'GST',
    description: 'Goods & Services Tax Registration',
    href: 'https://www.gst.gov.in',
    icon: FileText,
  },
  {
    name: 'Udyam / MSME',
    description: 'Micro, Small & Medium Enterprise Registration',
    href: 'https://udyamregistration.gov.in',
    icon: Award,
  },
  {
    name: 'Startup India',
    description: 'DPIIT Startup Recognition',
    href: 'https://www.startupindia.gov.in',
    icon: Rocket,
  },
  {
    name: 'Trademark',
    description: 'Brand & IP Registration',
    href: 'https://ipindia.gov.in',
    icon: Copyright,
  },
  {
    name: 'MCA',
    description: 'Company / LLP Registration',
    href: 'https://www.mca.gov.in',
    icon: Building2,
  },
]

export default function Compliance() {
  return (
    <section className="border-t border-brand-gold/10 bg-brand-charcoal py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-brand-gold" />
            <span className="text-xs tracking-[0.2em] text-brand-gold uppercase">Compliance</span>
          </div>
          <h2 className="font-heading text-3xl text-brand-ivory sm:text-4xl lg:text-5xl">
            Registered & Compliant, Every Step of the Way
          </h2>
          <p className="mt-4 max-w-2xl text-brand-ivory-muted">
            As a food and franchise business, we operate within India&apos;s regulatory framework.
            Tap any badge to learn more from the official government portal.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {registrations.map((reg) => (
            <a
              key={reg.name}
              href={reg.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-brand-gold/15 bg-brand-forest/30 p-5 text-center transition-colors hover:border-brand-gold/40 hover:bg-brand-forest/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-brand-charcoal">
                <reg.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-medium text-brand-ivory">{reg.name}</span>
              <span className="text-xs text-brand-ivory-muted">{reg.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
