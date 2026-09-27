const whatsappHref = 'https://wa.me/918305010777'

export default function HowToOrder() {
  return (
    <section className="border-y border-brand-forest/15 bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:gap-8 sm:px-6 lg:px-8">
        <h2 className="font-sans text-2xl font-extrabold tracking-wide text-brand-forest uppercase sm:text-3xl">
          How to Place Order?
        </h2>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="text-center transition-opacity hover:opacity-80"
        >
          <h3 className="text-lg font-extrabold tracking-wide text-brand-forest uppercase">
            Connect Over WhatsApp to Place Orders
          </h3>
          <p className="mt-3 text-sm text-brand-forest/75">
            You can directly connect over WhatsApp to place the order and ask for sample kits.
          </p>
        </a>

        <div className="text-center">
          <h3 className="text-lg font-extrabold tracking-wide text-brand-forest uppercase">
            Get It Delivered
          </h3>
          <p className="mt-3 text-sm text-brand-forest/75">
            Get it delivered through any delivery app in Raipur.
          </p>
        </div>
      </div>
    </section>
  )
}
