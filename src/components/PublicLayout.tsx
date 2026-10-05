import { MessageCircle } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import ChatbotWidget from '@/components/ChatbotWidget'
import { EnquiryButton } from '@/components/EnquiryModal'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SocialSidebar from '@/components/SocialSidebar'

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <SocialSidebar />
      <EnquiryButton className="fixed bottom-4 left-4 z-50 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gold px-8 py-3.5 text-base font-semibold text-brand-charcoal shadow-lg shadow-black/30 ring-4 ring-brand-gold/20 transition-transform hover:scale-105 hover:bg-brand-gold/90 sm:bottom-6 sm:left-6 sm:px-10">
        <MessageCircle className="size-5" />
        Start an Enquiry
      </EnquiryButton>
      <ChatbotWidget />
    </>
  )
}
