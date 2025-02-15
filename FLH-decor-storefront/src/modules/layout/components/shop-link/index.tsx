import Link from 'next/link'
import { Button } from '@/modules/layout/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ShopLink() {
  return (
    <Button asChild variant="ghost" className="group">
      <Link href="/shop" className="flex items-center gap-1">
        See All
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  )
}