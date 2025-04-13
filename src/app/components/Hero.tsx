'use client';

import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 lg:py-14 max-w-[1440px] mx-auto">
      
    
      <div className="w-full text-center space-y-6 px-2 sm:px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Invest Smarter, Earn More
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium">
          AI-Powered Investment Strategies for Maximum Returns
        </p>
        <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
          Curated mutual funds picked by top fund managers. AI-driven insights for smart investors.
        </p>
        <div>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300">
            Start Investing Now
          </button>
        </div>
      </div>

    
      <div className="w-full mt-10 flex justify-center">
        <Image
          src="/images/1.png"
          alt="Investment Illustration"
          width={500}
          height={400}
          className="w-full max-w-[400px] h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
