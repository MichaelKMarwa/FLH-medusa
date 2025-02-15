import Image from 'next/image'
import { Button } from '@/modules/layout/components/ui/button'
import { Product } from '@/types/product'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-space text-3xl md:text-4xl font-bold text-text mb-12">
          Featured Collections
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square relative bg-accent/10 rounded-lg overflow-hidden">
                {product.thumbnail && (
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-inter font-medium text-text">{product.title}</h3>
                <p className="text-primary font-space mt-1">
                  {product.price?.calculated_price || 'Price unavailable'}
                </p>
              </div>
              <Button
                size="sm"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
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