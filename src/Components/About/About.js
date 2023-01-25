import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="container about-section" id="about">
        <div className="my-info">
          <div>
            <h3 className="fs-3 about-section-title">About Me</h3>
            <div className="info-container pt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam placeat corporis, voluptatem molestias explicabo nostrum
                eaque quas ad corrupti vero officiis itaque saepe cumque quidem.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                beatae voluptas non quod? Non dolorum soluta nemo quod iure
                voluptate officiis, mollitia magnam eum inventore eaque velit
                rerum a suscipit.
              </p>
            </div>
          </div>
          <div>
            <h3 className="fs-3 about-section-title">Skills</h3>
            <div className="info-container ">
              <div className="skill-container">
                <div class="card skill-card" style={{ width: "15rem" }}>
                  <div class="">
                    <h5 class="card-title ps-2 pt-2">Languages</h5>
                    <hr className="text-light " />
                    <h6 class="card-subtitle pb-2 ps-2  ">
                      Javascript typeScript
                    </h6>
                  </div>
                </div>
                <div>
                  <div class="card skill-card" style={{ width: "15rem" }}>
                    <div class="">
                      <h5 class="card-title ps-2 pt-2">Database</h5>
                      <hr className="text-light" />
                      <h6 class="card-subtitle pb-2 ps-2  ">Mongodb</h6>
                    </div>
                  </div>
                  <div class="card skill-card mt-3" style={{ width: "15rem" }}>
                    <div class="">
                      <h5 class="card-title ps-2 pt-2">Framworks</h5>
                      <hr className="text-light " />
                      <h6 class="card-subtitle pb-2 ps-2">React Express.js</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-content-center mt-4">
                <div class="card skill-card" style={{ width: "15rem" }}>
                  <div class="">
                    <h5 class="card-title ps-2 pt-2">Tools</h5>
                    <hr className="text-light " />
                    <h6 class="card-subtitle pb-2 ps-2  ">
                      vs code github figma font-awesome
                    </h6>
                  </div>
                </div>
                <div class="card skill-card" style={{ width: "15rem" }}>
                  <div class="">
                    <h5 class="card-title ps-2 pt-2">Others</h5>
                    <hr className="text-light " />
                    <h6 class="card-subtitle pb-2 ps-2  ">
                      Html Css Bootstrap Talwind Es6
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
