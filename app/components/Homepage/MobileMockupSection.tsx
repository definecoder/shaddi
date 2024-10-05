import Image from "next/image";

export const MobileMockupSection = () => {
  return (
    <div className="md:my-6">
      <div className="md:hidden marquee-container">
        <div className="marquee">
          <Image
            src={"/mobilemockup1.png"}
            alt="Image 1"
            width={335}
            height={680}
            className="marquee-image"
          />
          <Image
            src={"/mobilemockup2.png"}
            alt="Image 2"
            width={335}
            height={680}
            className="marquee-image"
          />
          <Image
            src={"/mobilemockup3.png"}
            alt="Image 3"
            width={335}
            height={680}
            className="marquee-image"
          />
        </div>
      </div>
      <div className="hidden md:flex justify-evenly">
        <Image
          src={"/mobilemockup1.png"}
          alt="Image 1"
          width={335}
          height={680}
        />
        <Image
          src={"/mobilemockup2.png"}
          alt="Image 2"
          width={335}
          height={680}
        />
        <Image
          src={"/mobilemockup3.png"}
          alt="Image 3"
          width={335}
          height={680}
        />
      </div>
    </div>
  );
};
