import Carousel from "./carousel";
import Navbar from "./navbar";
import Topbar from "./topbar";
import About from "./about";
import Service from "./service";
import Feature from "./feature";
import Project from "./project";
import Team from "./team";
import Testimonial from "./testimonial";
import Footer from "./footer";
import Admin from "./admin";

function Mainscreen(){
    return(
        <>
        {/* <Topbar/> */}
        <Carousel/>
        <About/>
        <Service/>
        <Feature/>
        <Project/>
        <Admin/>
        <Team/>
        <Testimonial/>
        <Footer/>
        </>
    )
}
export default Mainscreen;