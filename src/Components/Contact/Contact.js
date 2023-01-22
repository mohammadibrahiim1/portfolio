import React from "react";
import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {  } from 'react-icons/fa';
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section class="contact-section" id="contact">
        <div>
          <h3 className="contact-title">Contact Me</h3>
        </div>

        <div className="contact-info-container">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              dicta repellat molestias beatae architecto consequatur, molestiae
              facere ipsam quo aspernatur qui magni. Saepe aliquam magni ad,
              delectus nihil aut veritatis laborum sunt quia omnis, qui
              repudiandae cum cupiditate laudantium praesentium esse eum vero
              dolorum unde, voluptatem voluptas! Aliquid, omnis error.
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
