import './css/style.css';
import img1 from './img/vickyimg.jpg';
import img2 from './img/khileshimg.png';
import img3 from './img/testimonial.jpg';

function Testimonial(){

    return(
        <div className="container-fluid"style={{ 
          background: "linear-gradient(to bottom,#f0f0f0,#f0f0f0)", 
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
        }}>
        <div className="container">
  <div className="row">
    <div className="col-md-7 py-5 pr-md-5">
      <h1 className="mb-4 section-title">What Our Clients Says -</h1>
      <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
        
        {/* Testimonial 1 */}
        <div className="d-flex flex-column">
          <div className="d-flex align-items-start mb-3">
            {/* <img className="img-fluid rounded-circle" src={img1} style={{width: '60px', height: '60px'}} alt="" /> */}
            <div className="ml-3">
              <h4 className="mb-1">Manoj Dhasoriya</h4> 
              <p className="m-0">m.Ark has a great team, friendly relation, they designed the ideal house 
                <br/> for my needs. It is a fantastic project, we are very happy! They were
                 <br/> originally recommended to us by friend
                  and now we recommend them.</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="d-flex flex-column">
          <div className="d-flex align-items-start mb-3">
            {/* <img className="img-fluid rounded-circle" src={img2} style={{width: '60px', height: '60px'}} alt="" /> */}
            <div className="ml-3">
              <h4 className="mb-1">Sunil Gupta</h4>
              <p className="m-0">It all started a little more than a year ago with the idea of having a 
              <br/>complete home makeover. Working with "Manish Patil" and the m.Ark 
              <br/>Interiors team entails a high level of glitz, responsibility, and dedication.
              <br/>They will work with your needs and help you go through the transition of renovating your home.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Right Side Image */}
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