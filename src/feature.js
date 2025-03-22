import "./css/style.css";
import img1 from './img/feature.jpg';
function Feature(){

    return(
      <div className="container-fluid bg-light">
      <div className="container">
        <div className="row align-items-center"> {/* Ensures vertical alignment */}
          
          {/* Left Column - Text Section */}
          <div className="col-lg-7 mt-5 py-5 pr-lg-5 text-lg-left text-center">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">Why Choose Us?</h6>
            <h1 className="mb-4 section-title">
             Why Choose Us For Architecture/Interior Work? </h1>
            <p className="mb-4">
            Our goal is to provide you with a long-lasting house by using only
             the best materials, cutting-edge production techniques, thorough 
             quality inspections, expert installs, and upfront pricing.
            </p>
            
            <ul className="list-unstyled">
              <li><h5><i className="far fa-check-square text-primary mr-2" /> Client-Centric Approach</h5></li>
              <li><h5><i className="far fa-check-square text-primary mr-2" /> Blend of Aesthetics & Functionality</h5></li>
              <li><h5><i className="far fa-check-square text-primary mr-2" /> Innovative & Customized Designs</h5></li>
              <li><h5><i className="far fa-check-square text-primary mr-2" /> Expertise & Fresh Perspectives</h5></li>
            </ul>
            
            <a href="#" className="btn btn-primary mt-3 py-2 px-4">View More</a>
          </div>
    
          {/* Right Column - Image Section */}
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <img className="img-fluid rounded" src={img1} alt="Interior Design" />
          </div>
    
        </div>
      </div>
    </div>
    
    )
}
export default Feature;