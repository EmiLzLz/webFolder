import React from "react";
import { Icon } from "@iconify/react";

//*Dentro del label van los iconos
function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="container mx-auto py-5 px-2 md:px-0">
      <nav className="w-full flex items-center justify-between">
        <h6 className="name text-xl text-center">EMILIANO LOPEZ</h6>
        <div
          className={`sections flex items-center gap-4 ${
            darkMode && "dm-text-white"
          }`}
        >
          <a href="#projects" className="font-extrabold">
            PROJECTS
          </a>
          <a href="#contact" className="font-extrabold">
            CONTACT
          </a>
        </div>
        <div
          className={`change-theme flex flex-col items-center overflow-hidden ${
            darkMode
              ? " text-white"
              : " text-black"
          }`}
        >
          <input
            type="checkbox"
            className="theme-btn opacity-0"
            id="checkbox"
            onChange={toggleDarkMode}
          />
          <label
            htmlFor="checkbox"
            className="theme-lbl w-24 h-10 rounded-full relative pt-2 pb-3 px-3 flex justify-between items-center"
          >
            <Icon
              icon="ph:sun-fill"
              style={{ fontSize: "30px", color: "white" }}
            />
            <Icon
              icon="solar:moon-stars-bold"
              style={{ fontSize: "25px", color: "black" }}
            />
            <span
              className={"ball bg-black w-8 h-8 absolute rounded-full"}
            ></span>
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
