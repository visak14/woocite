'use client';

import Image from 'next/image';
import React from 'react';

const MarketSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-0 lg:py-4 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        
        
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Quick Insights</h2>
          
          <Image
            src="/images/graph1.png" 
            alt="Stock Market Chart"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />

          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm sm:text-base">
            <li><strong>Trump promises 'never-seen-before'</strong> pharma tariffs soon; Nifty Pharma cracks 4.5%, IPCA Labs, Lupin sink 6%</li>
            <li><strong>India in a sweet spot:</strong> Falling oil, weak dollar to give RBI MPC breathing room</li>
            <li><strong>Code red for Indian IT:</strong> If tariffs dent USA Inc's profits, clients' tech spend seen at risk</li>
          </ul>
        </div>

        {/* Market Watch */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Market Watch</h2>

          <div className="bg-gray-50 border rounded-lg p-4 shadow-md">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 border-b pb-2 mb-4">
              <span className="cursor-pointer hover:text-black">Currencies</span>
              <span className="cursor-pointer hover:text-black">Commodities</span>
              <span className="cursor-pointer hover:text-black">Indices</span>
              <span className="cursor-pointer hover:text-black">Economic indices</span>
              <span className="ml-auto">1D | 1W | 1M | 6M | 1Y | Max</span>
            </div>

        
            <div className="w-full  bg-green-100 flex items-center justify-center text-green-700 font-semibold mb-4">
            <Image
            src="/images/graph.png"
            alt="Stock Market Chart"
            width={600}
            height={100}
            className="w-full h-auto rounded-lg shadow-md"
          />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody>
                  {[
                    ['NIFTY 50', '23,519.35', '-72.60', '-0.31%'],
                    ['BSE Sensex', '77,414.92', '-191.51', '-0.25%'],
                    ['NIFTY Bank', '51,564.85', '-11.00', '-0.02%'],
                    ['NIFTY 50 Future', '23,642.00', '+4.35', '+0.02%'],
                    ['US 500', '5,506.40', '-74.5', '-1.34%'],
                    ['FTSE 100', '8,548.22', '-110.63', '-1.28%'],
                    ['Dollar Index', '103.825', '+0.116', '+0.11%'],
                  ].map(([name, value, change, percent], i) => (
                    <tr key={i} className="border-t">
                      <td className="py-2 pr-4">{name}</td>
                      <td className="py-2 pr-4">{value}</td>
                      <td className={`py-2 pr-4 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {change}
                      </td>
                      <td className={`py-2 ${percent.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {percent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketSection;
