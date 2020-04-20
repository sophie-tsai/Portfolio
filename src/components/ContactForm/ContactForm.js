import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <form className="contact-form" action="#" method="post">
      <span className="input-name">
        <input
          type="text"
          className="input-name-children"
          placeholder="first name"
        />
        <input
          type="text"
          className="input-name-children"
          placeholder="last name"
        />
      </span>
      <input type="email" placeholder="email" />
      <br />
      <textarea rows="7" placeholder="message" />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}

export default ContactForm;
