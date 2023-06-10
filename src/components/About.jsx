import React from "react";
import mainImg from "../assets/main image.jpg";
import mainImgDark from "../assets/mainImageDM.png"
import { Icon } from "@iconify/react";

function About({ darkMode }) {
  return (
    <section className="about px-2 md:px-0  py-24 container mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <article className="left-side w-full">
        <div className="main-info w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl pb-6 md:pb-2 text-center md:text-left">
            FRONTEND DEVELOPER
          </h1>
          <p
            className={`
            text-xl md:text-2xl pb-2 text-center md:text-left
            ${darkMode && "dm-text-white"}`}
          >
            Front end developer is what I do. With the purpose of developing more sophisticated projects, I wish to develop and learn more about the technologies I already know and those I don't. You can find some of the projects I've made in this web folder.
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
          {
            darkMode ? <img
            className="aspect-square object-cover w-full h-full"
            src={mainImgDark}
            alt="main image"
          /> : <img
          className="aspect-square object-cover w-full h-full"
          src={mainImg}
          alt="main image"
        />
          }
        </div>
      </div>
    </section>
  );
}

export default About;
