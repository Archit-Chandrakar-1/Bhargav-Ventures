import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Leaf,
  Repeat,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent as ReactTouchEvent,
} from 'react'

type IconMotion = 'illuminate' | 'drive' | 'draw' | 'activate' | 'rotate'

interface Step {
  title: string
  description: string
  icon: typeof Leaf
  motion: IconMotion
}

const steps: Step[] = [
  {
    title: 'Quality at the Source',
    description:
      'We start with carefully selected raw materials from trusted, verified suppliers — never a shortcut on what goes into our food.',
    icon: Leaf,
    motion: 'illuminate',
  },
  {
    title: 'Centralized Supply',
    description:
      'Key raw products are supplied directly by us to every franchise outlet, cutting out guesswork and inconsistent vendors.',
    icon: Truck,
    motion: 'drive',
  },
  {
    title: 'Standardization',
    description:
      'Every outlet follows the same recipes, ingredients, portions, and preparation standards — down to the last detail.',
    icon: ClipboardCheck,
    motion: 'draw',
  },
  {
    title: 'Quality Control',
    description:
      'Strict storage, handling, hygiene, and operational guidelines keep every kitchen accountable, every single day.',
    icon: ShieldCheck,
    motion: 'activate',
  },
  {
    title: 'Consistency Promise',
    description: 'Walk into any outlet, any city, and you get the same taste and experience you trust us for.',
    icon: Repeat,
    motion: 'rotate',
  },
]

interface BrandPromise {
  name: string
  promise: string
  cardClassName: string
  textClassName: string
  emoji?: string
  iconSrc?: string
}

const brandPromises: BrandPromise[] = [
  {
    name: 'Samosa King',
    promise: 'We cook with healthy oils and honest, quality ingredients — no shortcuts, ever.',
    cardClassName: 'bg-[#F6B93B]',
    textClassName: 'text-[#3D2B12]',
    iconSrc: '/assets/samosa-icon.png',
  },
  {
    name: 'Andey Ki Duniya',
    promise: 'Only the best quality eggs make it to our kitchen — fresh, safe, and reliably sourced.',
    cardClassName: 'bg-[#FFC93C]',
    textClassName: 'text-[#1A1A1A]',
    emoji: '🐣',
  },
  {
    name: 'Coffee Roasters',
    promise: 'Small-batch beans, roasted fresh and ground to order — never a stale or second-rate cup.',
    cardClassName: 'bg-[#3F4A2D]',
    textClassName: 'text-[#E4E8D8]',
    emoji: '☕️',
  },
  {
    name: 'Doodhwala',
    promise: 'Pure, quality milk in every form — cow, buffalo, and tetra pack — with zero compromise on freshness.',
    cardClassName: 'bg-[#F5F1E4]',
    textClassName: 'text-[#4A3F2E]',
    emoji: '🥛',
  },
  {
    name: 'Paneerwala',
    promise: 'Real paneer, always. No duplicates, no synthetic shortcuts — just fresh and genuine.',
    cardClassName: 'bg-[#B5502E]',
    textClassName: 'text-[#FBEAE0]',
    emoji: '🧈',
  },
  {
    name: "Bhargava's Frozen Food",
    promise: 'Flash-frozen at peak freshness and cold-chain sealed — every pack as good as the day it was made.',
    cardClassName: 'bg-white',
    textClassName: 'text-brand-forest',
    emoji: '❄️',
  },
]

// Closing tagline, shown one phrase at a time as an auto-rotating slider.
const tagline = ['One brand.', 'One standard.', 'Every outlet.']
const taglineIntervalMs = 2600

export default function OurPromises() {
  const flowRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const [inView, setInView] = useState(false)
  const [activePhrase, setActivePhrase] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [stepInteracted, setStepInteracted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const node = flowRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const timer = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % tagline.length)
    }, taglineIntervalMs)
    return () => clearInterval(timer)
  }, [reducedMotion])

  // Mobile step carousel: gently auto-advance until the visitor takes control.
  useEffect(() => {
    if (reducedMotion || stepInteracted) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reducedMotion, stepInteracted])

  const goToStep = (next: number) => {
    setStepInteracted(true)
    setActiveStep((next + steps.length) % steps.length)
  }

  const onStepTouchStart = (event: ReactTouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }
  const onStepTouchEnd = (event: ReactTouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(deltaX) > 40) goToStep(activeStep + (deltaX < 0 ? 1 : -1))
    touchStartX.current = null
  }

  const renderStepCard = (step: Step, index: number, variant: 'default' | 'stage' = 'default') => {
    const stage = variant === 'stage'
    return (
      <div
        data-final={index === steps.length - 1 ? 'true' : undefined}
        style={{ '--i': index } as CSSProperties}
        className={`promise-card flex flex-1 flex-col rounded-2xl border border-brand-gold/15 bg-brand-forest/20 ${
          stage ? 'h-full justify-center gap-4 p-6 sm:p-8' : 'gap-3 p-6'
        }`}
      >
        <span
          data-motion={step.motion}
          className={`promise-icon flex items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold ${
            stage ? 'h-14 w-14' : 'h-11 w-11'
          }`}
        >
          <step.icon className={stage ? 'h-6 w-6' : 'h-5 w-5'} />
        </span>
        <span className="text-xs font-medium tracking-[0.2em] text-brand-gold/70 uppercase">
          Step {index + 1}
        </span>
        <h3 className={`font-heading text-brand-ivory ${stage ? 'text-2xl' : 'text-lg'}`}>
          {step.title}
        </h3>
        <p className={`text-brand-ivory-muted ${stage ? 'text-base' : 'text-sm'}`}>
          {step.description}
        </p>
      </div>
    )
  }

  return (
    <section className="border-t border-brand-gold/10 bg-brand-charcoal py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-brand-gold" />
            <span className="text-xs tracking-[0.2em] text-brand-gold uppercase">Our Promises</span>
          </div>
          <h2 className="font-heading text-3xl text-brand-ivory sm:text-4xl lg:text-5xl">
            Quality You Can Taste, Standards You Can Trust
          </h2>
          <p className="mt-4 max-w-2xl text-brand-ivory-muted">
            Great food isn&apos;t an accident — it&apos;s a discipline. From the ingredients we choose to the
            way every outlet runs, quality is the one thing we never compromise on. Here&apos;s how we
            protect it, at every step.
          </p>
        </div>

        {/* Desktop: horizontal flow with the scroll-triggered pulse animation */}
        <div
          ref={flowRef}
          data-animate={inView ? 'true' : 'false'}
          className="promises-flow hidden lg:flex lg:flex-row lg:items-stretch lg:gap-3"
        >
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              {renderStepCard(step, index)}

              {index < steps.length - 1 && (
                <div
                  style={{ '--i': index } as CSSProperties}
                  className="promise-arrow relative hidden items-center justify-center text-brand-gold/30 lg:flex"
                >
                  <span className="promise-arrow-dot" aria-hidden="true" />
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Mobile: compact step carousel — one card at a time, flips between steps */}
        <div
          className="lg:hidden"
          onTouchStart={onStepTouchStart}
          onTouchEnd={onStepTouchEnd}
        >
          <div
            className="relative h-[56vh] min-h-[420px] w-full overflow-hidden"
            style={{ perspective: '1200px' }}
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="absolute inset-0"
                style={
                  {
                    transformOrigin: 'top',
                    transform: reducedMotion
                      ? 'none'
                      : index === activeStep
                        ? 'rotateX(0deg)'
                        : 'rotateX(90deg)',
                    opacity: index === activeStep ? 1 : 0,
                    transition: reducedMotion
                      ? 'opacity 200ms ease-out'
                      : 'transform 500ms cubic-bezier(0.2, 0.7, 0.2, 1), opacity 350ms ease-out',
                    pointerEvents: index === activeStep ? 'auto' : 'none',
                    backfaceVisibility: 'hidden',
                  } as CSSProperties
                }
              >
                {renderStepCard(step, index, 'stage')}
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goToStep(activeStep - 1)}
              aria-label="Previous step"
              className="flex h-9 w-9 items-center justify-center rounded-full text-brand-gold ring-1 ring-brand-gold/30 transition-colors hover:bg-brand-gold/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => goToStep(index)}
                  aria-label={`Go to step ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-gold/30'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToStep(activeStep + 1)}
              aria-label="Next step"
              className="flex h-9 w-9 items-center justify-center rounded-full text-brand-gold ring-1 ring-brand-gold/30 transition-colors hover:bg-brand-gold/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-14 lg:mt-16">
          <h3 className="font-heading text-2xl text-brand-ivory sm:text-3xl">
            Quality at the Source, Brand by Brand
          </h3>
          <p className="mt-3 max-w-2xl text-brand-ivory-muted">
            Each brand carries its own promise — the specific standard it refuses to break.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {brandPromises.map((brand) => (
              <div
                key={brand.name}
                className={`flex flex-col gap-3 rounded-2xl p-6 ${brand.cardClassName}`}
              >
                <h4 className={`font-heading text-lg ${brand.textClassName}`}>
                  {brand.name}
                  {brand.emoji ? (
                    <span aria-hidden="true"> {brand.emoji}</span>
                  ) : null}
                  {brand.iconSrc ? (
                    <img
                      src={brand.iconSrc}
                      alt=""
                      aria-hidden="true"
                      className="ml-1.5 inline-block h-[1.1em] w-auto align-[-0.15em] mix-blend-multiply"
                    />
                  ) : null}
                </h4>
                <p className={`text-sm ${brand.textClassName} opacity-90`}>{brand.promise}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-brand-gold/20 bg-brand-forest/20 px-6 py-10 text-center lg:mt-16">
          <span className="sr-only">One brand. One standard. Every outlet.</span>
          {reducedMotion ? (
            <p
              aria-hidden="true"
              className="font-heading text-2xl text-brand-gold sm:text-3xl lg:text-4xl"
            >
              One brand. One standard. Every outlet.
            </p>
          ) : (
            <div aria-hidden="true" className="grid">
              {tagline.map((phrase, index) => (
                <p
                  key={phrase}
                  className={`col-start-1 row-start-1 font-heading text-2xl text-brand-gold transition-all duration-500 ease-out sm:text-3xl lg:text-4xl ${
                    index === activePhrase
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-1 opacity-0'
                  }`}
                >
                  {phrase}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
