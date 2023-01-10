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
                <Link className="footer-link" to="/">
                  Mohammad Ibrahim
                </Link>
              </div>
              <div class="credits text-secondary text-center text-md-start mt-2 fs-7">
                front-end web-developer
              </div>
            </div>

            <div class="col-xs-12 col-md-5 order-0 order-md-1">
              <ul class="nav justify-content-center justify-content-md-end ">
                <li class="nav-item">
                  <Link class="nav-link link-dark px-2" to="#!">
                    <FaFacebook className="social-icon" />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link link-dark px-2" to="#!">
                    <FaGithub className="social-icon" />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link link-dark px-2" to="#!">
                    <FaLinkedinIn className="social-icon" />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link link-dark px-2" to="#!">
                    <FaInstagram className="social-icon" />
                  </Link>
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
