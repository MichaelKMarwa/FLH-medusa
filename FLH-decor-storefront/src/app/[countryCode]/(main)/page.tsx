import { Nav } from '@/modules/layout/templates/nav'
import { Hero } from '@/modules/home/components/hero'
import { NewArrivals } from '@/modules/products/components/new-arrivals'
import { Newsletter } from '@/modules/marketing/components/newsletter'
import { Footer } from '@/modules/layout/templates/footer'
import {medusa} from '@/lib/medusa'

export default async function HomePage() {
  let products = []
  
  try {
    // Simplified query with validated parameters
    const { products: medusaProducts } = await medusa.products.list({
      limit: 8,
      order: "created_at",
      expand: ["variants"]
    })

    // Transform products to match our interface
    products = medusaProducts.map(product => ({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.variants?.[0]?.prices?.[0]
    }))

  } catch (error) {
    console.error("Medusa API Error:", error.response?.data || error.message)
    // Fallback empty state
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <NewArrivals products={products} />
      <Newsletter />
    </div>
  )
}