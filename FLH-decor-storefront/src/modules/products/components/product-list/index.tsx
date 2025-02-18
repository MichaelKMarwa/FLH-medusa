// src/modules/products/components/product-list.tsx
'use client'; // Mark as a client component since it uses ProductCard
import ProductCard from '@/modules/products/components/product-card';

interface ProductListProps {
  products: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  }[];
}

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}