import { Franchise } from '@/pages/samosa-king/Franchise'
import { Hero } from '@/pages/samosa-king/Hero'
import { MascotSection } from '@/pages/samosa-king/MascotSection'

export default function SamosaKing() {
  return (
    <main className="samosa-king min-h-screen overflow-x-hidden bg-background text-foreground">
      <Hero />
      <MascotSection />
      <Franchise />
    </main>
  )
}
