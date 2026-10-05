const lastUpdated = 'October 4, 2026'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const address = '29 A, Sector 7 B, Kamal Vihar, in front of Prem Sound, Raipur 492015'

const sections = [
  {
    title: '1. No Online Sales or Payments',
    body: [
      "Bhargava Venture Private Limited (“Bhargava Venture”, “we”, “us” or “our”) builds and operates food outlets under its family of brands — including Samosa King, Andey Ki Duniya, Doodhwala, Paneer Wala and Bhargava's Frozen Food — on the FOCO model (Franchise Owned, Company Operated).",
      'This website is an information and franchise-enquiry platform. It does not sell any product, take any order, or process any payment from visitors. As a result, there is no refund or cancellation policy to apply here — there is nothing purchased through this website to refund or cancel.',
    ],
  },
  {
    title: '2. Franchise Enquiries',
    body: [
      'Submitting a franchise enquiry through this website, by WhatsApp, phone or email, is free and does not involve any payment. You may withdraw an enquiry at any time, at no cost, simply by letting us know.',
    ],
  },
  {
    title: '3. Franchise Fees & Investment Payments',
    body: [
      'Any fee, deposit or investment amount connected with actually becoming a franchise partner for a Bhargava Venture brand is made only after a formal franchise agreement is signed — never through this website. The refund, cancellation and withdrawal terms for those payments are set out in that signed agreement, and are agreed between the franchise partner and Bhargava Venture directly.',
      'As a general practice, franchise fees and investment amounts paid under a signed agreement are non-refundable once paid, except where the agreement itself states otherwise. Please refer to your specific franchise agreement for the terms that apply to you.',
    ],
  },
  {
    title: '4. Questions About a Franchise Payment',
    body: [
      'If you are an existing or prospective franchise partner with a question about a payment, deposit or investment amount, please contact your relationship point of contact at Bhargava Venture directly, or reach us at:',
    ],
  },
]

export default function RefundPolicy() {
  return (
    <main className="bg-brand-charcoal text-brand-ivory">
      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-14 sm:px-8 md:pt-28 md:pb-20">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">Legal</p>
          <h1 className="mt-6 font-heading text-4xl font-medium tracking-tight md:text-5xl">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-4 text-sm text-brand-ivory-muted">Last updated: {lastUpdated}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-ivory-muted">
            Bhargava Venture Private Limited runs a family of food outlets on the FOCO model —
            Franchise Owned, Company Operated. This website does not sell anything or take payments,
            so there is no refund or cancellation process to describe.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl font-medium">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-ivory-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-brand-gold/20 bg-brand-forest/20 p-6 sm:p-8">
            <p className="font-heading text-lg font-medium">Bhargava Venture Private Limited</p>
            <div className="mt-3 space-y-1.5 text-sm text-brand-ivory-muted">
              <p>{address}</p>
              <p>{phoneDisplay}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
