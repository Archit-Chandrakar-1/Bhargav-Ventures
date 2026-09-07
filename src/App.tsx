import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from '@/admin/AdminDashboard'
import RequireAuth from '@/admin/RequireAuth'
import Home from '@/pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
