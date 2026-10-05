const lastUpdated = 'October 4, 2026'

const email = 'bhargavventures.pvtltd@gmail.com'
const phoneDisplay = '+91 83050 10777'
const address = '29 A, Sector 7 B, Kamal Vihar, in front of Prem Sound, Raipur 492015'

const sections = [
  {
    title: '1. Introduction',
    body: [
      "Bhargava Venture Private Limited (“Bhargava Venture”, “we”, “us” or “our”) builds and operates food outlets under its family of brands — including Samosa King, Andey Ki Duniya, Doodhwala, Paneer Wala and Bhargava's Frozen Food — on the FOCO model (Franchise Owned, Company Operated).",
      'This policy explains what information we collect when you visit our website or enquire about a franchise, how we use it, and the choices you have. By using this website or submitting a franchise enquiry, you agree to the practices described here.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'We collect information in the following ways:',
    ],
    list: [
      'Franchise enquiries: name, phone number, email address, city or district of interest, and any details you share about your investment capacity or preferred outlet location, submitted through our enquiry forms, WhatsApp, phone or email.',
      'Website usage data: pages visited, time spent, device and browser type, and approximate location, collected automatically through standard web analytics.',
      'Communications: messages you send us through the website chat widget, WhatsApp, email or phone, which we keep as a record of the conversation.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    body: ['We use the information we collect to:'],
    list: [
      'Evaluate franchise enquiries and assess district or block-wise availability for the brand you are interested in.',
      'Contact you about your enquiry, share investment details, and schedule discussions with our franchise team.',
      'Operate, maintain and improve this website and understand which brands and pages visitors find useful.',
      'Send updates about new outlet openings, franchise opportunities or brand news, where you have not opted out.',
      'Meet legal, regulatory and accounting obligations applicable to a private limited company.',
    ],
  },
  {
    title: '4. Franchise Partner Information',
    body: [
      'Because every outlet we open follows the FOCO model, evaluating a franchise partner involves more than a simple enquiry form. If your enquiry progresses, we may ask for additional information — such as proposed site details, business or financial background, and identity documents — to assess suitability and complete the franchise agreement.',
      'This information is used solely for franchise evaluation and onboarding, and is accessible only to the Bhargava Venture team members directly involved in that process.',
    ],
  },
  {
    title: '5. How We Share Information',
    body: [
      'We do not sell your personal information. We may share it only in these situations:',
    ],
    list: [
      'With our internal franchise and operations team, to evaluate and process your enquiry.',
      'With service providers who support our website, communications or analytics, under confidentiality obligations.',
      'When required by law, court order, or to protect the rights, property or safety of Bhargava Venture, our franchise partners, or the public.',
    ],
  },
  {
    title: '6. Cookies & Tracking',
    body: [
      'Our website may use cookies and similar technologies to remember your preferences and understand how visitors use the site. You can disable cookies in your browser settings, though some parts of the website may not function as intended without them.',
    ],
  },
  {
    title: '7. Data Security',
    body: [
      'We take reasonable technical and organisational measures to protect the information you share with us from unauthorised access, alteration or disclosure. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '8. Data Retention',
    body: [
      'We retain franchise enquiry information for as long as needed to evaluate your enquiry and, if you become a franchise partner, for the duration of our business relationship and as required by applicable law thereafter. You may request that we delete enquiry information that did not progress to a franchise agreement.',
    ],
  },
  {
    title: '9. Your Rights',
    body: [
      'You may contact us at any time to:',
    ],
    list: [
      'Ask what personal information we hold about you.',
      'Request correction of inaccurate information.',
      'Request deletion of your information, subject to our legal and operational requirements.',
      'Opt out of promotional communications.',
    ],
  },
  {
    title: "10. Children's Privacy",
    body: [
      'This website and our franchise programme are intended for adults capable of entering into a business agreement. We do not knowingly collect personal information from children.',
    ],
  },
  {
    title: '11. Changes to This Policy',
    body: [
      'We may update this policy from time to time to reflect changes in our practices or for legal reasons. The “Last updated” date at the top of this page shows when it was last revised.',
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      'For any question about this privacy policy or your information, reach out to:',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="bg-brand-charcoal text-brand-ivory">
      <section className="border-b border-brand-ivory/10">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-14 sm:px-8 md:pt-28 md:pb-20">
          <p className="text-xs tracking-[0.35em] text-brand-ivory-muted uppercase">Legal</p>
          <h1 className="mt-6 font-heading text-4xl font-medium tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-brand-ivory-muted">Last updated: {lastUpdated}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-ivory-muted">
            Bhargava Venture Private Limited runs a family of food outlets on the FOCO model —
            Franchise Owned, Company Operated. This page explains how we handle the information you
            share with us as a website visitor or franchise enquirer.
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
