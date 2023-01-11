import React from "react";
// import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaRegFolder } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Project = ({ project }) => {
  console.log(project);
  const { name, tools, about } = project;
  return (
    <div>
      <div class="col">
        <div class="card pt-4" style={{ height: "353px" }}>
          <div className="project-icon-container">
            <div>
              <FaRegFolder style={{width:'52px', height:"52px"}}/>
            </div>
            <div className="project-socila-icon">
              <FiGithub className="me-3" style={{width:'22px', height:"22px"}}/>
              <FaExternalLinkAlt style={{width:'21px', height:"21px"}}/>
            </div>
          </div>
          <div class="card-body m-3 mt-3 pt-3">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{about.slice(0, 80)}</p>
            <p class="card-text">{tools}</p>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Project;
