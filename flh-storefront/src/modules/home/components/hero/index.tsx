// flh-storefront/src/modules/home/components/hero/index.tsx
import { Button } from "@medusajs/ui";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://unsplash.com/photos/white-and-brown-concrete-building-b_79nOqf95I/download?force=true&w=1920"
        alt="Furnixar Hero Banner"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0"
      />

      {/* Overlay for Text */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-8 z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to FLH
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white mb-8">
          Your one-stop furniture store
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            variant="default"
            className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-md"
          >
            Shop Now
          </Button>
          <Button
            variant="secondary"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-md"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;