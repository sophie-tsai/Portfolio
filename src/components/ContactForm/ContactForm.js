import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://docs.google.com/forms/d/e/1FAIpQLScX31bf-Ko_Mvyxd1jBArbnVrUL1Fg92tKMEPfxVRNnS1bx5A/formResponse"
      method="post"
    >
      <span className="input-contact-info">
        <input
          type="text"
          className="input-contact-info-children"
          placeholder="name"
          name="entry.2005620554"
          required
        />
        <input
          type="email"
          className="input-contact-info-children"
          placeholder="email"
          name="entry.1045781291"
          required
        />
      </span>

      <input type="text" placeholder="subject" name="entry.1145717750" />
      <br />
      <textarea
        rows="5"
        placeholder="message"
        name="entry.839337160"
        required
      />
      <br />
      <button className="button-submit" type="submit">
        submit
      </button>
    </form>
  );
}

export default ContactForm;
