// src/modules/products/components/new-arrivals.tsx
import Link from 'next/link'
import { Button } from '@/modules/layout/components/ui/button'
import { Badge } from '@/modules/layout/components/ui/badge'
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/modules/layout/components/ui/card'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/dk/products/${product.handle}`} passHref>
      <Card className="group relative overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="aspect-square relative bg-accent/10">
            <Image
              src={product.thumbnail || '/images/placeholder-product.jpg'}
              alt={product.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            {product.tags?.includes('new') && (
              <Badge className="absolute top-2 left-2 bg-primary text-background">
                New Arrival
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-inter font-medium text-text line-clamp-1">{product.title}</h3>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <Price price={product.price} />
            <Button
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault()
                // Add to cart logic here
              }}
            >
              Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

function Price({ price }: { price?: Product['price'] }) {
  if (!price) return null
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-primary font-space font-bold">
        {new Intl.NumberFormat('da-DK', {
          style: 'currency',
          currency: price.currency_code || 'DKK'
        }).format(price.amount / 100)}
      </span>
      {price.original_amount && (
        <span className="text-text/50 line-through text-sm">
          {new Intl.NumberFormat('da-DK', {
            style: 'currency',
            currency: price.currency_code || 'DKK'
          }).format(price.original_amount / 100)}
        </span>
      )}
    </div>
  )
}