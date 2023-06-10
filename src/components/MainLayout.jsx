import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import ScrollBtn from "./ScrollBtn";

function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className={`mainContainer ${darkMode ? "bg-black" : "light"}`}>
      <Header toggleDarkMode ={toggleDarkMode } darkMode={darkMode} />
      <ScrollBtn darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default MainLayout;
