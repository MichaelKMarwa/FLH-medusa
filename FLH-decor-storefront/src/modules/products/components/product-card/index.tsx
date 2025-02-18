// src/modules/products/components/product-card.tsx
'use client'; // Mark as a client component since it uses Link
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/modules/layout/components/ui/button'; // Assuming Shadcn UI is installed

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden transition-transform hover:scale-105">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.thumbnail || '/placeholder.jpg'} // Fallback image if no thumbnail exists
          alt={product.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <Button asChild className="mt-4 w-full">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}