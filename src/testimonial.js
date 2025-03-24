import './css/style.css';
import img1 from './img/vickyimg.jpg';
import img2 from './img/khileshimg.png';
import img3 from './img/testimonial.jpg';

function Testimonial(){

    return(
        <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7 py-5 pr-md-5">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">Testimonial</h6>
              <h1 className="mb-4 section-title">What Our Clients Say</h1>
              <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src={img1} style={{width: '60px', height: '60px'}} alt="" />
                    <div className="ml-3">
                      <h5>Vikash Kanade</h5>
                      <i></i>
                    </div>
                  </div>
                  <p>m.Ark has a great team, friendly relation, they designed the ideal house for my needs. It is a fantastic project, we are very happy ! They were orignally recommended to us by a friend and now we recommend them.</p>
                </div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src={img2} style={{width: '60px', height: '60px'}} alt="" />
                    <div className="ml-3">
                      <h5>Khilesh Bhangale</h5>
                      <i></i>
                    </div>
                  </div>
                  <p className="m-0">It all started a little more than a year ago with the idea of having a complete home makeover. Working with "Manish Patil" and the m.Ark Interiors team entails a high level of glitz, responsibility, and dedication. They will work with your needs and help you go through the transition of renovating your home.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                <img className="h-100" src="img/testimonial.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Testimonial;