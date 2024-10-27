import Image from "next/image";
import { LogoVerticalBig } from "./assets/LogoVerticalBig";

export const DashboardShowcase = () => {
  return (
    <>
      <Image
        src="/red-couple-bg.jpeg"
        alt="Dashboard Showcase"
        width={1920}
        height={1080}
        className="absolute z-[-1] object-cover"
      />
      <div className="aspect-w-16 aspect-h-9">
        <div className="red-mask w-full h-full flex flex-col justify-end md:justify-center items-center">
          <div className="w-[40%]">
            <LogoVerticalBig />
          </div>
          <h1 className="text-white text-md sm:text-lg md:text-xl xl:text-2xl mt-8 text-center w-[70%] md:w-[55%] lg:w-[40%]">
            Bringing together vendors and couples into a simple & friendly
            one-stop shop experience.
          </h1>
        </div>
      </div>
      <div className="bg-[#AA3727] w-full h-[250px] md:h-[400px]"></div>
      <Image
        src="/dashboardMockup.png"
        alt="Dashboard Mockup"
        width={1290.16}
        height={765}
        className="mt-[-180px] md:mt-[-400px] mx-auto"
      />
      <div className="flex flex-col items-center">
        <div className="text-[#AE3A8E] text-3xl font-semibold text-center mt-16 mb-8 w-5/6 md:w-1/2">
          Our vendors will have access to the South Asian market like never
          before!
        </div>
        <div className="text-2xl text-center mb-16 w-5/6 md:w-1/2">
          We’ll provide you with key marketing data insights, allowing you to
          maximise your bookings, push your brands, and get the reach and
          engagement you need for your business.
          <br />
          <strong>Free to sign up on with no monthly fees!</strong>
        </div>
      </div>
    </>
  );
};
