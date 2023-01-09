import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="header-container">
        <h6 className="intro">Hi, my name is </h6>
        <h1 className="header-title">
          Mohammad Ibrahim <br />
          MEARN Stack Web Developer
        </h1>
        <p className="heading-paragraph">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </p>
        <button type="button" class="btn btn-primary">check out my resume</button>
      </div>
    </div>
  );
};

export default Header;
