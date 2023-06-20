import React from "react";
import imgFormDark from "../assets/darkBackground.jpg";
import imgForm from "../assets/lightBackground.jpg";
import Form from "./Form";


function Contact() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="contact" className="contact container mx-auto py-24 px-6">
      <h2 className="text-center text-4xl md:text-5xl pb-16">
        CONTACT ME
      </h2>
      <div
        className={`form-container bg-black w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 ${
          darkMode && "bg-white"
        }`}
      >
        <Form />
    
        <div className="form-img w-full h-full ">
          {darkMode ? (
            <img src={imgFormDark} alt="form image" className="h-full" />
          ) : (
            <img src={imgForm} alt="form image" className="h-full" />
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
