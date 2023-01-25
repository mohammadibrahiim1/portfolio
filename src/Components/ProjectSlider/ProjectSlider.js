import React from "react";
import { useState } from "react";
import "./ProjectSlider.css";

// <a href="https://ibb.co/x3T9Ypp"><img src="https://i.ibb.co/yVjvpww/Screenshot-20.png" alt="Screenshot-20" border="0"></a>
{
  /* <a href="https://ibb.co/9gLsqrw"><img src="https://i.ibb.co/H4snrHN/Screenshot-21.png" alt="Screenshot-21" border="0"></a> */
}
{
  /* <a href="https://ibb.co/rH1zx32"><img src="https://i.ibb.co/HqkbtCT/Screenshot-22.png" alt="Screenshot-22" border="0"></a> */
}
{
  /* <a href="https://ibb.co/rQCCfSC"><img src="https://i.ibb.co/6y33Jx3/Screenshot-29.png" alt="Screenshot-29" border="0"></a> */
}
{
  /* <a href="https://ibb.co/fq9Hvvh"><img src="https://i.ibb.co/djtDggd/Screenshot-30.png" alt="Screenshot-30" border="0"></a> */
}

const ProjectSlider = () => {

  return (
    <div id="project">
      <section className="slider-section">
        <div className="project-slider-header">
          <h1>Projects I've Built</h1>
        </div>
        <div className="cards">
          <div className="outer">
            <div class="card" style={{ width: "18rem", "--delay": "-1" }}>
              <img
                src="https://i.ibb.co/H4snrHN/Screenshot-21.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Donate Today</h5>
                <p class="card-text">
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                  </ul>
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <a href="/" class="slider-button">
                  Live
                </a>
                <a href="/" class="slider-button">
                  Github
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", "--delay": "0" }}>
              <img
                src="https://i.ibb.co/yVjvpww/Screenshot-20.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">RS IT</h5>
                <p class="card-text">
                  <ul>
                    <li>Wordpress</li>
                    <li>Elementor</li>
                    <li>Astra</li>
                  </ul>
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <a href="/" class="slider-button">
                  Live
                </a>
                <a href="/" class="slider-button">
                  Github
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", "--delay": "1" }}>
              <img
                src="https://i.ibb.co/HqkbtCT/Screenshot-22.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">LMS-Educare</h5>
                <p class="card-text">
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                  </ul>
                </p>
                <p class="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <a href="/" class="slider-button">
                  Live
                </a>
                <a href="/" class="slider-button">
                  Github
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", "--delay": "2" }}>
              <img
                src="https://i.ibb.co/6y33Jx3/Screenshot-29.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">News Website</h5>
                <p class="card-text">
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                  </ul>
                </p>
                <p class="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <a href="/" class="slider-button">
                  Live
                </a>
                <a href="/" class="slider-button">
                  Github
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", "--delay": "3" }}>
              <img
                src="https://i.ibb.co/djtDggd/Screenshot-30.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Quizzz Master</h5>
                <p class="card-text">
                  <ul>
                    {/* <li>Bootstrap</li> */}
                    <li>JavaScript</li>
                    <li>React-router</li>
                  </ul>
                </p>
                <p class="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="/" class="slider-button">
                  Live
                </a> 
                <a href="/" class="slider-button">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSlider;
