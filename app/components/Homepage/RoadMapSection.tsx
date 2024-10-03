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
      <div className="flex flex-col items-start py-28 px-20">
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold text-[#AE3A8E]">1</div>
          <div className="flex flex-col gap-2">
            <div className="text-[#AE3A8E] text-3xl">Market Research</div>
            <div className="text-2xl max-w-[50vw]">
              We’ve identified the problem and thought of a solution that will
              revolutionise the gap in the market
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-4">
          <div className="w-1.5 h-3 bg-[#AE3A8E] rounded-lg"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="w-1.5 h-6 bg-[#AE3A8E] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-3 bg-[#AE3A8E] rounded-lg"></div>
        </div>
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold text-[#AE3A8E]">2</div>
          <div className="flex flex-col gap-2">
            <div className="text-[#AE3A8E] text-3xl">Design</div>
            <div className="text-2xl max-w-[50vw]">
              With the customer experience and simplicity of use at heart, the
              marketplace has been designed by leading business accelerator
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-6 -mb-20">
          <div className="w-1.5 h-3 bg-[#AE3A8E] rounded-lg"></div>
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="w-1.5 h-6 bg-[#AE3A8E] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-3 bg-[#AE3A8E] rounded-lg"></div>
        </div>
        <div className="flex gap-8 md:gap-12 items-center">
          <div className="text-8xl font-semibold">3</div>
          <div className="bg-[#F9D733] px-[4vw] py-[5vh] rounded-xl min-w-[280px] max-w-[40vw]">
            <div className="text-2xl md:text-3xl font-bold">Development</div>
            <div className="text-lg md:text-2xl">
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
            <p className="font-bold text-2xl md:text-3xl">
              Want to learn more or become an investor?
            </p>
            <button className="w-full px-auto py-4 text-xl md:text-2xl rounded-xl bg-white mt-8">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-6 py-2 -mt-20">
          <div className="w-1.5 h-3 bg-[#AE3A8E50] rounded-lg"></div>
          {Array.from({ length: 9 }).map((_, i) => (
            <div className="w-1.5 h-6 bg-[#AE3A8E50] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-3 bg-[#AE3A8E50] rounded-lg"></div>
        </div>
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold">4</div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl">Soft launch</div>
            <div className="text-2xl max-w-[50vw]">
              We can only do this with your help - the vendors - so sign up now
              to be a part of something special!
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-6 py-2">
          <div className="w-1.5 h-3 bg-[#AE3A8E50] rounded-lg"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="w-1.5 h-6 bg-[#AE3A8E50] rounded-lg" key={i}></div>
          ))}
          <div className="w-1.5 h-3 bg-[#AE3A8E50] rounded-lg"></div>
        </div>
        <div className="flex gap-12 items-center">
          <div className="text-8xl font-semibold">5</div>
          <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl">Go Live!</div>
            <div className="text-2xl max-w-[50vw]">
              We aim to go live to customers by November this year and we will
              go big with a largescale & effective go-to market plan
            </div>
          </div>
        </div>
        <div className="h-[5vh]"></div>
      </div>
    </>
  );
};
