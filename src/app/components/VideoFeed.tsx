'use client';

const videos = [
  {
    image: '/images/vi1.png',
    alt: 'Mutual Funds',
  },
  {
    image: '/images/vi2.png',
    alt: 'Investment Tech',
  },
  {
    image: '/images/vi3.png',
    alt: 'Financial Growth',
  },
];

export default function VideoFeedSection() {
  return (
    <section className="w-full px-4 py-16 bg-gradient-to-r from-[#00264d] to-[#003366]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">
        Wealthy+ Video Feed
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={video.image}
                alt={video.alt}
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>
        ))}
      </div>

    
      <div className="mt-10 text-center">
        <button className="bg-teal-200 hover:bg-teal-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
          Explore More
        </button>
      </div>
    </section>
  );
}
