import Image from "next/image";
import { LogoVerticalBig } from "./assets/LogoVerticalBig";

export const DashboardShowcase = () => {
  return (
    <>
      <Image
        src="https://s3-alpha-sig.figma.com/img/a48f/9bce/e4f4dac52bdf7f5cf34f7802ab64fba1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=STm70PvY1KnKgh1tIQuOaSnzYHrgzjqVD6v1cTtBxx5lqNHN4HKKRg3hIqSH6LkKndVMRUkgxBAXO6AWcY53J9-hDI3ATrb0OCxqVlnRQ60~85w4fAVbz-4VY~6Hj-RMuhjysBdxd04omqOMQZpCMuVdEpD6SU7s8yCJuorZb0q~1PdMyRTbww6qRktHtmUZ6ZjU14MdB9zYsEGcdyMWNIZHIW~i4gGdXaj77k7pCUQaAgtIaqJBTFAjXBqlIpdh66v0ljB~jQVD8NkDtGavX489Oomohb0IQmnOmTH6jKZ1c-QDAEih3gcRyICYA7sPQixbsO3LyYi4F6yTdKOagg__"
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
        </div>
      </div>
    </>
  );
};
