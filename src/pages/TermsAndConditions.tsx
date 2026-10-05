const lastUpdated = 'October 4, 2026'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const address = '29 A, Sector 7 B, Kamal Vihar, in front of Prem Sound, Raipur 492015'

const sections = [
  {
    title: '1. Introduction & Acceptance',
    body: [
      "Bhargava Venture Private Limited (“Bhargava Venture”, “we”, “us” or “our”) builds and operates food outlets under its family of brands — including Samosa King, Andey Ki Duniya, Doodhwala, Paneer Wala and Bhargava's Frozen Food — on the FOCO model (Franchise Owned, Company Operated).",
      'These Terms & Conditions govern your use of this website and any franchise enquiry you submit through it. By browsing this website or submitting an enquiry, you agree to be bound by these terms. If you do not agree, please do not use this website.',
    ],
  },
  {
    title: '2. Website Use',
    body: ['When using this website, you agree that you will:'],
    list: [
      'Use it only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this website by, anyone else.',
      'Not attempt to gain unauthorised access to this website, the server on which it is hosted, or any server, computer or database connected to it.',
      'Provide accurate and current information in any enquiry or contact form you submit.',
    ],
  },
  {
    title: '3. Franchise Enquiries Are Not an Offer',
    body: [
      "Information on this website about investment ranges, outlet formats, pack sizes, district or block availability, or any other franchise detail is indicative and for general information only. It does not constitute an offer, promise or guarantee of a franchise, and submitting an enquiry does not create any binding obligation on either party.",
      "A franchise relationship with Bhargava Venture, for any brand, comes into existence only when both parties sign a formal franchise agreement. That signed agreement — not this website — is the document that governs the rights, obligations, fees and investment of the franchise partner and Bhargava Venture.",
    ],
  },
  {
    title: '4. No Guarantee of Returns',
    body: [
      'Any figures shown on this website — investment amounts, outlet area, pack sizes, incentive structures or similar — are indicative and may vary by location, format, site condition and final scope. Bhargava Venture does not guarantee any specific revenue, profit or return on investment from a franchise outlet. Franchise partners are strongly encouraged to conduct their own due diligence before entering into a franchise agreement.',
    ],
  },
  {
    title: '5. The FOCO Model',
    body: [
      'Under the FOCO model, a franchise partner provides the capital for an outlet while Bhargava Venture sets up, staffs and operates it on a day-to-day basis. The specific division of responsibilities, revenue sharing and operational control for each brand and outlet is set out in the individual franchise agreement, and may differ from the general description given on this website.',
    ],
  },
  {
    title: '6. Intellectual Property',
    body: [
      "All brand names, logos, trademarks, designs, text, graphics and other content on this website — including Bhargava Venture, Samosa King, Andey Ki Duniya, Doodhwala, Paneer Wala and Bhargava's Frozen Food — are the property of Bhargava Venture Private Limited or its licensors, and are protected by applicable intellectual property laws.",
      'You may not copy, reproduce, republish, or use any brand name, logo or content from this website for commercial purposes without our prior written consent. A franchise partner’s right to use a brand’s name and marks is granted only through, and for the term of, a signed franchise agreement.',
    ],
  },
  {
    title: '7. Third-Party Links',
    body: [
      'This website may contain links to third-party websites, such as social media or payment platforms. We do not control and are not responsible for the content, accuracy or practices of any linked third-party website.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Bhargava Venture shall not be liable for any indirect, incidental or consequential loss or damage arising from your use of this website or reliance on information presented on it. This does not limit any liability that cannot be excluded under Indian law.',
    ],
  },
  {
    title: '9. Indemnification',
    body: [
      'You agree to indemnify and hold Bhargava Venture, its officers, employees and franchise partners harmless from any claim, loss or demand arising out of your misuse of this website or your breach of these terms.',
    ],
  },
  {
    title: '10. Governing Law & Jurisdiction',
    body: [
      'These terms are governed by the laws of India. Any dispute arising out of or relating to this website or these terms shall be subject to the exclusive jurisdiction of the courts at Raipur, Chhattisgarh.',
    ],
  },
  {
    title: '11. Changes to These Terms',
    body: [
      'We may revise these Terms & Conditions from time to time to reflect changes in our practices or for legal reasons. The “Last updated” date at the top of this page shows when it was last revised. Continued use of this website after a revision constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      'For any question about these Terms & Conditions, reach out to:',
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <main className="bg-brand-charcoal text-brand-ivory">
      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-14 sm:px-8 md:pt-28 md:pb-20">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">Legal</p>
          <h1 className="mt-6 font-heading text-4xl font-medium tracking-tight md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-brand-ivory-muted">Last updated: {lastUpdated}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-ivory-muted">
            Bhargava Venture Private Limited runs a family of food outlets on the FOCO model —
            Franchise Owned, Company Operated. These terms govern your use of this website and any
            franchise enquiry you submit through it.
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
                {section.list && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-brand-gold">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
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
