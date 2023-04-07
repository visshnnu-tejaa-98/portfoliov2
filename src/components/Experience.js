import React from "react";
import Title from "./Title";
import { ExperienceDetails } from "../utils/experienceDetails";
import ExperienceDetailsCard from "./ExperienceDetailsCard";

const Experience = () => {
  return (
    <div className="h-[100vh] py-10 dark:bg-[#0F172A] overflow-auto">
      <div className="flex justify-center items-center flex-col py-5">
        <Title
          title="Experience"
          lightThemeTextColor="#1E293B"
          darkThemeTextColor="#dddddd"
          lightThemeBlockColor="#0F766E"
          darkThemeBlockColor="#5EEAD4"
          blockWidth="150px"
        />
      </div>
      <div className="px-[15%]">
        {ExperienceDetails?.map((detail, idx) => (
          <ExperienceDetailsCard
            detail={detail}
            key={idx}
            lastDetail={ExperienceDetails.length - 1 !== idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
