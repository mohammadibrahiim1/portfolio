import React from "react";
import { BsHexagon } from "react-icons/bs";
import './Navbar.css'
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
      <nav className="navbar sticky-top  navbar-expand-lg py-3">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="/">
            {/* ME */}
            <BsHexagon className="logo"  /> <span className="logo-name">M</span>
            
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
          <div className="collapse me-5  navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/#">
                   <span className="nav-serial">
                   01.</span>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  <span  className="nav-serial">
                  02.</span>About
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/#">
                 <span>
                 03.</span> experience
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/#project">
                  <span  className="nav-serial">03.</span>Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                   <span  className="nav-serial">04.</span>Contact
                </a>
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
