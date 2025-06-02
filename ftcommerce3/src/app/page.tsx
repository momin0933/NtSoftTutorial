export default function HomePage() {
  const boxes = [
    { title: 'Fast Delivery', desc: 'Get your products quickly and reliably.', icon: '🚚' },
    { title: 'Secure Payments', desc: '100% secure payment gateway.', icon: '🔒' },
    { title: '24/7 Support', desc: 'We’re here to help anytime.', icon: '💬' },
    { title: 'Easy Returns', desc: 'No questions asked return policy.', icon: '♻️' },
  ];
  return (
     <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyShop</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Discover amazing products with unbeatable prices and world-class service.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

      {/* Info Boxes */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{box.icon}</div>
              <h3 className="text-xl font-bold mb-2">{box.title}</h3>
              <p className="text-gray-600">{box.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    
  )
}