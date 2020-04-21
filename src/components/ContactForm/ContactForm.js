import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <form className="contact-form" action="#" method="post">
      <span className="input-contact-info">
        <input
          type="text"
          className="input-contact-info-children"
          placeholder="name"
        />
        <input
          type="email"
          className="input-contact-info-children"
          placeholder="email"
        />
      </span>

      <input type="text" placeholder="subject" />
      <br />
      <textarea rows="5" placeholder="message" />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}

export default ContactForm;
