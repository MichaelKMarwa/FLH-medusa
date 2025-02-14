import Image from 'next/image'
import { Button } from '@/modules/layout/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-[600px]">
      {/* Hero content */}
      <Button 
        size="lg"
        className="bg-primary hover:bg-primary/90"
      >
        Explore Collection
      </Button>
    </section>
  )
}