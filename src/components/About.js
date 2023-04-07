import React, { useContext } from "react";
import darkYellowArrow from "../assets/dark/about/yellow-spiral-arrow.svg";
import darkYellowEndLines from "../assets/dark/about/yellow_two-lines.svg";
import lightYellowArrow from "../assets/light/about/yellow-spiral-arrow.svg";
import lightYellowEndLines from "../assets/light/about/yellow_two-lines.svg";
import FolioContext from "../contexts/folioContext";
import Title from "./Title";

const About = () => {
  const folioCtx = useContext(FolioContext);
  return (
    <div className="h-[100vh] dark:bg-[#0F172A] flex justify-center items-center flex-col">
      <Title
        title="About Me"
        lightThemeTextColor="#1E293B"
        darkThemeTextColor="#dddddd"
        lightThemeBlockColor="#CA8A04"
        darkThemeBlockColor="#FDE047"
        blockWidth="150px"
      />
      <div className="w-[70%] mx-auto py-5 relative">
        <img
          src={folioCtx.isDarkTheme ? darkYellowArrow : lightYellowArrow}
          alt="arrow img"
          className="absolute opacity-75 rotate-90 left-[-5rem] top-[-1rem]"
        />
        <p className="text-[#27272A] dark:text-[#cccccc] py-3 text-lg">
          Mission-driven full stack developer with a passion for building a
          product that solves problem with thoughtful UI design, creating
          intuitive, dynamic user experiences powered by strong backend.
        </p>
        <p className="text-[#27272A] dark:text-[#cccccc] py-3 text-lg">
          My core competency lies in creating applications from its inception.I
          primarily work in MERN stack among the full stack technologies.
        </p>
        <p className="text-[#27272A] dark:text-[#cccccc] py-3 text-lg">
          As a full stack developer, I enjoy using my obsessive attention to
          detail, my unequivocal love for making things, and my mission-driven
          work ethic to literally change the world.
        </p>
        <img
          src={folioCtx.isDarkTheme ? darkYellowEndLines : lightYellowEndLines}
          alt="arrow img"
          className="absolute opacity-75 right-0"
        />
      </div>
    </div>
  );
};

export default About;
