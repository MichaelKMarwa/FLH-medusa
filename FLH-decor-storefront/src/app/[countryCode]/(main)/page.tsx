// src/app/[countryCode]/(main)/page.tsx]
'use client'
import HeroBanner from '@/modules/home/components/hero-banner';
import FeaturedCategories from '@/modules/home/components/featured-categories';
import ProductList from '@/modules/products/components/product-list';
import { getProducts } from '@/lib/medusa';
import { useEffect, useState } from 'react';

export default async function HomePage({ params }: { params: { countryCode: string } }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <HeroBanner />
      <FeaturedCategories />
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">New Arrivals</h2>
        <ProductList products={products} />
      </section>
    </div>
  );
}