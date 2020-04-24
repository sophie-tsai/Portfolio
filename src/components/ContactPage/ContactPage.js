import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Icons from "../Icons/Icons";
import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <div className="page-container" id="envelope">
        <h2 className="page-title">contact.</h2>
        <div className="page-section contact-section">
          <ContactForm />
        </div>
        <Icons />
        <p className="signature">designed and created by sophie tsai.</p>
      </div>
    </>
  );
}

export default ContactPage;
