import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHouseChimney, faHardHat, faCubes } from "@fortawesome/free-solid-svg-icons";
import "./css/style.css";

function Service(){

    return(
      <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
        <div 
  className="col-lg-6 pr-lg-5 text-left shadow-sm p-4" 
  style={{ 
    backgroundColor: "#17cacf", 
    borderRadius: "15px", 
    maxWidth: "100%",
  }}
>
  {/* Bold and Styled Heading */}
  <h6 
    className="text-white font-black-bold text-uppercase mb-3" 
    style={{ backgroundColor: "transparent" }}
  >
    Our Awesome Services
  </h6>

  {/* Main Section Title */}
  <h1 className="mb-4 section-title text-black">
    Transformation of Spaces through Visionary Architectural Solutions.
  </h1>

 {/* Paragraph Text */}
<p style={{ fontWeight: "bold", color: "#111", fontSize: "18px" }}>
  M.ark Design Studio creates innovative, functional, and visually striking architectural solutions 
  for townships, commercial spaces, and residential developments.
  <br />
  A designing firm that offers design and decorating solutions to residential and small-scale commercial projects.
</p>




  {/* Button with Styling */}
  <a href="#" 
    className="btn btn-primary mt-3 py-2 px-4" 
    style={{ borderRadius: "10px" }}
  >
    View More
  </a>
</div>


<div className="container my-5">
      {/* Architecture */}
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#d8a143", fontWeight: "bold", color: "#111", fontSize: "18px" }}>
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
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#d8a143", fontWeight: "bold", color: "#111", fontSize: "18px" }}>
        <FontAwesomeIcon icon={faHouseChimney} className="mr-3 text-white" size="2x" />
        <div>
          <h3 className="font-weight-bold text-dark">Interior Design</h3>
          <p className="m-0 text-dark">We specialise in designing sophisticated and functional interior spaces that enhance both living and working
          <br />
           environments. Our team is committed to delivering the highest standards in interior design for a diverse range of projects, including corporate offices, academic. </p>
        </div>
      </div>

      {/* Construction */}
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#d8a143" , fontWeight: "bold", color: "#111", fontSize: "18px"}}>
        <FontAwesomeIcon icon={faHardHat} className="mr-3 text-white" size="2x" />
        <div>
          <h3 className="font-weight-bold text-dark">Construction</h3>
          <p className="m-0 text-dark">Our construction services are built on a foundation of quality, efficiency, and meticulous attention to detail. 
          <br />We prioritize smart building practices and sustainable solutions to ensure long-term success.
          <br /> With a commitment to excellence, we deliver projects that seamlessly blend aesthetics with structural integrity. </p>
        </div>
      </div>

      {/* 3D Architectural Walkthrough Animation */}
      <div className="d-flex align-items-center  p-4 shadow rounded mb-3" style={{ backgroundColor: "#d8a143" , fontWeight: "bold", color: "#111", fontSize: "18px"}}>
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
          <ul className="m-0 text-dark" style={{ fontWeight: "bold", color: "#111", fontSize: "18px", fontWeight: "bold", color: "#111", fontSize: "18px" }}>
            <li>3D Architectural Rendering</li>
            <li>3D Walkthrough for Apartment</li>
            <li>3D Walkthrough for Commercial Projects</li>
            <li>3D Walkthrough for Smart City</li>
            <li>3D Walkthrough for School</li>
            <li>3D Walkthrough for Interiors</li>
          </ul>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
    
    )
}
export default Service;