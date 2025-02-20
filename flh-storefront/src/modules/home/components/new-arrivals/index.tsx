// flh-storefront/src/modules/home/components/new-arrivals/index.tsx
import { Suspense } from "react";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import useProducts from "@lib/hooks/use-products";
import Carousel from "./carousel";

const NewArrivals = () => {
  const { products, isLoading, error } = useProducts({ sortBy: "created_at", page: 1, countryCode: "US" });

  if (isLoading) {
    return <SkeletonProductGrid />;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="new-arrivals py-12 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>

      {/* Product Carousel */}
      <Carousel products={products} />
    </div>
  );
};

export default NewArrivals;