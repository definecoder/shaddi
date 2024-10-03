import { HeroSectionPromoImage } from "./assets/HeroSectionPromoImage";
import { Noksha1 } from "./assets/Noksha1";
import { Noksha2 } from "./assets/Noksha2";
import { HeroTextLeft } from "./HeroTextLeft";

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col bg-[#FFF9F9]">
      <div className="absolute top-0 right-0">
        <div className="w-[25vw] md:w-[210px]">
          <Noksha1 />
        </div>
      </div>
      <HeroTextLeft />
      <div className="relative mt-[-40vh] flex justify-between items-end w-full">
        <div className="w-[25vw] md:w-[240px]">
          <Noksha2 />
        </div>
        <div className="w-[60vw]">
          <HeroSectionPromoImage />
        </div>
      </div>
    </div>
  );
};
