// src/modules/home/components/hero-banner.tsx
export default function HeroBanner() {
    return (
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/hero-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Elevate Your Space</h1>
            <p className="mt-4 text-xl">Explore premium furniture and home decor collections.</p>
          </div>
        </div>
      </section>
    );
  }