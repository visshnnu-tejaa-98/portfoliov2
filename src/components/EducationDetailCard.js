import React from "react";

const EducationDetailCard = ({ detail, lastDetail }) => {
  return (
    <div className="text-[#27272A] dark:text-[#cccccc]">
      <div className="relative flex items-center gap-5 left-[-0.7rem]">
        <div className="w-[25px] h-[25px] bg-[#9D174D] opacity-75 dark:bg-[#F9A8D4] rounded-full"></div>
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
            <p className="lg italic">
              {detail.specialization}, {detail.institute}
            </p>
            <p className="lg italic">
              {detail.place}, {detail.state}
            </p>
          </div>
          <ul className="py-3">
            {detail.keyHighlights.map((item, idx) => (
              <li className="flex gap-3" key={idx}>
                <span>-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-md italic">
            <span>{detail.grade.includes("%") ? "Percentage" : "GPA"}:</span>
            <span> {detail.grade}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetailCard;
