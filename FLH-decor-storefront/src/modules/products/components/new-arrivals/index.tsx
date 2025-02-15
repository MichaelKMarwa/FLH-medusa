import Link from 'next/link'
import { Button } from '@/modules/layout/components/ui/button'
import { Product } from '@/types/product'
import Image from 'next/image'

interface NewArrivalsProps {
  products: Product[]
}

export function NewArrivals({ products }: NewArrivalsProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-space text-3xl font-bold text-text">New Arrivals</h2>
          <Link href="/shop">
            <Button variant="ghost" className="text-primary hover:bg-accent/10">
              See All →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square relative bg-accent/10 rounded-lg overflow-hidden">
                <Image
                  src={product.thumbnail || '/images/placeholder-product.jpg'}
                  alt={product.title}
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  priority={product.id === products[0]?.id}
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-inter font-medium text-text">{product.title}</h3>
                <Price price={product.price} />
              </div>
              <Button
                size="sm"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
              >
                Quick Add
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Price component using existing repo patterns

const Price = ({ price }: { price?: Product['price'] }) => {
    if (!price) return null
    
    return (
      <span className="text-primary font-space font-bold">
        {new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: price.currency_code || 'USD'
        }).format(price.amount / 100)}
      </span>
    )
  }