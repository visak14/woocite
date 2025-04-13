'use client';

export default function SecurityTrustSection() {
  return (
    <section className="w-full px-4 py-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
       
        <div className="flex justify-center">
          <img
            src="/images/mobile.png"
            alt="Security Illustration"
            className="w-[80%] md:w-[70%] lg:w-[60%] max-w-sm"
          />
        </div>

      
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Security & Trust Section
          </h2>
          <ul className="space-y-4 text-lg">
            <li>15+ Years of Advisory Experience</li>
            <li>Partnered with India’s Top Fund Houses</li>
            <li>Zero Hidden Fees | Direct Fund Investments Advisory</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
