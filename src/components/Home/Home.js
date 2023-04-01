import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <section className="home active section" id="Home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is <span className="name">Imran khan </span>
              </h3>
              <h3 className="my-profession">
                I'm a <span className="typing">Frontend Developer</span>
              </h3>
              <p>
                A professional Front-End Web Developer, responsibly creating
                website designs by using coding and markup languages such as
                React.js, JavaScript, HTML5, CSS, Bootstrap, Saas,material UI
                and Wordpress.Currently,I am working as a Front-End Developer at
                &nbsp;{" "}
                <a
                  style={{ color: "#ec1839", fontWeight: "bold" }}
                  href="https://www.octaloop.io/"
                  target="__blank"
                >
                  Octaloop Technologies
                </a>
                .
              </p>
              <a href="\IMRAN KHAN RESUME.pdf" className="btn hire-me">
                Download CV
              </a>
            </div>
            <div className="home-img padd-15">
              <img
                className="img-fluid"
                src="\images\hero.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
