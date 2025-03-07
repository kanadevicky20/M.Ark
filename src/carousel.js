import './css/style.css';
import Carousel from 'react-bootstrap/Carousel'
import vid1 from './img/living room.mp4'

function Carousels(){

    return(
<Carousel 
  interval={10000} 
  fade={true} 
  wrap={true} 
  slide={false} 
  controls={false}  // Hides next & previous arrows
  indicators={false}  // Hides bottom indicators
>
      {/* <Carousel.Item style={{height:"600px"}} >
        
        <video src={vid1} loop muted autoPlay  />
       
      </Carousel.Item> */}

      <Carousel.Item >
        <div style={{ height: "805px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", paddingBottom:"50px" }}>
      <video 
        src={vid1} 
        loop 
        muted 
        autoPlay 
        style={{ width: "100%", height: "100%", objectFit: "cover"  }} 
      />
        {/* Tagline Overlay */}
        <div className="video-overlay">
            <h1>Welcome to M.Ark Design Studio Where Creativity Meets Elegance!</h1>
          </div>
    </div>
        
      </Carousel.Item>
    </Carousel>
    )
}

export default Carousels;