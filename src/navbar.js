import './css/style.css';
import { Navigate, useNavigate } from 'react-router-dom';



function Navbar(){

  const Navigate=useNavigate();
      function goToHomePage(){
          Navigate('/home');
       }
   function goToService(){
      Navigate('/service');
   }
  
   function goToProjects(){
      Navigate('/projects')
   }
  
   function goToContact(){
      Navigate('/contact');
   }
  
   function goToAbout(){
          Navigate('/about');
   }
  
   function goToAdminPage(){
      Navigate('/admin');
   }

    return(
       <>
        <div className="container-fluid bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-white pr-3" href>Architecture</a>
                <span className="text-white">|</span>
                <a className="text-white px-3" href>Construction</a>
                <span className="text-white">|</span>
                <a className="text-white pl-3" href>Planning</a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-white px-3" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-white px-3" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-white px-3" href>
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-white px-3" href>
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-white pl-3" href>
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid position-relative nav-bar p-0">
      <div className="container position-relative" style={{zIndex: 9}}>
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
          <a href className="navbar-brand">
            <h1 className="m-0 display-5 text-white"><span className="text-primary">M.</span>ark</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
            <div className="navbar-nav ml-auto py-0">
              <a className="nav-item nav-link" onClick={goToHomePage}>Home</a>
              <a className="nav-item nav-link" onClick={goToAbout}>About</a>
              <a className="nav-item nav-link" onClick={goToService}>Service</a>
              <a className="nav-item nav-link" onClick={goToProjects}>Project</a>
             <a className="nav-item nav-link" onClick={goToContact}>Contact</a>
              <a className="nav-item nav-link" onClick={goToAdminPage}> </a>  {/* hide admin section */}

             {/* Pages navbar  */}
              {/* <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item">Blog Grid</a>
                  <a href="single.html" className="dropdown-item">Blog Detail</a>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
      </div>
      
    </>
    )
}
export default Navbar;