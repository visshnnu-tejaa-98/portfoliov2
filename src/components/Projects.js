import React from "react";
import Title from "./Title";
import { ProjectDetails } from "../utils/projectDetails";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className="h-[100vh] py-10 dark:bg-[#0F172A] overflow-auto">
      <div className="flex justify-center items-center flex-col py-5">
        <Title
          title="Projects"
          lightThemeTextColor="#1E293B"
          darkThemeTextColor="#dddddd"
          lightThemeBlockColor="#7E22CE"
          darkThemeBlockColor="#C084FC"
          blockWidth="120px"
        />
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-7">
        {ProjectDetails.map((detail, idx) => (
          <div
            className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left"
            key={idx}
          >
            <div
              className="flex h-[400px] w-full flex-col justify-end rounded-[10px] relative overflow-hidden drop-shadow-xl"
              style={{
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={detail.image}
                alt="AirMax Pro"
                className="object-cover w-full h-[300px] rounded-[10px] z-0 relative top-[-100px]"
              />
              <div className="absolute inset-[-10rem] card-gradient"></div>
              <div className="absolute left-0 bottom-0 p-4 text-left">
                <h1 className="text-xl text-white font-semibold">
                  {detail.name}
                </h1>
                <p className="text-gray-300 mt-2">{detail.description}</p>
                <div>
                  {detail.stack.map((item) => (
                    <span className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-1 py-0.5 text-center mr-2 mb-2 text-[10px]">
                      {item}
                    </span>
                  ))}
                </div>
                <div>
                  {detail.screenType.map((item) => (
                    <span className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-md text-sm px-1 py-0.5 text-center mr-2 mb-2 text-[10px]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    to={detail.liveURL}
                    target="_blank"
                    className="text-base text-white cursor-pointer mt-2 font-semibold hover:pl-2 duration-200"
                  >
                    View →
                  </Link>
                  <Link
                    to={detail.githubURL}
                    target="_blank"
                    className="text-base text-white cursor-pointer mt-2 font-semibold"
                  >
                    <i className="devicon-github-original text-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
