import React from "react";
import Title from "./Title";
import { EducationDetails } from "../utils/educationDetails";
import EducationDetailCard from "./EducationDetailCard";

export const Education = () => {
  return (
    <div className="h-[100vh] py-10 dark:bg-[#0F172A] overflow-auto">
      <div className="flex justify-center items-center flex-col py-5">
        <Title
          title="Education"
          lightThemeTextColor="#1E293B"
          darkThemeTextColor="#dddddd"
          lightThemeBlockColor="#9D174D"
          darkThemeBlockColor="#F9A8D4"
          blockWidth="150px"
        />
      </div>
      <div className="px-[15%]">
        {EducationDetails.map((detail, idx) => (
          <EducationDetailCard
            detail={detail}
            key={idx}
            lastDetail={EducationDetails.length - 1 !== idx}
          />
        ))}
      </div>
    </div>
  );
};
