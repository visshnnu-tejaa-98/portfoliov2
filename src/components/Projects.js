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
          lightThemeBlockColor="#9D174D"
          darkThemeBlockColor="#F9A8D4"
          blockWidth="150px"
        />
      </div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {ProjectDetails.map((detail) => (
          <div class="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
            <div
              class="flex h-[350px] w-full flex-col justify-end rounded-[10px] relative overflow-hidden"
              style={{
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={detail.image}
                alt="AirMax Pro"
                class="object-cover w-full h-[350px] rounded-[10px] z-0"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div class="absolute left-4 bottom-4 text-left">
                <h1 class="text-xl text-white font-semibold">{detail.name}</h1>
                <p class="text-gray-300 mt-2">{detail.description}</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={detail.liveURL}
                    target="_blank"
                    class="text-base text-white cursor-pointer mt-2 font-semibold"
                  >
                    View →
                  </Link>
                  <Link
                    to={detail.githubURL}
                    target="_blank"
                    class="text-base text-white cursor-pointer mt-2 mr-4 font-semibold"
                  >
                    <i class="devicon-github-original text-lg"></i>
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
