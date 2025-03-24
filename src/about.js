
function About(){

    return(
      <div className="container-fluid bg-light" style={{ 
        background: "linear-gradient(to bottom, #f8f9fa,rgb(84, 76, 76))", 
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
      }}>
        <div className="container">
          <div className="row">
            
            {/* Left Section - Blue Background */}
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-start justify-content-center bg-primary h-100 py-5 px-3 text-left">
                <i className="flaticon-brickwall display-1 font-weight-normal text-secondary mb-3" />
                <h4 className="display-3 mb-3">M.Ark Design Studio</h4>
                <h1 className="m-0">Innovative Architecture &nbsp;&nbsp;for Modern Spaces.</h1>
              </div>
            </div>
      
            {/* Right Section - Shadow Effect in White Background */}
            <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5 text-left"
              style={{ 
                background: "white", 
                boxShadow: "10px 0px 30px rgba(0, 0, 0, 0.15)"
              }}
            >
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Learn About Us</h6>
              <h1 className="mb-4 section-title">
                We have developed into a premier architectural studio by embracing a passion for design excellence since our inception.
              </h1>
              <p>
                M.ark Design Studio, we embrace the philosophy that "true wisdom lies in recognising how
                much we have yet to learn." Guided by this belief, we established M.ark Design Studio in
                2025, dedicated to delivering innovative and sophisticated design solutions.
              </p>
      
              <div className="row py-2">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-house font-weight-normal text-primary m-0 mr-3" />
                    <h5 className="text-truncate m-0">Project Planning</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-stairs font-weight-normal text-primary m-0 mr-3" />
                    <h5 className="text-truncate m-0">Innovation &amp; Creativity</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3" />
                    <h5 className="text-truncate m-0">Commercial Design</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="flaticon-living-room font-weight-normal text-primary m-0 mr-3" />
                    <h5 className="text-truncate m-0">Residential Design</h5>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </div>
      
    
    )
}
export default About;