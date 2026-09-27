import { ArrowRight, Menu, User } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const brands = [
  { name: 'Andey Ki Duniya', slug: 'andey-ki-duniya' },
  { name: 'Bhargav Frozen', slug: 'bhargavas-frozen-food' },
  { name: 'Doodhwala', slug: 'doodhwala' },
  { name: 'Paneerwala', slug: 'paneerwala' },
  { name: 'Samosa King', slug: 'samosa-king' },
]

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Franchise', href: '/franchise' },
  { label: 'Our Presence', href: '/our-presence' },
]

const whatsappHref = 'https://wa.me/918305010777'

function navLinkClassName({ isActive }: { isActive: boolean }) {
  return cn(
    'relative py-2 text-sm transition-colors hover:text-brand-gold',
    isActive
      ? "text-brand-gold after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:bg-brand-gold"
      : 'text-brand-ivory-muted',
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/15 bg-brand-charcoal">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
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

        <nav className="hidden items-center gap-6 lg:flex">
          <NavLink to="/" className={navLinkClassName} end>
            Home
          </NavLink>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent p-0 py-2 text-sm font-normal text-brand-ivory-muted hover:bg-transparent hover:text-brand-gold focus:bg-transparent data-open:bg-transparent data-open:text-brand-gold data-open:hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent">
                  Our Brands
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-transparent p-0">
                  <ul className="w-60 p-1">
                    {brands.map((brand) => (
                      <li key={brand.slug}>
                        <NavigationMenuLink
                          render={<Link to={`/brands/${brand.slug}`} />}
                          className="rounded-md px-3 py-2 text-sm text-brand-forest hover:bg-brand-gold/15 hover:text-brand-forest focus:bg-brand-gold/15"
                        >
                          {brand.name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="relative py-2 text-sm text-brand-ivory-muted transition-colors hover:text-brand-gold"
          >
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            render={<Link to="/franchise" />}
            nativeButton={false}
            className="rounded-full bg-brand-gold px-5 text-brand-charcoal hover:bg-brand-gold/90"
          >
            Partner With Us
            <ArrowRight />
          </Button>

          <Button
            render={<Link to="/admin" />}
            nativeButton={false}
            variant="ghost"
            size="icon"
            className="rounded-full text-brand-ivory ring-1 ring-brand-gold/30 hover:bg-brand-ivory/10 hover:text-brand-gold"
          >
            <User />
            <span className="sr-only">Admin login</span>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-ivory hover:bg-brand-ivory/10 lg:hidden"
              />
            }
          >
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-0 border-brand-gold/20 bg-brand-charcoal text-brand-ivory">
            <SheetHeader>
              <SheetTitle className="font-heading text-brand-ivory">
                BHARGAVA&apos;S VENTURE
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-1 overflow-y-auto px-4">
              <SheetClose
                render={<Link to="/" />}
                nativeButton={false}
                className="rounded-md px-2 py-2.5 text-sm text-brand-ivory-muted hover:bg-brand-ivory/10"
              >
                Home
              </SheetClose>

              <p className="mt-3 px-2 text-xs tracking-[0.2em] text-brand-gold">
                OUR BRANDS
              </p>
              {brands.map((brand) => (
                <SheetClose
                  key={brand.slug}
                  render={<Link to={`/brands/${brand.slug}`} />}
                  nativeButton={false}
                  className="rounded-md px-2 py-2.5 text-sm text-brand-ivory-muted hover:bg-brand-ivory/10"
                >
                  {brand.name}
                </SheetClose>
              ))}

              <div className="my-2 border-t border-brand-gold/15" />

              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link to={link.href} />}
                  nativeButton={false}
                  className="rounded-md px-2 py-2.5 text-sm text-brand-ivory-muted hover:bg-brand-ivory/10"
                >
                  {link.label}
                </SheetClose>
              ))}

              <SheetClose
                render={<a href={whatsappHref} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                className="rounded-md px-2 py-2.5 text-sm text-brand-ivory-muted hover:bg-brand-ivory/10"
              >
                Contact
              </SheetClose>
            </nav>

            <div className="mt-auto flex items-center gap-2 p-4">
              <SheetClose
                nativeButton={false}
                render={
                  <Button
                    render={<Link to="/franchise" />}
                    nativeButton={false}
                    className="flex-1 rounded-full bg-brand-gold text-brand-charcoal hover:bg-brand-gold/90"
                  />
                }
              >
                Partner With Us
                <ArrowRight />
              </SheetClose>

              <SheetClose
                nativeButton={false}
                render={
                  <Button
                    render={<Link to="/admin" />}
                    nativeButton={false}
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-brand-ivory ring-1 ring-brand-gold/30 hover:bg-brand-ivory/10 hover:text-brand-gold"
                  />
                }
              >
                <User />
                <span className="sr-only">Admin login</span>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
