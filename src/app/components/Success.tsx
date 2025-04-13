'use client';

import { Star } from "lucide-react";




const testimonials = [
  {
    name: 'Shivani B',
    feedback:
      "Investing used to feel overwhelming until I found this platform. It's so easy to use and my returns have been fantastic!",
  },
  {
    name: 'Vishal K.',
    feedback:
      "The insights and products here are top-notch. I'm finally confident about my financial future. Highly recommended!",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-12 max-w-[1440px] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((item, index) => (
          <div key={index} className="relative">
            {/* Avatar */}
            <div className="absolute -top-6 left-6 z-10">
              <div className="w-14 h-14 bg-teal-300 rounded-full border-4 border-white shadow-md"></div>
              
            </div>
            <div className="absolute -top-5 left-20 flex gap-1 z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" stroke="#facc15" />
              ))}
            </div>
            <div className="bg-amber-50 pt-10 pl-20 pr-6 pb-6 rounded-[2rem] relative">
          
             

              
              <p className="text-gray-800 text-sm leading-relaxed mt-6">
                {item.feedback}
              </p>

              <p className="text-sm font-semibold text-gray-600 mt-4">- {item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
