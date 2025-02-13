import { MainNav } from '@/modules/layout/components/nav'
import { Hero } from '@/modules/home/components/hero'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <Hero />
    </div>
  )
}