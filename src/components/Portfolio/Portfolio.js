import React from "react";

import "./Portfolio.css";
import "./New.css";

function Portfolio() {
  const showalert = () => {
    alert("Sorry 😔 can't share source code due to company privacy policy");
  };

  return (
    <div>
      <div classNameName="main-content">
        <section className="portfolio active section" id="Portfolio">
          <div className="container">
            <div className="row">
              <div className="portfolio-heading padd-15">
                <h2>My Lastest Projects </h2>
              </div>
            </div>
          </div>

          <div class="warpper myProject">
            <input class="radio" id="one" name="group" type="radio" checked />
            <input class="radio" id="two" name="group" type="radio" />
            <input class="radio" id="three" name="group" type="radio" />
            <div class="tabs">
              <label class="tab" id="one-tab" for="one">
                Company Project
              </label>
              <label class="tab" id="two-tab" for="two">
                Personal Project
              </label>
            </div>
            <div class="panels">
              <div class="panel" id="one-panel">
                <div>
                  <div style={{ marginTop: "60px" }} className="row">
                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\deflyball.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://www.deflyball.com/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="#"
                              className="source-code"
                              onClick={showalert}
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\dtreak (2).png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://www.dstreak.io/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="#"
                              className="source-code"
                              onClick={showalert}
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\supervet.png" alt="" />
                          <div className="live-source">
                            <a
                              href="https://supervet-mp.vercel.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="#"
                              className="source-code"
                              onClick={showalert}
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\fmctruck.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://fmc-mint-site.vercel.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="#"
                              className="source-code"
                              onClick={showalert}
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\octaloop.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://www.octaloop.io/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="#"
                              className="source-code"
                              onClick={showalert}
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\hod.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://house-of-dragon.vercel.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="#"
                              className="source-code"
                              onClick={showalert}
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel" id="two-panel">
                <div>
                  <div className="row">
                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\gymapp.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://fit-clubcom.netlify.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href=" https://github.com/mkhan6952/Gym-Desktop-App"
                              className="source-code"
                              target="_blank"
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\netflixclone.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://netflixclone-31817.web.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="https://github.com/mkhan6952/Netflix-App"
                              className="source-code"
                              target="_blank"
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\weatherApp.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://weatherupdate-app.netlify.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="https://github.com/mkhan6952/weatherApp"
                              className="source-code"
                              target="_blank"
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\tictac.png" alt="" />

                          <div className="live-source">
                            <a
                              href="https://tic-tac-toe-desktopgame.netlify.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href=" https://github.com/mkhan6952/tic-tac-toc-Game"
                              className="source-code"
                              target="_blank"
                            >
                              Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-item padd-15 ">
                      <div className="portfolio-item-inner shadow-dark ">
                        <div className="portfolio-img ">
                          <img src="\images\bmi.png" alt="" />

                          <div className="live-source">
                            <a
                              href=" https://bodymi-calculator.netlify.app/"
                              className="live-demo"
                              target="_blank"
                            >
                              Live Demo
                            </a>
                            <a
                              href="https://github.com/mkhan6952/BMI-Calculator"
                              className="source-code"
                              target="_blank"
                            >
                              Source Code
                            </a>
                          </div>
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
    </div>
  );
}

export default Portfolio;
