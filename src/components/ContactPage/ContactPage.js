import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Icons from "../Icons/Icons";
import "./ContactPage.css";
import ScrollAnimation from "react-animate-on-scroll";

function ContactPage() {
  return (
    <>
      <div className="page-container" id="envelope">
        <h2 className="page-title">contact.</h2>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className="page-section contact-section">
            <ContactForm />
          </div>
        </ScrollAnimation>
        <Icons />
        <a
          href="https://github.com/sophie-tsai/Portfolio"
          target="_blank"
          className="signature"
          rel="noopener noreferrer"
        >
          designed and created by sophie tsai.
        </a>
      </div>
    </>
  );
}

export default ContactPage;
