import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section class="py-3 py-md-4 py-xl-6">
        <div class="container overflow-hidden">
          <div class="row gy-5 gy-md-0">
            <div class="col-xs-12 col-md-7 order-1 order-md-0">
              <div class="copyright text-center text-md-start">
                Designed & Built by{" "}
                <a className="footer-link" href="https://github.com/mohammadibrahiim1">
                  Mohammad Ibrahim
                </a>
              </div>
              <div class="credits text-secondary text-center text-md-start mt-2 fs-7">
                front-end web-developer
              </div>
            </div>

            <div class="col-xs-12 col-md-5 order-0 order-md-1">
              <ul class="nav justify-content-center justify-content-md-end ">
                <li class="nav-item">
                  <a class="nav-link link-dark px-2" href="#!">
                    <FaFacebook className="social-icon" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark px-2" href="#!">
                    <FaGithub className="social-icon" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark px-2" href="#!">
                    <FaLinkedinIn className="social-icon" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark px-2" href="https://www.facebook.com/">
                    <FaInstagram className="social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
