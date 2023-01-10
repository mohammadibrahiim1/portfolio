import React from "react";

const About = () => {
  return (
    <div>
      <section class="py-5 py-xl-6 about-me-section" id="about">
        <div class="container mb-4 mb-md-5 mb-xl-6">
          <div class="row justify-content-md-center"></div>
        </div>

        <div class="container overflow-hidden">
          <div class="row gy-2 gy-md-0 justify-content-xxl-center">
            <div class="col-12 order-md-1 col-md-4 col-xxl-4">
              <div class="text-center text-md-start text-sm-start me-md-3 me-xl-5">
                <div class="col-12 col-md-10 col-xxl-8 mt-5 pt-4">
                  <img
                    class=" img-fluid rounded shadow"
                    loading="lazy"
                    src="https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/anatolir201105528.jpg?ver=6"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="col-12 order-md-0 col-md-8 col-xxl-6">
              <div class="text-start text-md-start text-lg-start">
                <h2 class=" about-me fw-bold lh-1">
                  {" "}
                  <span className="fs-5 ">01.</span> About Me
                </h2>

                <hr class="mx-auto ms-md-0 ms-lg-0 mb-4 text-secondary" />
                <p className="about-p">
                  Hello! My name is Brittany and I enjoy creating things that
                  live on the internet. My interest in web development started
                  back in 2012 when I decided to try editing custom Tumblr
                  themes — turns out hacking together a custom reblog button
                  taught me a lot about HTML & CSS!
                </p>
                <p className="about-p">
                  Fast-forward to today, and I’ve had the privilege of working
                  at an advertising agency, a start-up, a huge corporation, and
                  a student-led design studio. My main focus these days is
                  building accessible, inclusive products and digital
                  experiences at Upstatement for a variety of clients.
                </p>
                <p className="about-p">
                  I also recently launched a course that covers everything you
                  need to build a web app with the Spotify API using Node &
                  React.
                </p>
                <p className="about-p">
                  Here are a few technologies I’ve been working with recently:
                </p>
                <ul className="technologies">
                  <li>
                    <p>html</p>
                  </li>
                  <li>
                    <p>html</p>
                  </li>
                  <li>
                    <p>html</p>
                  </li>
                  <li>
                    <p>html</p>
                  </li>
                  <li>
                    <p>html</p>
                  </li>
                  <li>
                    <p>html</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
