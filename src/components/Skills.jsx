import React from "react";
import { Icon } from "@iconify/react";

function Skills() {
  return (
    <section className="skills container mx-auto py-24">
      <h2 className="text-center text-4xl md:text-5xl py-4">SKILLS</h2>
      <div className="skills-container overflow-x-scroll flex items-center justify-between py-10 gap-20">
        <a
          href="https://developer.mozilla.org/es/docs/Web/HTML"
          target="_blank"
        >
          <Icon icon="ri:html5-fill" style={{ fontSize: "67px" }} />
        </a>
        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
          <Icon icon="simple-icons:css3" style={{ fontSize: "60px" }} />
        </a>
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="_blank"
        >
          <Icon icon="fa6-brands:js" style={{ fontSize: "60px" }} />
        </a>
        <a href="https://nodejs.org/en" target="_blank">
          <Icon icon="bxl:nodejs" style={{ fontSize: "60px" }} />
        </a>
        <a href="https://es.react.dev/" target="_blank">
          <Icon icon="mdi:react" style={{ fontSize: "60px" }} />
        </a>
        <a href="https://getbootstrap.com/" target="_blank">
          <Icon icon="ri:bootstrap-fill" style={{ fontSize: "60px" }} />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <Icon icon="mdi:tailwind" style={{ fontSize: "60px" }} />
        </a>
        <a href="https://www.figma.com/" target="_blank">
          <Icon icon="solar:figma-bold" style={{ fontSize: "60px" }} />
        </a>
      </div>
    </section>
  );
}

export default Skills;
