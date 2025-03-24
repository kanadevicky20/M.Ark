import './css/style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './img/logomarc.png';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Manage navbar state

  function goToPage(path) {
    navigate(path);
    setIsOpen(false); // Close menu after navigation
  }

  return (
    <div className="navbar-container">
      {/* Main Navigation Bar - FIXED */}
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 fixed-top">
        <div className="container">
          
          {/* Logo */}
          <img src={logo} alt='logo' width={110} height={90} />

          <a href="#" className="navbar-brand">
            <h4 className="m-0 display-5 text-white">
              M.ARK <br />
              Design Studio
            </h4>
          </a>

          {/* Mobile Toggle Button */}
          <button 
            type="button" 
            className="navbar-toggler" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navigation Links */}
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}>
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
  );
}

export default Navbar;
