import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "../Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);
  return (
    <div id="project">
      <section className="w-75 m-auto" >
        <div className="text-center pb-5">
          <h3 className="projects-heading">Other Noteworthy Projects</h3>
          <Link className="projects-sub-heading"><p>see the archive</p></Link>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-9 m-auto ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 ">
            {projects.map((project) => (
              <Project project={project} id={project._id}></Project>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
