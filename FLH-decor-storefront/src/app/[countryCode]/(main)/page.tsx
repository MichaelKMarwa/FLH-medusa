// src/app/[countryCode]/(main)/page.tsx
import { Nav } from '@/modules/layout/templates/nav'
import { Hero } from '@/modules/home/components/hero'
import { NewArrivals } from '@/modules/products/components/new-arrivals'
import { Newsletter } from '@/modules/marketing/components/newsletter'
import { Footer } from '@/modules/layout/templates/footer'
import {medusa} from '@/lib/medusa'

export default async function HomePage() {
  let products = []
  
  try {
    const { products: medusaProducts } = await medusa.products.list({
      limit: 8,
      order: "created_at",
      expand: ["variants", "tags"],
      fields: "id,title,handle,thumbnail,variants,tags"
    })

    products = medusaProducts.map(product => ({
      id: product.id,
      title: product.title,
      handle: product.handle,
      thumbnail: product.thumbnail,
      tags: product.tags?.map(t => t.value),
      price: {
        amount: product.variants?.[0]?.prices?.[0]?.amount || 0,
        original_amount: product.variants?.[0]?.prices?.[0]?.original_amount,
        currency_code: product.variants?.[0]?.prices?.[0]?.currency_code || 'DKK'
      }
    }))

  } catch (error) {
    console.error("Product fetch error:", error)
    // Implement error state
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <NewArrivals products={products} />
      <Newsletter />
      <Footer />
    </div>
  )
}