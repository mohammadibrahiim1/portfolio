import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const DisplayProjects = () => {
  return (
    <div className="display-projects-container">
      <section className="d-block w-75 m-auto d-lg-none">
        <div
          class="card text-bg-dark"
        //   style={{ width: "343px", height: "382px" }}
        >
          {/* <img src="https://i.ibb.co/6ByLWB1/rsit-project-img.png" class="card-img" style={{width:"343px", height:"382px"}} alt="..."/> */}
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
             <FaExternalLinkAlt style={{ width: "18px", height: "18px" }} /></Link>
            </div>
          </div>
        </div>
      </section >
           
      <section className=" w-75 m-auto d-none d-sm-block d-md-none d-lg-block ">
    <div className="d-flex w-75 m-auto ">
    <div  className="bg-white">
            <img src="" alt="" style={{width:"579px", height:"325px"}}  />
           </div>
           <div className="text-container align-middle pt-3">
             <p className="featured-project">
             featured project
             </p>
             <h5 className="fp-title">
                RS IT
             </h5>
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
             <FaExternalLinkAlt style={{ width: "18px", height: "18px" }} /></Link>
            </div>
           </div>
    </div>
      </section>
    </div>
  );
};

export default DisplayProjects;
