import React from "react";
import { Link } from "react-router-dom";
// import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu } from "./NavbarElement";
// import {FaBars} from 'react-icons/fa'
// import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
      {/* <Nav>
        <NavbarContainer>
          <NavLogo to='/'>ME</NavLogo>
           <MobileIcon>
            

             <FaBars/>
           </MobileIcon>
           <NavMenu>
            <NavItem>
                <NavLink to="about">
                     About
                </NavLink>
            </NavItem>
           </NavMenu>
        </NavbarContainer>
      </Nav> */}
      <nav className="navbar ms-5 me-5 navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            ME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Contact</Link>
              </li>
            </ul>
            <button type="button" class="btn btn-secondary">
              resume
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
