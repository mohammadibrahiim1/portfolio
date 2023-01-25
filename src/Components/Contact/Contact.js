import React from "react";
import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {  } from 'react-icons/fa';
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section class="container contact-section" id="contact">
        <div>
          <h3 className="contact-title">Contact Me</h3>
        </div>

        <div className="contact-info-container">
          <div>
            <p>
            I’m interested in freelance or remote opportunities. However, if you have other request or question, don’t shilly-shally to contact me.
            </p>
          </div>
          <div className="contact-link">
            <h5>message me here</h5>
            <div>
              <Link className="text-decoration-none" to="/">
                <FaLinkedinIn /> <small>linkedin</small>{" "}
              </Link>
            </div>
            <div>
              <Link to="/" className="text-decoration-none">
                <FaRegEnvelope /> <small>mail</small>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
