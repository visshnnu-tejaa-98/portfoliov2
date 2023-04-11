import React, { useContext, useState } from "react";
import "flowbite";
import { Link, NavLink, Outlet } from "react-router-dom";
import FolioContext from "../contexts/folioContext";
import Skills from "../assets/skills.png";
import {
  githubURL,
  instagram,
  linkedInURL,
  twitterURL,
} from "../utils/constants";

const NavLayout = () => {
  const folioCtx = useContext(FolioContext);
  return (
    <div className={`${folioCtx.isDarkTheme ? "dark" : ""}`}>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex absolute right-[1rem] items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-[20vw] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#F5F5F4] dark:bg-[#192645] relative">
          <div className="flex justify-center">
            <img src={Skills} alt="skills" className="h-[8.5rem] py-3" />
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">home</span>
                <span className="ml-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">code</span>
                <span className="ml-3">Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">
                  import_contacts
                </span>
                <span className="ml-3">Education</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">timeline</span>
                <span className="ml-3">Experience</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">deployed_code</span>
                <span className="ml-3">Projects</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/contact"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">call</span>
                <span className="ml-3">Contact</span>
              </NavLink>
            </li> */}
          </ul>
          <div className="absolute bottom-10 w-[90%] mx-auto">
            <div className="flex justify-around items-center text-lg">
              <Link to={githubURL} target="_blank">
                <i className="fab fa-github hover:scale-110 duration-200 hover:duration-200 cursor-pointer"></i>
              </Link>
              <Link to={linkedInURL} target="_blank">
                <i className="fab fa-linkedin-in hover:scale-110 duration-200 hover:duration-200 cursor-pointer"></i>
              </Link>
              <Link to={twitterURL} target="_blank">
                <i className="fab fa-twitter hover:scale-110 duration-200 hover:duration-200 cursor-pointer"></i>
              </Link>
              <Link to={instagram} target="_blank">
                <i className="fab fa-instagram hover:scale-110 duration-200 hover:duration-200 cursor-pointer"></i>
              </Link>
              <Link to={""}>
                <i className="far fa-envelope hover:scale-110 duration-200 hover:duration-200 cursor-pointer"></i>
              </Link>
              <Link to={""}>
                <i className="fas fa-phone-alt hover:scale-110 duration-200 hover:duration-200 cursor-pointer"></i>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      <div className="sm:w-[80vw] sm:fixed sm:left-[20vw] top-0 h-[100vh]">
        <Outlet />
      </div>

      <div className="absolute top-[2rem] right-[2rem]">
        <div
          className="w-[40px] h-[40px] rounded-full bg-yellow-500 flex justify-center items-center cursor-pointer"
          onClick={folioCtx.toggleTheme}
        >
          {folioCtx.isDarkTheme ? (
            <span className="material-symbols-outlined">light_mode</span>
          ) : (
            <span className="material-symbols-outlined">dark_mode</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavLayout;
