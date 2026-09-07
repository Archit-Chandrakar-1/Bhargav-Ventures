import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from '@/admin/AdminDashboard'
import RequireAuth from '@/admin/RequireAuth'
import PublicLayout from '@/components/PublicLayout'
import Home from '@/pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
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
