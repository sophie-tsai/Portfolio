import React, { useState } from "react";
import "./ContactForm.css";
import { responseRef } from "../../utils/firebaseDB";

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

  function isValidEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  async function handleClick(event) {
    const { name, email, subject, message } = formData;
    try {
      if (
        name.length !== 0 &&
        email.length !== 0 &&
        isValidEmail(email) &&
        message.length !== 0
      ) {
        event.preventDefault();
        setSubmitButtonText("sending...");
        const createdAt = new Date();
        await responseRef.add({
          name: name,
          email: email,
          subject: subject,
          message: message,
          submittedOn: createdAt.toDateString(),
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitButtonText("sent!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form className="contact-form" id="contactData">
        <span className="input-contact-info">
          <input
            type="text"
            className="input-contact-info-children"
            placeholder="name"
            onChange={handleChange}
            id="name"
            value={formData.name}
            required
          />
          <input
            type="email"
            className="input-contact-info-children"
            placeholder="email"
            onChange={handleChange}
            id="email"
            value={formData.email}
            required
          />
        </span>

        <input
          type="text"
          placeholder="subject"
          onChange={handleChange}
          id="subject"
          value={formData.subject}
        />
        <br />
        <textarea
          rows="5"
          placeholder="message"
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
