import React from "react";
import Slider from "./Slider";

function Projects({ darkMode }) {

  return (
    <section id="projects" className="container mx-auto py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl py-4">PROJECTS</h2>

      <Slider darkMode={darkMode}/>
    </section>
  );
}

export default Projects;
