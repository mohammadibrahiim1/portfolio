import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Mohammad Ibrahim
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto my-2  my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  01.Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  01.about
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link">02.experiences</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">03.contact</Link>
              </li>
            </ul>
            <div>
              <button type="button" class="btn btn-primary">
                resume
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
