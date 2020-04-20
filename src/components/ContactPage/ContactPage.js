import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">contact.</h2>
      <div className="contact-page">
        <ContactForm />
        <p className="signature">designed and created by sophie tsai.</p>
      </div>
    </div>
  );
}

export default ContactPage;
