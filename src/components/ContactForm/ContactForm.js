import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitButtonText, setSubmitButtonText] = useState("submit");

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }

  function handleClick(event) {
    const { name, email, message } = formData;
    // TODO check if all are filled, if they are then prevent default and post
    if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
      event.preventDefault();
      setSubmitButtonText("sent!");
      postData();
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }

  function postData() {
    const { name, email, subject, message } = formData;

    const params = {
      "entry.2005620554": name,
      "entry.1045781291": email,
      "entry.1145717750": subject,
      "entry.839337160": message,
    };

    //convert params into url query string
    let queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
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
      <form className="contact-form" id="contactData">
        <span className="input-contact-info">
          <input
            type="text"
            className="input-contact-info-children"
            placeholder="name"
            name="entry.2005620554"
            onChange={handleChange}
            id="name"
            value={formData.name}
            required
          />
          <input
            type="email"
            className="input-contact-info-children"
            placeholder="email"
            name="entry.1045781291"
            onChange={handleChange}
            id="email"
            value={formData.email}
            required
          />
        </span>

        <input
          type="text"
          placeholder="subject"
          name="entry.1145717750"
          onChange={handleChange}
          id="subject"
          value={formData.subject}
        />
        <br />
        <textarea
          rows="5"
          placeholder="message"
          name="entry.839337160"
          onChange={handleChange}
          id="message"
          value={formData.message}
          required
        />
        <br />
        <button className="button-submit" onClick={handleClick}>
          {submitButtonText}
        </button>
      </form>
    </>
  );
}

export default ContactForm;
