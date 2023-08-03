import React, { useContext }  from "react";
import mainImg from "../assets/main image.jpg";
import mainImgDark from "../assets/mainImageDM.png";
import ThemeContext from "../context/ThemeContext";
import { Icon } from "@iconify/react";

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="about px-2 md:px-0  py-24 container mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <article className="left-side w-full">
        <div className="main-info w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl pb-6 md:pb-2 text-center md:text-left w-full">
            WEB DEVELOPER
          </h1>
          <p
            className={`
            text-xl md:text-2xl pb-8 text-center md:text-left
            ${darkMode && "dm-text-white"}`}
          >
            Being a web developer, I have a strong interest in all things pertaining to the creation of websites and online applications. from the logic and code employed to the UX/UI design process.
            In a similar vein, I always strive to learn something new from the branches of science and technology that I find interesting.
          </p>
          <div className="social-links pt-6 md:p-3 w-full flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/EmiLzLz"
              target="_blank"
              className={`
              px-2 py-1 border border-white bg-[#080705] text-white flex items-center font-bold gap-1
              ${darkMode && "dm-buttons"}`}
            >
              <Icon icon="mdi:github" style={{ fontSize: "40px" }} />
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/emiliano-lopez-lopez"
              target="_blank"
              className={`
              px-2 py-1 border border-white bg-[#080705] text-white flex items-center font-bold gap-1
              ${darkMode && "dm-buttons"}`}
            >
              <Icon icon="bi:linkedin" style={{ fontSize: "36px" }} />
              LINKEDIN
            </a>
          </div>
        </div>
      </article>
      <div className="right-side w-full">
        <div className="container-img w-full md:w-4/5 h-4/5 md:h-auto mx-auto ">
          {darkMode ? (
            <img
              className="aspect-square object-cover w-full h-full"
              src={mainImgDark}
              alt="main image"
            />
          ) : (
            <img
              className="aspect-square object-cover w-full h-full"
              src={mainImg}
              alt="main image"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
