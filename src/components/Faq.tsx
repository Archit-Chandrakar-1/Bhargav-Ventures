import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const whatsappHref = 'https://wa.me/918305010777'

const faqs = [
  {
    question: 'What is the investment required for a franchise?',
    answer:
      "Investment depends on the brand and outlet format you choose. Connect with us on WhatsApp and we'll share a detailed breakdown for your city.",
  },
  {
    question: 'How long does it take to open an outlet?',
    answer:
      'Timelines vary by location and outlet size, but our team supports you at every step — from site selection to training to launch.',
  },
  {
    question: "What support does Bhargava's Venture provide?",
    answer:
      'We handle centralized supply, standardized recipes, training, and ongoing quality checks, so you can focus on running the outlet.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Reach out to us on WhatsApp with your city and brand of interest, and our franchise team will guide you through the next steps.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="border-b border-brand-forest/15 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-2xl font-extrabold tracking-wide text-brand-forest uppercase sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 divide-y divide-brand-forest/15 border-t border-brand-forest/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-extrabold tracking-wide text-brand-forest uppercase sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-forest transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && <p className="pb-5 text-sm text-brand-forest/80">{faq.answer}</p>}
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-sm text-brand-forest/70">
          Still have questions?{' '}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-brand-forest"
          >
            Chat with us on WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
