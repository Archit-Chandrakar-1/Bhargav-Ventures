import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  { label: 'Contact', href: '/contact' },
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

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.017 2.5c-5.517 0-9.997 4.48-9.997 9.997 0 1.765.464 3.475 1.343 4.985L2 21.5l4.166-1.351a9.955 9.955 0 0 0 5.85 1.85h.001c5.517 0 9.997-4.48 9.997-9.997 0-2.67-1.04-5.18-2.926-7.066a9.926 9.926 0 0 0-7.071-2.936zm5.868 15.865a8.24 8.24 0 0 1-5.868 2.432h-.001a8.284 8.284 0 0 1-4.223-1.156l-.303-.18-3.147.821.84-3.068-.198-.317a8.284 8.284 0 0 1-1.264-4.401c0-4.583 3.727-8.31 8.31-8.31 2.219 0 4.305.865 5.874 2.435a8.257 8.257 0 0 1 2.436 5.875c0 4.583-3.726 8.309-8.31 8.309z" />
    </svg>
  )
}

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
