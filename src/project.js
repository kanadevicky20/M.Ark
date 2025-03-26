import React, { useState } from "react";
import "./css/style.css";
import img1 from "./img/B1.png";
import img2 from "./img/B3.png";
import img3 from "./img/B4.png";
import img4 from "./img/B2.png";
import img5 from "./img/L2.png";
import img6 from "./img/L3.png";
import img7 from "./img/blog-1.png";
import img8 from "./img/blog-2.png";
import img9 from "./img/blog-3.png";
import img10 from "./img/blog-4.png";
import img11 from "./img/blog-6.png";
import img12 from "./img/blog-5.png";

const projectsData = [
  { id: 1, category: "first", title: "BEDROOM VIEW", img: img1 },
  { id: 2, category: "first", title: "BEDROOM VIEW", img: img2 },
  { id: 3, category: "first", title: "BEDROOM VIEW", img: img3 },
  { id: 4, category: "second", title: "BEDROOM", img: img4 },
  { id: 5, category: "second", title: "LIVING ROOM", img: img5 },
  { id: 6, category: "second", title: "DRAWING ROOM", img: img6 },
  { id: 7, category: "third", title: "EXTERIOR VIEW", img: img7 },
  { id: 8, category: "third", title: "EXTERIOR VIEW", img: img8 },
  { id: 9, category: "third", title: "EXTERIOR VIEW", img: img9 },
  { id: 10, category: "forth", title: "EXTERIOR VIEW", img: img10 },
  { id: 11, category: "forth", title: "EXTERIOR VIEW", img: img11 },
  { id: 12, category: "forth", title: "EXTERIOR VIEW", img: img12 },
  
];

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("*");

  // Function to filter projects based on category
  const filteredProjects =
    selectedCategory === "*"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="container-fluid py-5"style={{ 
      background: "linear-gradient(to bottom,#f0f0f0,#f0f0f0)", 
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
    }}>
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col text-center mb-4">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Our Projects
            </h6>
            <h1 className="mb-4">
            Here Are A Few Of Our Outstanding Project's
            </h1>
          </div>
        </div>

        {/* Filter Buttons */}
        {/* <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-filters">
              <li
                className={`btn btn-outline-primary m-1 ${
                  selectedCategory === "*" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("*")}
              >
                All
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  selectedCategory === "first" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("first")}
              >
                Complete
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  selectedCategory === "second" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("second")}
              >
                Running
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  selectedCategory === "third" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("third")}
              >
                Upcoming
              </li>
            </ul>
          </div>
        </div> */}

        {/* Project Grid */}
        <div className="row mx-1 portfolio-container">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6 col-sm-12 p-2 portfolio-item"
            >
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={project.img} alt={project.title} />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">{project.title}</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href="#">
                      <i className="fa fa-link" />
                    </a>
                    <a className="btn btn-outline-primary m-1" href={project.img} data-lightbox="portfolio">
                      <i className="fa fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
