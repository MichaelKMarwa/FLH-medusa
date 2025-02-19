// flh-storefront/src/modules/home/templates/index.tsx
import Hero from "../components/hero";
import NewArrivals from "../components/new-arrivals";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* New Arrivals Section */}
      <NewArrivals />
    </div>
  );
};

export default HomePage;