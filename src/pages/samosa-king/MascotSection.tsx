import { Reveal } from './Reveal'

const mascot = '/assets/samosa-king/mascot.png'

export function MascotSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24" aria-labelledby="mascot-heading">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_1.2fr]">
        <Reveal className="group flex justify-center">
          <img
            src={mascot}
            alt="Raja, the Samosa King mascot, grinning with a samosa in hand"
            width={1024}
            height={1024}
            loading="lazy"
            className="animate-bob w-56 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:w-72"
          />
        </Reveal>

        <Reveal delay={120}>
          <span className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            Meet the king
          </span>
          <h2 id="mascot-heading" className="mt-3 text-4xl font-extrabold sm:text-5xl">
            This is <span className="text-gradient-gold">Raja</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Raja counts his day in samosas, not hours. He can hear a fresh batch hitting the
            oil from two streets away, and he has never once shared the last one on the plate.
            He tastes every recipe before it earns a place on our counter — if Raja does not
            go back for a second, it does not get sold.
          </p>
          <ul className="mt-7 flex flex-wrap gap-3 text-sm">
            {['Samosas eaten today: 14', 'Chutney: extra', 'Patience: zero'].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-primary/35 bg-card px-4 py-2 text-primary"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
