import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Project from "../Project/Project";
import "./Projects.css";
import {Menu} from './ProjectsData'

const Projects = () => {
  const [projects, setProjects] = useState(Menu);
  // const [showMore, setShowMore] = useState(6);

  // useEffect(() => {
  //   fetch("projects.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProjects(data);
  //       console.log(data);
  //     });
  // }, []);

  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setProjects(updateItems);
  };

  // const displayProject = () => {
  //   setShowMore((projects)=> projects + projects);
  //   console.log('first')
  // };

  // const projectsData = projects.slice(0,6)
  return (
    <div id="project">
      <section className="container all-project-section">
        <div className="">
          <h3 className="projects-heading mt-5">Other Projects</h3>
          {/* <Link className="projects-sub-heading text-center">
            <p>see the archive</p>
          </Link> */}
        </div>
        <div className="projects-filter-nav mt-4">
          <button
            className="filter-button"
            onClick={() => filterItem("HTML")}
          >
            Html
          </button>
          <button
            className="filter-button"
            onClick={() => filterItem("Bootstrap")}
          >
            Bootstrap
          </button>
          <button
            className="filter-button"
            onClick={() => filterItem("Javascript")}
          >
            JavaScript
          </button>
          <button
            className="filter-button"
            onClick={() => filterItem("React")}
          >
            React
          </button>
          <button
            className="filter-button"
            onClick={() => setProjects(Menu)}
          >
            All Projects
          </button>
        </div>
        <div className="col col-sm-12 col-md-12 col-lg-12 m-auto mt-3">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
            {projects.slice(0,6).map((project) => (
              <Project project={project} id={project._id}></Project>
            ))}
          </div>
        </div>
      </section>
      <div className="text-center">
        {/* {
          <button
            type="button"
            class="btn btn-secondary mt-5"
            onClick={() => displayProject()}
          >
            show more
          </button>
        } */}
      </div>
    </div>
  );
};

export default Projects;
