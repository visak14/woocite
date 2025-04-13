'use client';

export default function CallToActionSection() {
  return (
    <section className=" bg-gradient-to-r from-[#00264d] to-[#003366] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Start Investing & Grow Your Wealth Today!
        </h2>
        <p className="text-lg sm:text-xl text-white/90">
          Join Us For Smart Investing
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-blue-100 text-blue-900 font-semibold shadow hover:bg-blue-100 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full bg-blue-100 text-blue-900 font-semibold shadow hover:bg-blue-100 transition">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
