export const SkillPercentage = ({ percentage }: { percentage: number }) => {
  return (
    <div className="w-full flex gap-2 mt-2">
      <div className="bg-[#654F81] rounded-xl flex-grow">
        <div
          className="bg-[#EDB93D] h-full w-full rounded-xl"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-[#EDB93D] font-semibold text-md md:text-xl w-16 text-right">{percentage} %</p>
    </div>
  );
};
