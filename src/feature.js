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
              Our designs are both beautiful and practical, ensuring comfort and efficiency in every space.
            </h1>
            <p className="mb-4">
              We understand that every client has unique needs and preferences. We bring innovative designs to 
              turn your vision into reality, offering a wide range of ideas to inspire you. We welcome open discussions 
              to refine your dream space.
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