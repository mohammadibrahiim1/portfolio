import React from "react";
// import { a } from "react-router-dom";
// import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu } from "./NavbarElement";
// import {FaBars} from 'react-icons/fa'
// import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
      {/* <Nav>
        <NavbarContainer>
          <NavLogo href='/'>ME</NavLogo>
           <MobileIcon>
            

             <FaBars/>
           </MobileIcon>
           <NavMenu>
            <NavItem>
                <Nava href="about">
                     About
                </Nava>
            </NavItem>
           </NavMenu>
        </NavbarContainer>
      </Nav> */}
      <nav className="navbar ms-5 me-5 navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            ME
          </a>
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
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Contact</a>
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
