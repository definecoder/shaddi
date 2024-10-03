import { DashboardShowcase } from "./components/Homepage/DashboardShowcase";
import { FooterSection } from "./components/Homepage/FooterSection";
import { HeroSection } from "./components/Homepage/HeroSection";
import { MobileMockupSection } from "./components/Homepage/MobileMockupSection";
import { RoadMapSection } from "./components/Homepage/RoadMapSection";
import { Stats } from "./components/Homepage/Stats";
import { SurveySection } from "./components/Homepage/SurveySection";

export default function Home() {
  return (
    <div className="w-full overflow-auto main-scrollbar-hide">
      <HeroSection />
      <SurveySection />
      <Stats />
      <DashboardShowcase />
      <MobileMockupSection />
      <RoadMapSection />
      <FooterSection />
    </div>
  );
}
