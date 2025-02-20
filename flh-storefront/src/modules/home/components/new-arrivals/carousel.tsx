// flh-storefront/src/modules/home/components/new-arrivals/carousel.tsx
'use client'
import { useEffect, useRef } from "react";
import ProductPreview from "@modules/products/components/product-preview";

const Carousel = ({ products }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentIndex = 0;
    const slideWidth = carousel.offsetWidth / 3; // Assuming 3 slides per view

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % products.length;
      carousel.scrollLeft = currentIndex * slideWidth;
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + products.length) % products.length;
      carousel.scrollLeft = currentIndex * slideWidth;
    };

    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full text-gray-600 hover:bg-gray-100"
        onClick={() => carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth / 3}
      >
        <
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full text-gray-600 hover:bg-gray-100"
        onClick={() => carouselRef.current.scrollLeft += carouselRef.current.offsetWidth / 3}
      >
        >
      </button>
      <div ref={carouselRef} className="carousel-container overflow-x-scroll scroll-smooth whitespace-nowrap">
        {products.map((product) => (
          <div key={product.id} className="inline-block px-4">
            <ProductPreview product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;