import { ArrowLeft, X } from 'lucide-react'
import { useState } from 'react'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'

const whatsappNumber = '918305010777'

const brands = [
  'Samosa King',
  // 'Andey Ki Duniya',
  'Doodhwala',
  // 'Paneerwala',
  "Bhargava's Frozen Food",
  'Not sure yet',
]

export interface FranchiseModel {
  name: string
  range: string
  size: string
}

export const modelsByBrand: Record<string, FranchiseModel[]> = {
  'Samosa King': [
    { name: 'Cart Model', range: '₹7–9 Lakh', size: '150 sq ft' },
    { name: 'Kiosk Model', range: '₹13–15 Lakh', size: '200–250 sq ft' },
    { name: 'Executive', range: '₹18 Lakh+', size: '500 sq ft, 15–20 seats' },
  ],
  'Andey Ki Duniya': [
    { name: 'Standard Outlet', range: '₹11–13 Lakh', size: '300–500 sq ft, 10–12 seats' },
  ],
  Doodhwala: [{ name: 'Retail Outlet', range: '₹25 Lakh', size: '1,500–2,000 sq ft' }],
  Paneerwala: [{ name: 'Trading Dealership', range: 'District or block-wise', size: '500g / 1kg / 5kg packs' }],
  "Bhargava's Frozen Food": [
    { name: 'Kiosk Model', range: '₹11 Lakh', size: '200–260 sq ft' },
    { name: 'Executive Model', range: '₹15 Lakh', size: '500 sq ft, 15–20 seats' },
  ],
}

const timelines = ['Within 15 days', 'Within 45 days', 'Within 90 days', 'Just exploring']

function buildMessage(brand: string, model: string, timeline: string, name: string, phone: string) {
  const modelPart = model ? ` (${model})` : ''
  return `Hi, I'm ${name}, looking for a ${brand}${modelPart} franchise. My expected timeline to start is "${timeline}". You can reach me at ${phone}.`
}

function OptionButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-brand-gold/40 px-4 py-2.5 text-left text-sm font-medium text-brand-ivory transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
    >
      {children}
    </button>
  )
}

function ModelCard({ model, onClick }: { model: FranchiseModel; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl border border-brand-gold/40 px-4 py-3.5 text-left transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-heading text-base font-semibold text-brand-ivory">{model.name}</span>
        <span className="text-sm font-semibold text-brand-gold">{model.range}</span>
      </div>
      <p className="mt-1 text-xs text-brand-ivory-muted">{model.size}</p>
    </button>
  )
}

export function EnquiryButton({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [timeline, setTimeline] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const models = modelsByBrand[brand] ?? []

  function reset() {
    setStep(0)
    setBrand('')
    setModel('')
    setTimeline('')
    setName('')
    setPhone('')
  }

  function close() {
    setIsOpen(false)
    reset()
  }

  function handleBrandPick(value: string) {
    setBrand(value)
    const hasModels = (modelsByBrand[value] ?? []).length > 0
    setStep(hasModels ? 1 : 2)
  }

  function handleModelPick(value: string) {
    setModel(value)
    setStep(2)
  }

  function handleTimelinePick(value: string) {
    setTimeline(value)
    setStep(3)
  }

  function handleBack() {
    if (step === 2 && models.length === 0) {
      setStep(0)
    } else {
      setStep((s) => s - 1)
    }
  }

  function handleSubmit() {
    const text = buildMessage(brand, model, timeline, name.trim(), phone.trim())
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noreferrer')
    close()
  }

  const canSubmit = name.trim().length > 1 && phone.trim().length >= 7

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {children ?? '[ Start your enquiry → ]'}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-brand-gold/20 bg-brand-charcoal shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-brand-ivory/10 px-5 py-4">
              <div className="flex items-center gap-2">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    aria-label="Go back"
                    className="rounded-full p-1 text-brand-ivory-muted transition-colors hover:bg-brand-ivory/10 hover:text-brand-gold"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                )}
                <span className="font-heading text-sm text-brand-ivory">Start your enquiry</span>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="rounded-full p-1.5 text-brand-ivory-muted transition-colors hover:bg-brand-ivory/10 hover:text-brand-gold"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex gap-1.5 px-5 pt-4">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-brand-gold' : 'bg-brand-ivory/10'}`}
                />
              ))}
            </div>

            <div className="px-5 py-6">
              {step === 0 && (
                <>
                  <p className="text-xs tracking-[0.2em] text-brand-ivory-muted uppercase">Question 1 of 4</p>
                  <h3 className="mt-2 font-heading text-xl font-medium text-brand-ivory">
                    Which brand are you planning for?
                  </h3>
                  <div className="mt-5 flex flex-col gap-2.5">
                    {brands.map((b) => (
                      <OptionButton key={b} onClick={() => handleBrandPick(b)}>
                        {b}
                      </OptionButton>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <p className="text-xs tracking-[0.2em] text-brand-ivory-muted uppercase">Question 2 of 4</p>
                  <h3 className="mt-2 font-heading text-xl font-medium text-brand-ivory">
                    {models.length > 1
                      ? `${brand} has ${models.length} franchise models — which one fits you?`
                      : `Here's the ${brand} franchise model.`}
                  </h3>
                  <div className="mt-5 flex flex-col gap-2.5">
                    {models.map((m) => (
                      <ModelCard key={m.name} model={m} onClick={() => handleModelPick(m.name)} />
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="text-xs tracking-[0.2em] text-brand-ivory-muted uppercase">Question 3 of 4</p>
                  <h3 className="mt-2 font-heading text-xl font-medium text-brand-ivory">
                    What's your expected timeline?
                  </h3>
                  <div className="mt-5 flex flex-col gap-2.5">
                    {timelines.map((t) => (
                      <OptionButton key={t} onClick={() => handleTimelinePick(t)}>
                        {t}
                      </OptionButton>
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <p className="text-xs tracking-[0.2em] text-brand-ivory-muted uppercase">Question 4 of 4</p>
                  <h3 className="mt-2 font-heading text-xl font-medium text-brand-ivory">
                    What's your name and contact number?
                  </h3>
                  <div className="mt-5 flex flex-col gap-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="rounded-lg border border-brand-ivory/15 bg-brand-ivory/5 px-4 py-2.5 text-sm text-brand-ivory placeholder:text-brand-ivory-muted/60 outline-none focus:border-brand-gold"
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Contact number"
                      className="rounded-lg border border-brand-ivory/15 bg-brand-ivory/5 px-4 py-2.5 text-sm text-brand-ivory placeholder:text-brand-ivory-muted/60 outline-none focus:border-brand-gold"
                    />
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                      className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <WhatsAppIcon className="size-4 shrink-0" />
                      Send on WhatsApp
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
