'use client';

export default function AIChatbotSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#061c3d] to-[#082654] text-white px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            AI Chatbot for Personalized Investment Advice
          </h2>
          <p className="italic text-lg text-gray-300">
            Not Sure Where to Invest? Let Our AI Guide You!
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-200">
            <li>Interactive AI-powered chatbot to analyze user risk appetite & goals.</li>
            <li>Offers personalized investment recommendations in real-time.</li>
            <li>Conversational UX to increase engagement & lead conversion.</li>
          </ul>
          <button className="mt-4 bg-blue-100 text-[#082654] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200">
            Chat with AI Now
          </button>
        </div>

       
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/ai.png" 
            alt="AI Chatbot Illustration"
            className="max-w-full w-[90%] md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
