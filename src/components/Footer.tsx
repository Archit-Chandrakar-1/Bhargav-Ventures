import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'

const address = '29 A, Sector 7 B, Kamal Vihar, in front of Prem Sound, Raipur 492015'
const phoneDisplay = '+91 83050 10777'
const phoneHref = 'tel:+918305010777'
const whatsappHref = 'https://wa.me/918305010777'
const email = 'bhargavventures.pvtltd@gmail.com'
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Franchise', href: '/franchise' },
  { label: 'Our Presence', href: '/our-presence' },
]

const brandLinks = [
  { label: 'Samosa King', href: '/brands/samosa-king' },
  { label: 'Andey Ki Duniya', href: '/brands/andey-ki-duniya' },
  { label: 'Cafe Cochin', href: '/brands/cafe-cochin' },
  { label: 'Doodhwala', href: '/brands/doodhwala' },
  { label: 'Paneerwala', href: '/brands/paneerwala' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund & Cancellation Policy', href: '/refund-policy' },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-gold/10 bg-brand-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-ivory-soft p-1 ring-1 ring-brand-gold/40">
                <img
                  src="/assets/Bhargavas.jpg"
                  alt="Bhargava's Venture"
                  className="h-full w-full rounded-lg object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg text-brand-ivory">BHARGAVA&apos;S</span>
                <span className="text-[11px] tracking-[0.25em] text-brand-gold">VENTURE</span>
              </span>
            </Link>

            <address className="mt-6 flex flex-col gap-3 text-sm not-italic text-brand-ivory-muted">
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-brand-gold"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {address}
              </a>
              <a
                href={phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-brand-gold"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {phoneDisplay}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-brand-gold"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {email}
              </a>
            </address>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-brand-charcoal transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] text-brand-gold uppercase">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-ivory-muted transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-brand-ivory-muted transition-colors hover:text-brand-gold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] text-brand-gold uppercase">Our Brands</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brand-ivory-muted transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-brand-gold/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-brand-ivory-muted">
            © {new Date().getFullYear()} Bhargava&apos;s Venture. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-brand-ivory-muted transition-colors hover:text-brand-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
