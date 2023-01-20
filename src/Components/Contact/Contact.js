import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section class="py-5 py-xl-6 contact-section" id="contact">
        <div class="container mb-5 mb-md-6">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h6 className="what-next">
                what's next?
              </h6>
              <h2 class="mb-4 getinTouch">Get In Touch</h2>
              <p class="text-secondary mt-2">
                {" "}
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-lg-center">
            <div class="col-12 col-lg-9">
              <div class="text-center shadow-sm overflow-hidden">
                {/* contact form modal */}

                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  class="modal-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  send message
                </button>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Say Hello
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div className=" input-field d-flex justify-content-between align-content-center text-start">
                            <div class="mb-3">
                              {/* <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Name
                              </label> */}
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name"
                              />
                              {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div class="mb-3 ">
                              {/* <label
                                for="exampleInputPassword1"
                                class="form-label"
                              >
                                Email
                              </label> */}
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="email"
                              />
                            </div>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                            >
                              <textarea
                                name="textarea"
                                id="text"
                                cols="49"
                                rows="5"
                                placeholder="write your message"
                                className="textarea"
                              ></textarea>
                            </label>
                          </div>

                          <button type="submit" class="modal-submit-button">
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
