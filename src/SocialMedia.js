import React from "react";
import "./SocialMedia.css"; // Import the CSS file

const SocialMedia = () => {
  return (
    <div className="social-sidebar">
      <a  target="_blank" rel="noopener noreferrer" className="social-link facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a  target="_blank" rel="noopener noreferrer" className="social-link twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/manishpatil29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com/m.ark_design_studio?igsh=d25rMWNsNGdiZWg5" target="_blank" rel="noopener noreferrer" className="social-link instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a  target="_blank" rel="noopener noreferrer" className="social-link youtube">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
