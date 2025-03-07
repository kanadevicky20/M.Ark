import React, { useState } from "react";
import "./css/style.css";
import img1 from "./img/B1.png";
import img2 from "./img/B3.png";
import img3 from "./img/B4.png";
import img4 from "./img/L1.png";
import img5 from "./img/L2.png";
import img6 from "./img/L3.png";
import img7 from "./img/blog-1.jpg";
import img8 from "./img/blog-2.jpg";
import img9 from "./img/blog-3.jpg";

const projectsData = [
  { id: 1, category: "first", title: "BEDROOM VIEW", img: img1 },
  { id: 2, category: "first", title: "BEDROOM VIEW", img: img2 },
  { id: 3, category: "first", title: "BEDROOM VIEW", img: img3 },
  { id: 4, category: "second", title: "LIVING ROOM", img: img4 },
  { id: 5, category: "second", title: "LIVING ROOM", img: img5 },
  { id: 6, category: "second", title: "DRAWING ROOM", img: img6 },
  { id: 7, category: "third", title: "LIVING ROOM", img: img7 },
  { id: 8, category: "third", title: "HALL VIEW", img: img8 },
  { id: 9, category: "third", title: "STUDIO APARTMENT", img: img9 },
];

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("*");

  // Function to filter projects based on category
  const filteredProjects =
    selectedCategory === "*"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col text-center mb-4">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Our Projects
            </h6>
            <h1 className="mb-4">
              Here Are a Few Of Our Outstanding Interior Design Projects
            </h1>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row">
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
        </div>

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
