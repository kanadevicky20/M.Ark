import './css/style.css';
import img1 from './img/manish.jpg'
import img2 from './img/team-2.jpg'
import img3 from './img/team-3.jpg'
import img4 from './img/team-4.jpg'

function Team(){

    return(
        <div className="container-fluid bg-light"style={{ 
          background: "linear-gradient(to bottom, #f8f9fa,rgb(84, 76, 76))", 
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
        }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="py-5 px-4 h-100 bg-primary d-flex flex-column align-items-center justify-content-center">
                <h6 className="text-white font-weight-normal text-uppercase mb-3">Our Team</h6>
                <h1 className="mb-0 text-center">Great designs need strong foundations just like our team!</h1>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 p-0 py-sm-5">
              <div className="owl-carousel team-carousel position-relative p-0 py-sm-5">
                <div className="team d-flex flex-column text-center mx-3">
                  <div className="position-relative">
                    <img className="img-fluid w-50" src={img1} alt="" />
                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                      <a className="btn btn-outline-primary text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter" /></a>
                      <a className="btn btn-outline-primary text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-outline-primary text-center px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                  <div className="d-flex flex-column bg-secondary py-3 align-items-center text-start">
                      <h5 className="text-white"> AR. MANISH CHANDERASHEKHAR PATIL</h5>
                      <p className="m-0 text-white">(B.ARCH, KOLHAPUR)</p>
                      <p className="m-0 text-white">FOUNDER / DIRECTOR / PRINCIPAL ARCHITECT</p>
                  </div>

                  {/* <div className="d-flex flex-column bg-secondary py-3 align-items-center text-start">
                      <h5 className="text-white">✔️Ar. Aniket Sambhaji Nimbalkar</h5>
                      <p className="m-0">(B. Arch , Pune)</p>
                      <p className="m-0">FOUNDER / DIRECTOR / PRINCIPAL ARCHITECT</p>
                  </div>
                    
                  <div className="d-flex flex-column bg-secondary py-3 align-items-center text-start">
                      <h5 className="text-white">✔️Mr. Jitendra B. Patil</h5>
                      <p className="m-0">(BE Civil , Nashik)</p>
                      <p className="m-0">Sr. Project Manager</p>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Team;