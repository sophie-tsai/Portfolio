import React, { useRef } from "react";
import "./ContactForm.css";

function ContactForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  function postData(event) {
    event.preventDefault();

    const { value: name } = nameRef.current;
    const { value: email } = emailRef.current;
    const { value: subject } = subjectRef.current;
    const { value: message } = messageRef.current;

    const formData = {
      "entry.2005620554": name,
      "entry.1045781291": email,
      "entry.1145717750": subject,
      "entry.839337160": message,
    };

    //convert params into url query string
    let queryString = Object.keys(formData)
      .map((key) => key + "=" + formData[key])
      .join("&");

    fetch(
      `https://docs.google.com/forms/d/e/1FAIpQLScX31bf-Ko_Mvyxd1jBArbnVrUL1Fg92tKMEPfxVRNnS1bx5A/formResponse?${queryString}&submit=Submit`,
      {
        mode: "no-cors",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }
    );
  }

  return (
    <>
      <form
        className="contact-form"
        // action="https://docs.google.com/forms/d/e/1FAIpQLScX31bf-Ko_Mvyxd1jBArbnVrUL1Fg92tKMEPfxVRNnS1bx5A/formResponse"
        // method="post"
        id="contactData"
      >
        <span className="input-contact-info">
          <input
            type="text"
            className="input-contact-info-children"
            placeholder="name"
            name="entry.2005620554"
            ref={nameRef}
            required
          />
          <input
            type="email"
            className="input-contact-info-children"
            placeholder="email"
            name="entry.1045781291"
            ref={emailRef}
            required
          />
        </span>

        <input
          type="text"
          placeholder="subject"
          name="entry.1145717750"
          ref={subjectRef}
        />
        <br />
        <textarea
          rows="5"
          placeholder="message"
          name="entry.839337160"
          ref={messageRef}
          required
        />
        <br />
        <button className="button-submit" onClick={(event) => postData(event)}>
          submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
