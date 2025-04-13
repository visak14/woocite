'use client';

const articles = [
  {
    title: "Beginner’s Guide to Mutual Funds",
    image: "/images/k1.png",
  },
  {
    title: "Market Predictions & Investment Strategies",
    image: "/images/k2.png",
  },
  {
    title: "Tax Planning & Wealth Creation",
    image: "/images/k3.png",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="w-full px-4 py-16 bg-white">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Knowledge Hub</h2>
        <p className="text-md md:text-lg text-gray-600 mt-2">
          Latest Investment Insights & Smart Money Tips
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="p-4 text-center font-semibold text-black text-lg">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
