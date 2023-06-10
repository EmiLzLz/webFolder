import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export default function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm); // initial state form
  const [errors, setErrors] = useState({}); // errors state
  const [response, setResponse] = useState(null); // response state

  /**
   * The handleChange function updates the form state with the new value of the input field.
   * @param e - The parameter `e` is an event object that is passed to the `handleChange` function. It
   * contains information about the event that triggered the function, such as the target element and
   * the type of event.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  /**
   * The function handles the blur event of an input field, triggers a change event and validates the
   * form, setting any errors.
   * @param e - The parameter "e" is an event object that is passed to the function when it is called.
   * It contains information about the event that triggered the function, such as the target element,
   * the type of event, and any additional data related to the event.
   */
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  /**
   * This function handles form submission and sends the form data to a specified endpoint if there are
   * no errors.
   * @param e - The "e" parameter is an event object that is passed to the handleSubmit function when
   * the form is submitted. It is used to prevent the default form submission behavior and handle the
   * form submission manually.
   * @returns If the `Object.keys(errors).length` is not equal to 0, then nothing is returned. If it is
   * equal to 0, then the form data is sent to the specified URL using the `helpHttp()` function and a
   * success message is displayed.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    //* if error object has not properties
    if (Object.keys(errors).length === 0) {
      alert("Sending form");
      helpHttp()
        .post("https://formsubmit.co/ajax/emiliano.ll289@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 50000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
