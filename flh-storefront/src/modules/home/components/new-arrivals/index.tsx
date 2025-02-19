// flh-storefront/src/modules/home/components/new-arrivals/index.tsx
import { Suspense } from "react";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import PaginatedProducts from "@modules/store/templates/paginated-products";

const NewArrivals = () => {
  return (
    <div className="new-arrivals py-12 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>

      {/* Product Carousel/Grid */}
      <Suspense fallback={<SkeletonProductGrid />}>
        <PaginatedProducts
          sortBy="created_at" // Sort by creation date to show the newest products
          page={1} // Fetch only the first page of products
          countryCode="US" // Replace with dynamic country code if needed
        />
      </Suspense>
    </div>
  );
};

export default NewArrivals;