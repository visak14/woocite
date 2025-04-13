'use client';

import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';


const products = [
  {
    icon: '/images/m1.png', 
    title: 'Mixed Global Funds',
    details: '2 Large Cap | 1 Mid Cap | 1 Small Cap | 1 Global Fund',
  },
  {
    icon: '/images/m1.png',
    title: 'Large Cap',
    details: '5 large Cap',
  },
  {
    icon: '/images/m1.png',
    title: 'Mid Cap',
    details: '5 Mid Cap',
  },
];

const returns = [
  { label: '3Y', percent: '15%' },
  { label: '5Y', percent: '20%' },
  { label: '10Y', percent: '30%' },
];

const InvestmentProducts = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-12 max-w-[1440px] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Multiple Investment Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-teal-300 rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-all"
          >
            {/* Icon */}
            <div className="w-16 h-16 mb-4">
              <Image
                src={product.icon}
                alt={product.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

           
            <h3 className="text-xl font-semibold mb-1 text-black">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.details}</p>

           
            <div className="w-full space-y-3 mb-6">
              {returns.map(({ label, percent }, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">{label}</span>
                  <div className="w-full h-3 bg-blue-100 rounded-full overflow-hidden mx-2">
                    <div
                      className="h-full bg-cyan-500"
                      style={{ width: percent }}
                    ></div>
                  </div>
                  <span className="text-sm text-green-600 font-semibold">{percent}</span>
                </div>
              ))}
            </div>

            
            <div className="flex gap-4 w-full">
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-black text-sm font-medium rounded-xl hover:bg-blue-200 transition">
                <FiShoppingCart size={16} /> Buy Now
              </button>
              <button className="px-4 py-2 bg-blue-100 text-black text-sm font-medium rounded-xl hover:bg-blue-200 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentProducts;
