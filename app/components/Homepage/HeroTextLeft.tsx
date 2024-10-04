import Link from "next/link";
import { Logo } from "./assets/Logo";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const HeroTextLeft = () => {
  return (
    <div className="flex flex-col pt-[15vh] md:pt-[20vh] pb-[45vh] md:pb-[30vh] px-[8vw] w-full md:w-[60vw] min-h-[80vh]">
      <div className="w-[70%] md:w-[345px]">
        <Logo />
      </div>
      <h1 className="mt-6 text-3xl md:text-5xl text-black">
        The Wedding Planning Hub
      </h1>      
      <p
        className={
          "text-[#AE3A8E] mt-4 font-semibold w-full md:w-[75%] text-md md:text-lg"
        }
      >
        From budget planning to finding the right vendors, we’ve got you
        covered.
      </p>
      <Link
        href="#footer"
        className={
          "bg-[#AE3A8E] text-white text-sm md:text-lg rounded-md py-2 md:py-3 px-8 md:px-10 mt-4 w-fit hover:cursor-pointer z-50 " +
          dmSans.className
        }
      >
        Become a vendor
      </Link>
    </div>
  );
};
