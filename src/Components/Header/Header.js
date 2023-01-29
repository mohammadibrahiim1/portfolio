import React from "react";
import "./Header.css";
// import TextScrambler from "react-scramble-text";

const Header = () => {
  // const phrases = ["front-end develeper", "wordpress customization"];
  return (
    <div>
      <section className="container" id="home">
        <header className="header-container">
          <div>
            <h2 className="header-tille">
              Ebrahim is a{" "}
              <span>
                {/* <TextScrambler phrases={phrases} speed={50} pauseTime={800} />{" "} */}
              </span>{" "}
              and do
            </h2>

            <p className="header-paragraph mt-4">
              He can Make Responsive website using programming tools. <br />{" "}
              also expert in wordpress customization.
            </p>
            <div>
              <button className="btn btn-outline-light mt-5">
                check out my resume
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/3cYPZKh/110-1102775-download-empty-profile-hd-png-download.jpg"
              alt=""
            />
          </div>
        </header>
      </section>

      {/* <section
        className="px-5 py-6 py-xxl-10 hcf-bp-center hcf-bs-cover hcf-overlay hcf-transform container"
        id="home"
      >
        <div className="">
          <div className="row justify-content-md-start">
            <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-8 text-md-start">
           

           <div className="header-info">
           <div className="">
            <h6>Hello,</h6>
              <h1 className="header-tille">
                {" "}
                Mohammad Ebrahim is <br /> a <span>front-end</span> Web
                developer
              </h1>

           
              <p className=" header-paragraph mb-5 mt-4 col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-8 ">
              He can Make Responsive website using programming tools.also expert in wordpress customization.
              </p>
            </div>
            <div className="">
            
              <img src="https://i.ibb.co/3cYPZKh/110-1102775-download-empty-profile-hd-png-download.jpg" alt="" />
            </div>
           </div>


              <div className="">
        
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4 header-button"
                >
                  check out my resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Header;
