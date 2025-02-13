import Image from 'next/image'
import { Button } from 'FLH-decor-storefront/src/modules/layout/components/ui/button.tsx'

export function Hero() {
  return (
    <section className="relative h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern Furniture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/40" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-space text-5xl font-bold text-background mb-6">
              Modern Furniture for Creative Spaces
            </h1>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-space"
            >
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}