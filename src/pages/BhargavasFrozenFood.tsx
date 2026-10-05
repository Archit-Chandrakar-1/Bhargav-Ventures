import { Mail, MessageCircle, Phone } from 'lucide-react'
import { FrozenFoodHero } from '@/pages/bhargavas-frozen-food/FrozenFoodHero'

export default function BhargavasFrozenFood() {
  return (
    <main className="bhargavas-frozen-food min-h-screen overflow-x-hidden bg-background font-body text-foreground selection:bg-sage/10">
      <FrozenFoodHero />
      <FocoStrip />
      <ProductCatalog />
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

interface Product {
  name: string
  image: string
  variety?: string
  packaging: string
  weight?: string
}

const products: Product[] = [
  {
    name: 'Mini Samosa',
    image: '/assets/bhargavas-frozen-food/products/mini-samosa.jpg',
    variety: 'Potato · Paneer · Cheese Corn · Chocolate · Khowa',
    packaging: '20 pieces per pack',
    weight: 'Aloo: 40g per piece · Others: 60g per piece',
  },
  {
    name: 'Cutlet',
    image: '/assets/bhargavas-frozen-food/products/cutlet.jpg',
    variety: 'Veg · Paneer · Cheese Corn',
    packaging: '20 pieces per pack',
    weight: '50g per piece',
  },
  {
    name: 'Paratha',
    image: '/assets/bhargavas-frozen-food/products/paratha.jpg',
    variety: 'Aloo · Mix · Paneer',
    packaging: '4 pieces per pack',
    weight: '250g per piece',
  },
  {
    name: 'Aloo Tikki',
    image: '/assets/bhargavas-frozen-food/products/aloo-tikki.jpg',
    packaging: '8 pieces per pack',
    weight: '150g per piece (cashew stuffing) · 100g per piece',
  },
  {
    name: 'Burger Tikki',
    image: '/assets/bhargavas-frozen-food/products/burger-tikki.jpg',
    packaging: '20 pieces per pack',
    weight: '70g per piece',
  },
  {
    name: 'Paneer Cheese Ball',
    image: '/assets/bhargavas-frozen-food/products/paneer-cheese-ball.jpg',
    variety: 'Stuffing: Cheese, Paneer',
    packaging: '1 kg and 500g packs',
  },
  {
    name: 'Veg Momos',
    image: '/assets/bhargavas-frozen-food/products/veg-momos.jpg',
    variety: 'Available fresh & frozen',
    packaging: '20 pcs and 40 pcs packs',
  },
  {
    name: 'Moong Vada',
    image: '/assets/bhargavas-frozen-food/products/moong-vada.jpg',
    variety: 'Ingredients: Moong Dal & Onion',
    packaging: '1 kg and 500g packs',
  },
]

function ProductCatalog() {
  return (
    <section className="border-t border-border bg-paper px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-widest text-clay">
            Our Range
          </span>
          <h2 className="font-display text-4xl italic leading-tight md:text-5xl">
            Frozen, ready, always on hand.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sage/10 sm:flex-row"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="aspect-4/3 w-full object-cover sm:aspect-auto sm:h-auto sm:w-3/5 sm:self-stretch"
              />
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <h3 className="font-display text-2xl">{product.name}</h3>
                {product.variety && (
                  <p className="text-sm leading-relaxed text-muted-foreground">{product.variety}</p>
                )}
                <div className="mt-auto space-y-1 border-t border-border/60 pt-3 text-sm text-sage/80">
                  <p>{product.packaging}</p>
                  {product.weight && <p>{product.weight}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 font-mono text-[10px] tracking-wide text-muted-foreground">
          Keep frozen at −7°C · Use before 150 days from packaging date · Strict hygiene,
          consistent taste, uncompromised quality in every batch.
        </p>
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
