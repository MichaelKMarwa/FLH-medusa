// src/modules/home/components/featured-categories.tsx
export default function FeaturedCategories() {
    const categories = [
      { id: 1, name: 'Living Room', image: '/living-room.jpg' },
      { id: 2, name: 'Bedroom', image: '/bedroom.jpg' },
      { id: 3, name: 'Dining', image: '/dining.jpg' },
    ];
  
    return (
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }