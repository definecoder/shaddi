// import Link from "next/link";
"use client";

export const RoadMapSection = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-[#AE3A8E] text-3xl font-semibold text-center mt-16 mb-8 w-5/6 md:w-2/3">
          Our customers will have access to the all-in-one toolkit that makes
          wedding planning a breeze!
        </div>
        <div className="text-2xl text-center mb-16 w-5/6 md:w-2/3">
          Easily filter and find what vendors you are looking for, ones that fit
          your criteria & budget, allowing for a less stressful planning
          process.
        </div>
      </div>
      <div className="grid gap-4 grid-cols-4 md:grid-cols-3 items-center text-center px-4 lg:px-16 xl:px-20 2xl:px-24 mb-8">
        <div className="h-1 bg-[#AE3A8E]"></div>
        <div className="text-3xl md:text-4xl xl:text-5xl col-span-2 md:col-span-1">
          Our Roadmap
        </div>
        <div className="h-1 bg-[#AE3A8E]"></div>
      </div>
      <div className="flex flex-col items-start py-20 px-12 md:px-20 overflow-x-scroll">
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold text-[#AE3A8E]">1</div>
          <div className="flex flex-col gap-2">
            <div className="text-[#AE3A8E] font-bold text-3xl">
              Market Research
            </div>
            <div className="text-left text-xl md:text-2xl max-w-[60vw] md:max-w-[50vw]">
              We’ve identified the problem and thought of a solution that will
              revolutionise the gap in the market
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-4">
          <div className="w-1.5 h-2.5 bg-[#AE3A8E] rounded-lg"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="w-1.5 h-5 bg-[#AE3A8E] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-2.5 bg-[#AE3A8E] rounded-lg"></div>
        </div>
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold text-[#AE3A8E]">2</div>
          <div className="flex flex-col gap-2">
            <div className="text-[#AE3A8E] font-bold text-3xl">Design</div>
            <div className="text-left text-xl md:text-2xl max-w-[60vw] md:max-w-[55vw]">
              With the customer experience and simplicity of use at heart, the
              marketplace has been designed by leading business accelerator
              <img
                src="https://s3-alpha-sig.figma.com/img/225f/96e2/51871ec6a030c7401cd68b447010ea40?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CCJ8iGawXnPy3JdYsCtw9Rfw8GYgsvkfYeGDds73CE3BLey0RR~3rYj9F524Yp5rzucnfGv7dCdwOy4gQl67iIqHap5OkbJq3uUkV1R~VURJWAbQLanre45IXsDGPe82hABpEgu0uzWHILQmAU2UaLwiIEZmhDiXMO3HiI19Ml1hDd89CYp-PxrK1NSJ3Fq73UXmHZky2uYyxIedXJaR-RLZ02rBwcrUP0ckXKj8ldqb9u2ObqFcfJv5iXEf99XjrJuqh-KtDwFA2cY0~KPjYMF95kz6sAdqBnlwi4Fki7HjHQRvJyv00F1rlowvqMV3hKzChrX0n4Pphj0Zekepow__"
                alt="hyper-logo"
                className="w-16 md:w-24 h-auto inline-block ml-4"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-6 -mb-20">
          <div className="w-1.5 h-2 bg-[#AE3A8E] rounded-lg"></div>
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="w-1.5 h-4 bg-[#AE3A8E] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-2 bg-[#AE3A8E] rounded-lg"></div>
        </div>
        <div className="flex gap-8 md:gap-12 items-center">
          <div className="text-8xl font-semibold">3</div>
          <div className="bg-[#F9D733] px-[4vw] py-[5vh] rounded-xl min-w-[230px] md:min-w-[280px] max-w-[40vw]">
            <div className="text-2xl md:text-3xl font-bold">Development</div>
            <div className="text-md md:text-2xl">
              We are ready to go into building phase!
            </div>
            <div className="w-full flex justify-between py-2 my-[3vh]">
              <div className="w-[2.75%] h-1 bg-[#AE3A8E30] rounded-lg"></div>
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  className="w-[5.5%] h-1 bg-[#AE3A8E30] rounded-lg"
                  key={i}
                ></div>
              ))}
              <div className="w-[2.75%] h-1 bg-[#AE3A8E30] rounded-lg"></div>
            </div>
            <p className="font-bold text-xl md:text-3xl">
              Want to learn more or become an investor?
            </p>
            <button
              className="w-full px-6 py-4 text-xl md:text-2xl rounded-xl bg-white mt-8"
              onClick={() => {
                window.location.href = "mailto:hello@theshaadipages.com";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-6 py-2 -mt-20">
          <div className="w-1.5 h-2 bg-[#AE3A8E50] rounded-lg"></div>
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="w-1.5 h-4 bg-[#AE3A8E50] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-2 bg-[#AE3A8E50] rounded-lg"></div>
        </div>
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold">4</div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl">Soft launch</div>
            <div className="text-left text-xl md:text-2xl max-w-[60vw] md:max-w-[50vw]">
              We can only do this with your help - the vendors - so sign up now
              to be a part of something special!
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-6 py-2">
          <div className="w-1.5 h-2 bg-[#AE3A8E50] rounded-lg"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="w-1.5 h-4 bg-[#AE3A8E50] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-2 bg-[#AE3A8E50] rounded-lg"></div>
        </div>
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold">5</div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl">Go Live!</div>
            <div className="text-left text-xl md:text-2xl max-w-[60vw] md:max-w-[50vw]">
              We aim to go live early next year to customers, and we will go big
              with a largescale & effective go-to market plan
            </div>
          </div>
        </div>
        <div className="h-[5vh]"></div>
      </div>
    </>
  );
};
