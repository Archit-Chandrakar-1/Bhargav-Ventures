import { signOut } from 'firebase/auth'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/firebase'

export default function AdminDashboard() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Admin dashboard</h1>
      <p className="text-muted-foreground">Content management tools go here.</p>
      <Button variant="outline" onClick={() => signOut(auth)}>
        Sign out
      </Button>
    </main>
  )
}
