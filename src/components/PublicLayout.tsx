import { MessageCircle } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import ChatbotWidget from '@/components/ChatbotWidget'
import { EnquiryButton } from '@/components/EnquiryModal'
import Footer from '@/components/Footer'
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon'
import Navbar from '@/components/Navbar'
import SocialSidebar from '@/components/SocialSidebar'

const investorWhatsappHref = `https://wa.me/918305010777?text=${encodeURIComponent(
  'Hi, I want to join as an investor.',
)}`

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <SocialSidebar />
      <div className="fixed bottom-4 left-4 z-50 flex flex-col-reverse items-start gap-3 sm:bottom-6 sm:left-6">
        <EnquiryButton className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-charcoal shadow-lg shadow-black/30 ring-4 ring-brand-gold/20 transition-transform hover:scale-105 hover:bg-brand-gold/90 sm:px-10">
          <MessageCircle className="size-5" />
          Start an Enquiry
        </EnquiryButton>

        <a
          href={investorWhatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-forest px-8 py-3.5 text-base font-semibold text-brand-ivory shadow-lg shadow-black/30 ring-4 ring-brand-forest/20 transition-transform hover:scale-105 hover:bg-brand-forest/90 sm:px-10"
        >
          <WhatsAppIcon className="size-5" />
          Join as an Investor
        </a>
      </div>
      <ChatbotWidget />
    </>
  )
}
