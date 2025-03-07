import './css/style.css';
import img1 from './img/portfolio-1.jpg';
import img2 from './img/portfolio-2.jpg';
import img3 from './img/portfolio-3.jpg';
import img4 from './img/portfolio-4.jpg';
import img5 from './img/portfolio-5.jpg';
import img6 from './img/portfolio-6.jpg';
function Project(){

    return(
        <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col text-center mb-4">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Projects</h6>
              <h1 className="mb-4">Here Are a Few Of Our Outstanding Interior Design Projects</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li className="btn btn-outline-primary m-1 active" data-filter="*">All</li>
                <li className="btn btn-outline-primary m-1" data-filter=".first">Complete</li>
                <li className="btn btn-outline-primary m-1" data-filter=".second">Running</li>
                <li className="btn btn-outline-primary m-1" data-filter=".third">Upcoming</li>
              </ul>
            </div>
          </div>
          <div className="row mx-1 portfolio-container">
            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">ABC HOUSE</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href>
                      <i className="fa fa-link" />
                    </a>
                    <a className="btn btn-outline-primary m-1" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                      <i className="fa fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">ABC APARTMENT</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href>
                      <i className="fa fa-link" />
                    </a>
                    <a className="btn btn-outline-primary m-1" href="img/portfolio-2.jpg" data-lightbox="portfolio">
                      <i className="fa fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={img3} alt="" />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">ABC SHELTER</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href>
                      <i className="fa fa-link" />
                    </a>
                    <a className="btn btn-outline-primary m-1" href="img/portfolio-3.jpg" data-lightbox="portfolio">
                      <i className="fa fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={img4} alt="" />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">ABC HOTEL</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href>
                      <i className="fa fa-link" />
                    </a>
                    <a className="btn btn-outline-primary m-1" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                      <i className="fa fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={img5} alt="" />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">ABC HILL HOUSE</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href>
                      <i className="fa fa-link" />
                    </a>
                    <a className="btn btn-outline-primary m-1" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                      <i className="fa fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={img6} alt="" />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">GARCIA APARTMENT</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href>
                      <i className="fa fa-link" />
                    </a>
                    <a className="btn btn-outline-primary m-1" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                      <i className="fa fa-eye" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Project;