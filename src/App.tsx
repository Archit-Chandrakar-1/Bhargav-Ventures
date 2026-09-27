import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from '@/admin/AdminDashboard'
import RequireAuth from '@/admin/RequireAuth'
import PublicLayout from '@/components/PublicLayout'
import AndeyKiDuniya from '@/pages/AndeyKiDuniya'
import BhargavasFrozenFood from '@/pages/BhargavasFrozenFood'
import DoodhWala from '@/pages/DoodhWala'
import Home from '@/pages/Home'
import SamosaKing from '@/pages/SamosaKing'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/brands/samosa-king" element={<SamosaKing />} />
          <Route path="/brands/andey-ki-duniya" element={<AndeyKiDuniya />} />
          <Route path="/brands/doodhwala" element={<DoodhWala />} />
          <Route path="/brands/bhargavas-frozen-food" element={<BhargavasFrozenFood />} />
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
