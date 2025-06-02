export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$99',
      image: '/order1.jpg',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$149',
      image: '/order2.jpg',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: '$79',
      image: '/order3.jpg',
    },
    {
      id: 4,
      name: 'Fitness Tracker',
      price: '$59',
      image: '/order4.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
     
     

      {/* Product Grid */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-medium mt-4">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
