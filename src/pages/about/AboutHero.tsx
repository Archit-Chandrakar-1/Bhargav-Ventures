const marqueeItems = [
  "Bhargava's",
  'Paneer Wala',
  'Samosa King',
  'Gwala',
]
const marqueeRow = [...marqueeItems, ...marqueeItems]

export function AboutHero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-ivory/10">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">
            Franchise Owned · Company Operated
          </p>
          <h1 className="mt-8 font-heading text-[clamp(2.75rem,8vw,6.5rem)] leading-[1.02] font-medium tracking-tight text-brand-ivory">
            A decade of building
            <br />
            <em className="font-light text-brand-ivory-muted italic">food brands</em> — and backing
            <br />
            the people who run them.
          </h1>
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <p className="text-base leading-relaxed text-brand-ivory-muted md:col-span-5 md:col-start-1">
              Bhargava Venture is a private limited company that sets up and runs franchise
              outlets under its family of food brands. Our model is simple: the partner invests,
              the company operates, and both grow together.
            </p>
            <div className="flex items-end md:col-span-4 md:col-start-9">
              <div className="flex items-center gap-4 border border-brand-gold/25 px-5 py-4">
                <span className="font-heading text-4xl font-semibold text-brand-gold">10</span>
                <span className="text-xs leading-tight tracking-[0.2em] text-brand-ivory-muted uppercase">
                  Years in the
                  <br />
                  business
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-brand-ivory/10 bg-brand-charcoal py-5">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {marqueeRow.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 text-sm tracking-[0.3em] text-brand-ivory-muted uppercase"
            >
              {item}
              <span className="inline-block size-1.5 rounded-full bg-brand-gold/50" />
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
