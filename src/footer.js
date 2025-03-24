import { useNavigate } from "react-router-dom";

function Footer(){

  const navigate = useNavigate();

function handleHome(){
navigate('/');
}
function handleAbout(){
  navigate('/about');
}
function handleServices(){
  navigate('/service');
}
function handleProjects(){
  navigate('/projects');
}
function handleContact(){
  navigate('/contact');
}
    return(
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
      <div className="row pt-5 d-flex justify-content-between">
    
        {/* Contact Info */}
        <div className="col-lg-3 col-md-6 mb-4 text-left">
          <h4 className="text-primary mb-4">Get In Touch</h4>
          <p style={{ color: "white" }}><i className="fa fa-map-marker-alt mr-2" /> Jalgaon, India</p>
          <p style={{ color: "white" }}><i className="fa fa-phone-alt mr-2" /> 7666564295 / 8830837987</p>
          <p style={{ color: "white" }}><i className="fa fa-envelope mr-2" /> info.markdesignstudio@gmail.com</p>
          
          {/* Social Media Icons */}
          <div className="d-flex mt-4">
            <a className="btn btn-outline-light rounded-circle mr-2 px-0 d-flex align-items-center justify-content-center"
               style={{ width: "38px", height: "38px" }} href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-light rounded-circle mr-2 px-0 d-flex align-items-center justify-content-center"
               style={{ width: "38px", height: "38px" }} href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-light rounded-circle mr-2 px-0 d-flex align-items-center justify-content-center"
               style={{ width: "38px", height: "38px" }} href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn btn-outline-light rounded-circle px-0 d-flex align-items-center justify-content-center"
               style={{ width: "38px", height: "38px" }} href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
    
        {/* Popular Links */}
        <div className="col-lg-3 col-md-6 mb-4 text-left">
          <h4 className="text-primary mb-4">Popular Links</h4>
          <div>
          <a href="#" className="d-block text-white mb-2" onClick={handleHome}>
  <i className="fa fa-angle-right mr-2"></i> Home
</a>
<a href="#" className="d-block text-white mb-2" onClick={handleAbout}>
  <i className="fa fa-angle-right mr-2"></i> About Us
</a>
<a href="#" className="d-block text-white mb-2" onClick={handleServices}>
  <i className="fa fa-angle-right mr-2"></i> Our Services
</a>
<a href="#" className="d-block text-white mb-2" onClick={handleProjects}>
  <i className="fa fa-angle-right mr-2"></i> Our Projects
</a>
<a href="#" className="d-block text-white" onClick={handleContact}>
  <i className="fa fa-angle-right mr-2"></i> Contact Us
</a>

          </div>
        </div>
    
        {/* Newsletter */}
        <div className="col-lg-3 col-md-6 mb-4 text-left">
          <h4 className="text-primary mb-4">Newsletter</h4>
          <form>
            <div className="form-group">
              <input type="text" className="form-control border-0" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control border-0" placeholder="Your Email" required />
            </div>
            <button className="btn btn-lg btn-primary btn-block border-0" type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    
      {/* Footer Bottom */}
      <div className="container border-top border-secondary pt-4">
        <p className="m-0 text-center text-white">
          ©2025 <a className="text-white font-weight-bold" href="#"> M.ark</a> All Rights Reserved.
        </p>
      </div>
    </div>
    
    )
}
export default Footer;