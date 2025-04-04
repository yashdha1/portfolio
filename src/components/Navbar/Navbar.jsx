import React from "react";
import Dropdown from "./dropdown";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className="text-white flex items-center justify-between sticky top-0 z-50 backdrop:blur-lgh-full bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 m-0">
      <div className="inline-flex">
        <div>
          <a href="/">
            <img
              src={getImageUrl("hero/coding2.gif")}
              className="size-14 rounded-full"
              href="/"
            />
          </a>
        </div>
        <div className="px-4 py-3">
          <a
            className="font-Kanit text-lg font-semibold text-text no-underline"
            href="/"
          >
            Yash K Dhadod
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <Dropdown />
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-5 no-underline">
          <li>
            {/* <a
              href="#about"
              className="font-Akshar font-semibold relative text-xl bg-gray-800 py-2.5 px-5 text-white transition-colours before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:border-2 before:border-transparent before:hover:border-gray-800 before:hover:top-1 before:hover:left-1 before:z-10 before:transition-all"
            >
              About
            </a> */}
            <a
              href="#about"
              className="relative font-Akshar text-2xl font-semibold spacing  hover:border-gray-800 hover:top-1 hover:border-2 hover:transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="relative font-Akshar text-2xl font-semibold spacing hover:border-gray-800 hover:top-1 hover:border-2 hover:transition-all"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative font-Akshar text-2xl font-semibold spacing  hover:border-gray-800 hover:top-1 hover:border-2 hover:transition-all  "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative font-Akshar text-2xl font-semibold spacing hover:border-gray-800 hover:top-1 hover:border-2 hover:transition-all  "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
