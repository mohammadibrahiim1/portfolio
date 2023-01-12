import React from "react";
// import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaRegFolder } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project }) => {
  console.log(project);
  const { name, tools, about,externalLink,githubLink } = project;
  return (
    <div>
      <div class="col">
        <div class="card pt-4" style={{ height: "353px" }}>
          <div className="project-icon-container">
            <div>
              <FaRegFolder
                className="fa-folder"
                style={{ width: "52px", height: "52px" }}
              />
            </div>
            <div className="">
              <a href={githubLink}>
                <FiGithub
                  className="me-3 icon-color"
                  style={{ width: "22px", height: "22px" }}
                />
              </a>
              <a href={externalLink}>
                <FaExternalLinkAlt
                  className="icon-color"
                  style={{ width: "22px", height: "22px" }}
                />
              </a>
            
            </div>
          </div>
          <div class="card-body m-3 mt-3 pt-3">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{about.slice(0, 80)}</p>
         
     <div className="d-flex justify-content-start align-self-center gap-3">
     {tools && tools.map( (tool) => <p class="card-text ">{tool.t1}</p> )   }
     </div>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Project;
