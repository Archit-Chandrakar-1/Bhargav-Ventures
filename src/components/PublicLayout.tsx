import { Outlet } from 'react-router-dom'
import ChatbotWidget from '@/components/ChatbotWidget'
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
      <ChatbotWidget />
    </>
  )
}
