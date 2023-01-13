import React from "react";

const Header = () => {
  return (
    <div>
      <section
        className="px-5 py-6 py-xxl-10 hcf-bp-center hcf-bs-cover hcf-overlay hcf-transform "
        id="#"
        // style="background-image: url('./assets/img/heroes/hero-1/hero-main.jpg');"
      >
        <div className="container">
          <div className="row justify-content-md-start      ms-lg-5 ps-lg-5 ms-sm-0">
            <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-8 text-md-start title">
              <h6>Hi, My name is</h6>
              <h1 className="display-3 fw-bold mb-3 mt-3">
                Mohammad Ibrahim <br />
                <span className="mt-2">I build things for the web.</span>
              </h1>
              <p className="lead mb-5 mt-4 col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-8 ">
                Powerful, extensible, and feature-packed frontend toolkit. Build
                and customize with Sass, utilize prebuilt grid system and
                components, and bring projects to life with powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-start">
                {/* <button type="button" className="btn btn-light btn-lg px-4 gap-3">
                  Free Consultation
                </button> */}
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  check out my resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
