import { Button } from '@/modules/layout/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square relative bg-accent/10 rounded-lg overflow-hidden">
          <Image
            src={product.thumbnail || '/images/placeholder-product.jpg'}
            alt={product.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <h3 className="font-inter font-medium text-text">{product.title}</h3>
        <div className="flex items-center justify-between">
          <Price price={product.price} />
          <Button
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            variant="secondary"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}