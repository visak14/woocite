'use client';

export default function WhyWealthplys() {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Illustration */}
        <div className="flex justify-center">
          <img
            src="/images/men.png" 
            alt="Why Wealthplys Illustration"
            className="w-[80%] md:w-[70%] lg:w-[60%] max-w-sm"
          />
        </div>

       
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Wealthplys?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Low-Cost Investing</span><br />
              <span className="text-sm">Save expenses with direct investments.</span>
            </li>
            <li>
              <span className="font-semibold text-gray-900">AI-Driven Insights</span><br />
              <span className="text-sm">Personalized investment recommendations.</span>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Better Returns, Lesser Risk</span><br />
              <span className="text-sm">Advanced portfolio optimization.</span>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Secure & Reliable</span><br />
              <span className="text-sm">12+ years of market expertise.</span>
            </li>
            <li>
              <span className="font-semibold text-gray-900">Curated by Experts</span><br />
              <span className="text-sm">Funds picked by top fund managers.</span>
            </li>
          </ul>
          <button className="mt-4 bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition duration-200">
            See How We Compare
          </button>
        </div>
      </div>
    </section>
  );
}
