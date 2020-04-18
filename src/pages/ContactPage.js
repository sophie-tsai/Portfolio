import React from "react";

function ContactPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">contact.</h2>
      <form className="contact-form">
        <input className="input-name" type="text" placeholder="first name" />
        <input className="input-name" type="text" placeholder="last name" />
        <br />
        <input type="email" placeholder="email" />
        <br />
        <input type="textarea" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
