import React from "react";

const ExperienceDetailsCard = ({ detail, lastDetail }) => {
  return (
    <div className="text-[#27272A] dark:text-[#cccccc]">
      <div className="relative flex items-center gap-5 left-[-0.7rem]">
        <div className="w-[25px] h-[25px] bg-[#0F766E] opacity-75 dark:bg-[#5EEAD4] rounded-full"></div>
        <div className="font-semibold italic">
          {detail.from} - {detail.to}
        </div>
      </div>
      <div
        className={`${
          lastDetail && "border-l-2"
        } border-dashed border-[#cccccc] p-3 pb-12`}
      >
        <div className="w-[100%] bg-slate-100 dark:bg-[#0A2647] ml-3 rounded p-3">
          <h3 className="text-2xl font-semibold dark:text-[#eeeeee]">
            {detail.title}
          </h3>
          <div className="flex justify-between">
            <p className="lg italic">{detail.companyName}</p>
            <p className="lg italic">
              {detail.place}, {detail.state}
            </p>
          </div>
          <ul className="py-3">
            {detail.achievements.map((item, idx) => (
              <li className="flex gap-3" key={idx}>
                <span>-</span>
                <span>{item}</span>
              </li>
            ))}
            {detail.imp && (
              <li className="flex gap-3 text-red-600 text-[#0F766E] dark:text-[#5EEAD4] flex items-center py-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F766E] dark:bg-[#5EEAD4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0F766E] dark:bg-[#5EEAD4]"></span>
                </span>
                <span className="blink_me">{detail.imp}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailsCard;
