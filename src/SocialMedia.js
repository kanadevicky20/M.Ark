import React from "react";
import "./SocialMedia.css"; // Import the CSS file

const SocialMedia = () => {
  return (
    <div className="social-sidebar">
      <a href="https://www.facebook.com" target="_blank" className="social-link facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" className="social-link twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank" className="social-link linkedin">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" className="social-link instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com" target="_blank" className="social-link youtube">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
