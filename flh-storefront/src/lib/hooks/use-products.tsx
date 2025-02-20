// flh-storefront/src/lib/hooks/use-products.ts
'use client'
import { useState, useEffect } from "react";
import { MedusaClient } from "@medusajs/medusa-js";

const client = new MedusaClient({
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000",
});

const useProducts = ({ sortBy, page, countryCode }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await client.products.list({
          limit: 10, // Limit to 10 products for the carousel
          offset: (page - 1) * 10,
          expand: "variants,images",
          region_id: countryCode,
          sort: sortBy,
        });
        setProducts(response.products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [sortBy, page, countryCode]);

  return { products, isLoading, error };
};

export default useProducts;