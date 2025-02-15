import { Input } from '@/modules/layout/components/ui/input'
import { Button } from '@/modules/layout/components/ui/button'

export function Newsletter() {
  return (
    <section className="bg-accent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-space text-3xl font-bold text-background">
            Join Our Newsletter
          </h2>
          <p className="text-background/80 font-inter">
            Get exclusive offers and design inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
            />
            <Button className="bg-primary hover:bg-primary/90 font-space">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}