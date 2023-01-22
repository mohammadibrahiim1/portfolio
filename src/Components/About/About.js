import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about-section">
      <h3 className="fs-3 about-section-title">About Me</h3>
       <div className="my-info">

       <div className="info-container">
       
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            placeat corporis, voluptatem molestias explicabo nostrum eaque quas
            ad corrupti vero officiis itaque saepe cumque quidem.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae
            voluptas non quod? Non dolorum soluta nemo quod iure voluptate
            officiis, mollitia magnam eum inventore eaque velit rerum a
            suscipit.
          </p>
          <a href="/" class="my-info-button">
                  check out my resume
                </a>
        </div>

        <div className="my-img">
          <img src="/" alt="" />
        </div>
       </div>
      </section>
    </div>
  );
};

export default About;
