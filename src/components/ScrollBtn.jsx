import React, { useEffect, useState, useContext } from "react";
import { Icon } from "@iconify/react";
import ThemeContext from "../context/ThemeContext";

function ScrollBtn() {
  const { darkMode } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  /**
   * The function checks if the user has scrolled down at least 500 pixels and sets a visibility flag
   * accordingly.
   */
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setVisible(scrollTop >= 500);
  };

  /**
   * The function `handleScrollToTop` scrolls the window to the top.
   */
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    /**
     * This function adds an event listener for scrolling and removes it when the component unmounts.
     */
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className={`scroll-btn p-1 z-10 border fixed bottom-10 right-10  ${
        visible ? "block" : "hidden"
      } ${darkMode ? "bg-white text-black border-black" : "text-white bg-black border-white"}`}
    >
      <Icon icon="bytesize:caret-top" style={{ fontSize: "50px" }} />
    </button>
  );
}

export default ScrollBtn;
