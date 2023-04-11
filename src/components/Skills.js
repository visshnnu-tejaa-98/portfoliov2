import React, { useContext } from "react";
import Title from "./Title";
import FolioContext from "../contexts/folioContext";
import darkGreenCodeIcon from "../assets/dark/skills/green_code.svg";
import lightGreenCodeIcon from "../assets/light/skills/green_code.svg";
import { skills } from "../utils/skills";

const Skills = () => {
  const folioCtx = useContext(FolioContext);
  return (
    <div className="h-[100vh] dark:bg-[#0F172A] flex justify-center items-center flex-col">
      <div className="relative">
        <Title
          title="Known Tech Stack"
          lightThemeTextColor="#1E293B"
          darkThemeTextColor="#dddddd"
          lightThemeBlockColor="#4D7C0F"
          darkThemeBlockColor="#D9F99D"
          blockWidth="200px"
        />
        <img
          src={folioCtx.isDarkTheme ? darkGreenCodeIcon : lightGreenCodeIcon}
          alt="darkGreenCodeIcon"
          className="opacity-75 absolute top-[-1rem] left-[-5rem] rotate-[150deg]"
        />
      </div>
      <div className="block py-10">
        <div className="flex justify-center flex-wrap gap-10 w-[80%] mx-auto">
          {skills.map((skill, idx) => (
            <span className=" hover:scale-[1.2] duration-200" key={idx}>
              {folioCtx.isDarkTheme
                ? skill.darkThemeIcon
                : skill.lightThemeIcon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
