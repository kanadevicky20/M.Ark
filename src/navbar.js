import './css/style.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  function goToPage(path) {
    navigate(path);
  }

  return (<div>
 
    <div className="navbar-container">
      {/* Main Navigation Bar - FIXED */}
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 fixed-top">
        <div className="container">
          
          {/* Logo */}
          <a href="#" className="navbar-brand">
            <h1 className="m-0 display-5 text-white">
              <span className="text-primary">M.</span>ark
            </h1>
          </a>

          {/* Mobile Toggle Button */}
          <button 
            type="button" 
            className="navbar-toggler" 
            data-toggle="collapse" 
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" onClick={() => goToPage('/home')}>Home</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => goToPage('/about')}>About</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => goToPage('/service')}>Service</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => goToPage('/projects')}>Project</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => goToPage('/contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default Navbar;
