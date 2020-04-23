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
          required
        />
        <input
          type="email"
          className="input-contact-info-children"
          placeholder="email"
          required
        />
      </span>

      <input type="text" placeholder="subject" required />
      <br />
      <textarea rows="5" placeholder="message" required />
      <br />
      <button className="button-submit" type="submit">
        submit
      </button>
    </form>
  );
}

export default ContactForm;
