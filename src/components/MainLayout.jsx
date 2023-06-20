import React  from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import ScrollBtn from "./ScrollBtn";

function MainLayout() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`mainContainer ${darkMode ? "bg-black" : "light"}`}>
      <Header />
      <ScrollBtn />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainLayout;
