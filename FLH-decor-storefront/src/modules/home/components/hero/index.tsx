import Image from 'next/image'
import { Button } from '@/modules/layout/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern Furniture Collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-secondary/40" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-8">
            <h1 className="font-space text-5xl md:text-6xl font-bold text-background leading-tight">
              Crafting Modern Living Spaces
            </h1>
            <p className="text-background/90 text-lg md:text-xl font-inter">
              Premium furniture collections with timeless designs
            </p>
            <div className="flex gap-4">
              <Button 
                size="xl" 
                className="bg-primary hover:bg-primary/90 text-background font-space"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-background text-background hover:bg-background/10 font-space"
              >
                Explore Designs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}