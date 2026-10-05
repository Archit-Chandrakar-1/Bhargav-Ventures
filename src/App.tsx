import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from '@/admin/AdminDashboard'
import RequireAuth from '@/admin/RequireAuth'
import PublicLayout from '@/components/PublicLayout'
import About from '@/pages/About'
import AndeyKiDuniya from '@/pages/AndeyKiDuniya'
import BhargavasFrozenFood from '@/pages/BhargavasFrozenFood'
import DoodhWala from '@/pages/DoodhWala'
import Franchise from '@/pages/Franchise'
import Home from '@/pages/Home'
import OurPresence from '@/pages/OurPresence'
import Paneerwala from '@/pages/Paneerwala'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import RefundPolicy from '@/pages/RefundPolicy'
import SamosaKing from '@/pages/SamosaKing'
import TermsAndConditions from '@/pages/TermsAndConditions'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/our-presence" element={<OurPresence />} />
          <Route path="/brands/samosa-king" element={<SamosaKing />} />
          <Route path="/brands/andey-ki-duniya" element={<AndeyKiDuniya />} />
          <Route path="/brands/doodhwala" element={<DoodhWala />} />
          <Route path="/brands/paneerwala" element={<Paneerwala />} />
          <Route path="/brands/bhargavas-frozen-food" element={<BhargavasFrozenFood />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
