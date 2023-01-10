import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>ME</NavLogo>
           <MobileIcon>
             <FaBars>

             </FaBars>
           </MobileIcon>
           <NavMenu>
            <NavItem>
                <NavLink to="about">
                     About
                </NavLink>
            </NavItem>
           </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
