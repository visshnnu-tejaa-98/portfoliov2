import React from "react";
import developmentCycle from "../assets/development cycle.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100vh] dark:bg-[#0F172A] flex justify-center items-start flex-col p-10">
      <div className="relative">
        <p className="text-xl">Hello 👋</p>
        <h1 className="text-4xl">
          I'm <span className="text-5xl font-semibold">Visshnnu Tejaa</span>
        </h1>
        <p className="py-3 text-[aaaaaa] dark:text-[#cccccc] absolute right-0">
          -- A Web Developer
        </p>
      </div>
      <div className="">
        <img
          src={developmentCycle}
          alt="Development Cycle"
          className="w-[20vw] absolute right-4 bottom-4 z-100"
        />
      </div>
      <div className="pt-16 flex items-center gap-5">
        <Link to="/projects">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 btn">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-3">
              <span className="material-symbols-outlined">deployed_code</span>
              <span>Projects</span>
            </span>
          </button>
        </Link>
        <Link
          to="https://drive.google.com/file/d/1XeEhTyrcUmORpE-egx8mVYBotebg09HN/view?usp=share_link"
          target="_blank"
        >
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-3">
              <span>Resume</span>
              <span class="material-symbols-outlined">open_in_new</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
