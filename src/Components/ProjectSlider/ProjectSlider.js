import React from "react";
import "./ProjectSlider.css";

const ProjectSlider = () => {
  return (
    <div id="project">
      <section>
        <div className="project-slider-header">
            <h1>some things i've built</h1>
        </div>
        <div className="cards">
          <div className="outer">
            <div class="card" style={{ width: "18rem", "--delay": "-1" }} >
              <img
                src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title1</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.youtube.com/results?search_query=vertical+slider+" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem","--delay": "0" }}>
              <img
                src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" , "--delay": "1" }}>
              <img
                src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem","--delay": "2" }}>
              <img
                src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem","--delay": "3" }}>
              <img
                src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
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
