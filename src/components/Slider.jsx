import React, { useState, useContext } from "react";
import { projectsData } from "../helpers/projectsData";
import { Icon } from "@iconify/react";
import ThemeContext from "../context/ThemeContext";

function Slider() {
  const { darkMode } = useContext(ThemeContext);

  const [slider, setSlider] = useState(0);
  
  /* `const audioRef = React.createRef();` is creating a reference to an HTML audio element that is
  used to play a sound effect when the slider changes to the next or previous project. The reference
  is created using the `createRef()` method from the React library. This allows the audio element to
  be accessed and manipulated in the component's functions. */
  const audioRef = React.createRef();

  const prevProjectData = () => {
    setSlider((prevData) =>
      prevData === 0 ? projectsData.length - 1 : prevData - 1
    );
    /* `audioRef.current.play();` is playing an audio element that is referenced by `audioRef`. It is
    called when the slider changes to the next or previous project, and it plays a sound effect to
    indicate the change. The `play()` method is a built-in method of the HTML audio element that
    starts playing the audio. */
    audioRef.current.play();
  };

  const nextProjectData = () => {
    setSlider((prevData) =>
      prevData === projectsData.length - 1 ? 0 : prevData + 1
    );
    audioRef.current.play(); 
  };

  return (
    <>
      {projectsData.map((projectData, index) => (
        <div
          key={index}
          className={`slider-content ${
            index === slider
              ? "active w-full h-auto px-2 md:px-0 pb-10 md:p-2 grid grid-cols-1 md:grid-cols-2 content-center"
              : ""
          }`}
        >
          <div className="project-img w-4/5 h-4/5 m-auto">
            <img
              className={`aspect-square object-cover w-full h-full`}
              src={projectData.image}
              alt="project image"
            />
          </div>
          <div className="project-info pt-1 md:pt-0 w-full my-auto">
            <h3 className="text-2xl md:text-3xl pb-4 text-center">
              {projectData.name}
            </h3>
            <p
              className={`
            pb-3 text-xl text-justify
            ${darkMode && "dm-text-white"}`}
            >
              {projectData.description}
            </p>
            <div className="project-actions py-2 flex items-center justify-center gap-9 ">
              <a
                href={projectData.code}
                target="_blank"
                className={`
              px-2 py-1 border w-24 border-white bg-[#080705] text-white flex items-center font-bold gap-1
              ${darkMode && "dm-buttons"}`}
              >
                <Icon icon="iconoir:repository" style={{ fontSize: "25px" }} />
                CODE
              </a>
              <a
                href={projectData.view}
                target="_blank"
                className={`
              px-2 py-1 border w-24 border-white bg-[#080705] text-white flex items-center font-bold gap-1
              ${darkMode && "dm-buttons"}`}
              >
                <Icon icon="carbon:view-filled" style={{ fontSize: "25px" }} />
                VIEW
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-actions flex justify-center py-3 px-3 gap-20">
        <button
          onClick={prevProjectData}
          className={`
          px-2 py-1 border border-white bg-[#080705] text-white flex items-center font-bold gap-1
          ${darkMode && "dm-buttons"}`}
        >
          <Icon
            icon="grommet-icons:caret-previous"
            style={{ fontSize: "35px", flip: "horizontal" }}
          />
        </button>
        <button
          id="nextBtn"
          onClick={nextProjectData}
          className={`
          px-2 py-1 border border-white bg-[#080705] text-white flex items-center font-bold gap-1
          ${darkMode && "dm-buttons"}`}
        >
          <Icon icon="grommet-icons:caret-next" style={{ fontSize: "35px" }} />
        </button>
        <audio ref={audioRef}>
          <source src="/audio/slider_sound.wav" type="audio/mpeg" />
        </audio>
      </div>
    </>
  );
}

export default Slider;
