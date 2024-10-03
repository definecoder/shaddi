import { SkillPercentage } from "./assets/SkillPercentage";

export const SurveySection = () => {
  return (
    <div className="w-full bg-[#3E2362] flex flex-col py-24 px-8 items-center gap-6 text-white">
      <div className="w-full md:w-[70%] xl:w-[55%]">
        <div className="text-xl md:text-3xl font-semibold">
          The Top Three Problems that Engaged Couples Struggle with are:
        </div>
        <div className="mt-2 text-lg md:text-2xl text-[#9E91B0]">
          Survey conducted by Statista UK
        </div>
      </div>
      <div className="w-full md:w-[70%] xl:w-[55%] py-3">
        <h1 className="text-lg md:text-2xl">Staying within budget</h1>
        <SkillPercentage percentage={100} />
      </div>
      <div className="w-full md:w-[70%] xl:w-[55%] py-3">
        <h1 className="text-lg md:text-2xl">Not knowing about costs</h1>
        <SkillPercentage percentage={79} />
      </div>
      <div className="w-full md:w-[70%] xl:w-[55%] py-3">
        <h1 className="text-lg md:text-2xl">Not knowing where to start</h1>
        <SkillPercentage percentage={74} />
      </div>
    </div>
  );
};
