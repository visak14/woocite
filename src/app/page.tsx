import CallToActionSection from "./components/Call";
import AIChatbotSection from "./components/ChatBot";
import Hero from "./components/Hero";
import InvestmentProducts from "./components/InvestmentProducts";
import KnowledgeHub from "./components/Knowledge";
import MarketSection from "./components/MarkSection";
import SecurityTrustSection from "./components/Security";
import SuccessStories from "./components/Success";
import VideoFeedSection from "./components/VideoFeed";
import WhyWealthplys from "./components/Wealth";

export default function Home() {
  return (
    <div >
     <Hero/>
     <MarketSection/>
     <WhyWealthplys/>
     <InvestmentProducts/>
     <AIChatbotSection/>
     <SuccessStories/>
     <VideoFeedSection/>
     <KnowledgeHub/>
    <SecurityTrustSection/>
    <CallToActionSection/>
    </div>
  );
}
