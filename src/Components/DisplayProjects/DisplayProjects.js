import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const DisplayProjects = () => {
  return (
    <div className="display-projects-container py-5 py-xl-12 mt-5 pt-5" id="project">
      {/* <div className="title-section"> */}
        <h4 className="project-section-title w-50 m-auto mt-5">
          {" "}
          <span className="fs-5 font-monospace">03.</span> Some Things I've
          Built
        </h4>
        {/* <hr className="text-secondary w-25 m-auto d-project-line" /> */}
      {/* </div> */}
      {/* <section className="d-block w-75 m-auto d-lg-none ">
        <div
          class="card text-bg-dark"
            // style={{ width: "343px", height: "382px" }}
        >
       
          <img src="https://i.ibb.co/kXx4Gkq/Screenshot-20.png" class="opacity-25"alt="..."/>
          <div class="card-img-overlay">
            <p className="featured-project">featured project</p>
            <h5 class="card-title fp-title">RS IT</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small>Wordpress Elementor </small>
            </p>
            <div>
              <Link to="" className="social-link">
                {" "}
                <FiGithub
                  className="me-3 mt-1"
                  style={{ width: "20px", height: "20px" }}
                />
              </Link>
              <Link to="" className="social-link">
                <FaExternalLinkAlt style={{ width: "18px", height: "18px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <div class="card ms-4 me-4 text-bg-dark">
  <img src="https://i.ibb.co/kXx4Gkq/Screenshot-20.png" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>

      <section className="w-75 m-auto d-none d-sm-block d-md-none d-lg-block d-project">
        <div className="d-flex w-75 m-auto ">
          <div className="bg-white">
            <img src="" alt="" style={{ width: "579px", height: "325px" }} />
          </div>
          <div className="text-container align-middle pt-3">
            <p className="featured-project">featured project</p>
            <h5 className="fp-title">RS IT</h5>
            <p className="card-text text-align">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text-2">
              <small>Wordpress Elementor </small>
            </p>
            <div>
              <Link to="" className="social-link">
                {" "}
                <FiGithub
                  className="me-3 mt-1"
                  style={{ width: "20px", height: "20px" }}
                />
              </Link>
              <Link to="" className="social-link">
                <FaExternalLinkAlt style={{ width: "18px", height: "18px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-75 m-auto d-none d-sm-block d-md-none d-lg-block d-project">
        <div className="d-flex flex-row-reverse w-75 m-auto ">
          <div className="bg-white position-relative">
            <img src="" alt="" style={{ width: "579px", height: "325px" }} />
          </div>
          <div className="  align-middle pt-3">
            <p className="featured-project">featured project</p>
            <h5 className="fp-title">RS IT</h5>
            <p className="card-text text-align text-start">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text-2">
              <small>Wordpress Elementor </small>
            </p>
            <div>
              <Link to="" className="social-link">
                {" "}
                <FiGithub
                  className="me-3 mt-1"
                  style={{ width: "20px", height: "20px" }}
                />
              </Link>
              <Link to="" className="social-link">
                <FaExternalLinkAlt style={{ width: "18px", height: "18px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-75 m-auto d-none d-sm-block d-md-none d-lg-block mb-5 d-project ">
        <div className="d-flex  w-75 m-auto ">
          <div className="bg-white">
            <img src="" alt="" style={{ width: "579px", height: "325px" }} />
          </div>
          <div className="text-container align-middle pt-3">
            <p className="featured-project">featured project</p>
            <h5 className="fp-title">RS IT</h5>
            <p className="card-text text-align">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text-2">
              <small>Wordpress Elementor </small>
            </p>
            <div>
              <Link to="" className="social-link">
                {" "}
                <FiGithub
                  className="me-3 mt-1"
                  style={{ width: "20px", height: "20px" }}
                />
              </Link>
              <Link to="" className="social-link">
                <FaExternalLinkAlt style={{ width: "18px", height: "18px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayProjects;
