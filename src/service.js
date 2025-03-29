import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHouseChimney, faHardHat, faCubes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./css/style.css";
import "./css/carousel.css"; // Custom styles
import img1 from "./img/proj1.png";
import img2 from "./img/proj2.png";

function Service(){

  const[isViewMore,setIsViewMore]=useState(true);

  function handleView(){
    setIsViewMore(!isViewMore);
  }
 
  const images = [img1, img2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Toggle between img1 and img2
    }, 3000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

    return(
      <div className="container-fluid py-5"style={{ 
        background: "linear-gradient(to bottom,#f0f0f0,#f0f0f0)", 
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
      }}>
      <div className="container py-5">
        <div className="row">
        <div className="row align-items-center">
      {/* Text Section */}
      <div 
        className="col-lg-6 pr-lg-5 text-left shadow-sm p-4" 
        style={{ 
          backgroundColor: "#17cacf", 
          borderRadius: "15px", 
          maxWidth: "100%",
        }}
      >
        <h6 className="text-white font-black-bold text-uppercase mb-3">
          Our Awesome Services
        </h6>
        <h1 className="mb-4 section-title text-black">
          Transformation of Spaces through Visionary Architectural Solutions.
        </h1>
        <p style={{ fontWeight: "bold", color: "#111", fontSize: "18px" }}>
          M.ark Design Studio creates innovative, functional, and visually striking architectural solutions 
          for townships, commercial spaces, and residential developments.
          <br />
          A designing firm that offers design and decorating solutions to residential and small-scale commercial projects.
        </p>
        {/* <a 
          className="btn btn-primary mt-3 py-2 px-4" 
          style={{ borderRadius: "10px" }}
          onClick={handleView}
        >
          {isViewMore ? "View Less" : "View More"}
        </a> */}
      </div>

      {/* Image Carousel Section */}
      <div className="col-lg-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
  <div className="image-wrapper">
    <img src={images[currentImage]} className="bubble-effect" alt="Design" width="100%" />
  </div>
</div>

      
    </div>

{isViewMore?<div className="container my-5">
      {/* Architecture */}
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#ffc107", fontWeight: "bold", color: "#111", fontSize: "18px" }}>
        <FontAwesomeIcon icon={faBuilding} className="mr-3 text-white" size="2x" />
        <div>
          <h3 className="font-weight-bold text-dark">Architecture</h3>
          <p className="m-0 text-dark">M.ark Design Studio, we provide comprehensive architectural design services with a focus on modern and
          <br />
             functional aesthetics. With extensive expertise in spatial planning, we understand how people, organisations,
             <br /> and communities interact with their environments. Our collaborative approach ensures innovative and tailored
             <br /> solutions for both residential and commercial spaces.</p>
        </div>
      </div>

      {/* Interior Design */}
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#ffc107", fontWeight: "bold", color: "#111", fontSize: "18px" }}>
        <FontAwesomeIcon icon={faHouseChimney} className="mr-3 text-white" size="2x" />
        <div>
          <h3 className="font-weight-bold text-dark">Interior Design</h3>
          <p className="m-0 text-dark">We specialise in designing sophisticated and functional interior spaces that enhance both living and working
          <br />
           environments. Our team is committed to delivering the highest standards in interior design for a diverse range of projects, including corporate offices, academic. </p>
        </div>
      </div>

      {/* Construction */}
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#ffc107" , fontWeight: "bold", color: "#111", fontSize: "18px"}}>
        <FontAwesomeIcon icon={faHardHat} className="mr-3 text-white" size="2x" />
        <div>
          <h3 className="font-weight-bold text-dark">Construction</h3>
          <p className="m-0 text-dark">Our construction services are built on a foundation of quality, efficiency, and meticulous attention to detail. 
          <br />We prioritize smart building practices and sustainable solutions to ensure long-term success.
          <br /> With a commitment to excellence, we deliver projects that seamlessly blend aesthetics with structural integrity. </p>
        </div>
      </div>

      {/* 3D Architectural Walkthrough Animation */}
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#ffc107" , fontWeight: "bold", color: "#111", fontSize: "18px"}}>
        <FontAwesomeIcon icon={faCubes} className="mr-3 text-white" size="2x" />
        <div>
          <h3 className="font-weight-bold text-dark">3D Architectural Walkthrough Animation</h3>
          <p className="m-0 text-dark">
            Builders and real estate developers may get the quickest 3D walkthrough animation from 3D Power,
            <br /> 
            also referred to as the Walkthrough Expert Company. We provide cutting-edge 3D architectural animation
            <br /> 
            services that will significantly improve and elevate your project.
          </p>
          <ul className="m-0 text-dark" style={{ fontWeight: "bold", color: "#111", fontSize: "18px" }}>
            <li>3D Architectural Rendering</li>
            <li>3D Walkthrough for Apartment</li>
            <li>3D Walkthrough for Commercial Projects</li>
            <li>3D Walkthrough for Smart City</li>
            <li>3D Walkthrough for School</li>
            <li>3D Walkthrough for Interiors</li>
          </ul>
        </div>
      </div>
    </div>:''}
        </div>
      </div>
    </div>
    
    )
}
export default Service;