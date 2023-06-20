import React from "react";
import { Icon } from "@iconify/react";
import useForm from "../hooks/useForm";

/* `const initialForm` is an object that initializes the form fields with empty strings. It is used as
the initial state for the form in the `useForm` hook. */
const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/**
 * The function validates a form by checking if the input fields meet certain criteria and returns an
 * object containing any errors.
 * @returns The function `validationsForm` returns an object `errors` that contains any validation
 * errors found in the input `form`. The keys of the `errors` object correspond to the input fields
 * that have validation errors, and the values of the keys are error messages explaining what went
 * wrong with the input. If there are no validation errors, the `errors` object will be empty.
 */
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  let regexMessage = /^.{1,250}$/;

  if (!form.name.trim()) {
    errors.name = "A name is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Name accepts words and spaces only";
  }

  if (!form.email.trim()) {
    errors.email = "An email is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Something's wrong with the email";
  }

  if (!form.subject.trim()) {
    errors.subject = "A subject is required";
  }

  if (!form.message.trim()) {
    errors.message = "A message is required";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "Message accepts 250 characters only";
  }

  return errors;
};

function Form() {
  const { darkMode } = useContext(ThemeContext);

  const { form, errors, response, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm, validationsForm);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full relative flex flex-col items-center gap-4 pb-8 pt-8 px-2 md:px-0"
    >
      <div className="form-group w-full flex flex-col items-center gap-14 py-12">
        <input
          className={`border bg-transparent rounded-sm w-full md:w-4/5 py-2 px-2 ${
            darkMode ? "border-black text-black  bg-transparent" : "text-white"
          }`}
          type="text"
          name="name"
          id="name"
          placeholder="Your name..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && (
          <p
            className={`error absolute px-1 mx-auto top-10 border border-red-500 rounded-sm ${
              darkMode ? "text-gray-950" : "text-white"
            }`}
          >
            {errors.name}
          </p>
        )}
        <input
          className={`relative border bg-transparent rounded-sm w-full md:w-4/5 py-2 px-2 ${
            darkMode ? "border-black text-black" : "text-white"
          }`}
          type="email"
          name="email"
          id="email"
          placeholder="Your email..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && (
          <p
            className={`error absolute px-1 mx-auto top-36 border border-red-500 rounded-sm ${
              darkMode ? "text-black" : "text-white"
            }`}
          >
            {errors.email}
          </p>
        )}
        <input
          className={`relative border bg-transparent rounded-sm w-full md:w-4/5 py-2 px-2 ${
            darkMode ? "border-black text-black" : "text-white"
          }`}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && (
          <p
            className={`error absolute px-2 mx-auto top-60 border border-red-500 rounded-sm ${
              darkMode ? "text-black" : "text-white"
            }`}
          >
            {errors.subject}
          </p>
        )}
        <textarea
          className={`relative border bg-transparent rounded-sm w-full md:w-4/5 py-2 px-2 ${
            darkMode ? "border-black text-black" : "text-white"
          }`}
          name="message"
          id="message"
          placeholder="Message..."
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.message}
          required
        ></textarea>
        {errors.message && (
          <p
            className={`error absolute px-1 mx-auto bottom-52 border border-red-500 rounded-sm ${
              darkMode ? "text-black" : "text-white"
            }`}
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className={`
          px-2 py-1 border w-2/5 text-lg border-white bg-[#080705] text-white flex items-center justify-center font-bold gap-1
          ${darkMode && "dm-buttons"}`}
      >
        <Icon icon="mdi:email-send" style={{ fontSize: "30px" }} />
        SEND
      </button>
      {response && (
        <p className="w-4/5 p-3 text-center bg-[#64ffa5] border-2 border-[#23CE6B] rounded-md">
          The form was send it!
        </p>
      )}
    </form>
  );
}

export default Form;
