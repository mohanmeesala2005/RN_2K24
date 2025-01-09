// Footer.js
import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy;Copyright 2024 RadioNitroz NitDgp</p>
        <p>Made with by WEB-TEAM</p>
        <div className="footer_social">
          <div className="social">
            <a href="mailto:radionitroz.nitdgp@gmail.com"><i class="fa-solid fa-envelope"></i></a>
          </div>
          <div className="social">
          <a href="https://www.youtube.com/@RadioNitroz"><i class="fa-brands fa-youtube"></i></a>
          </div>
          <div className="social">
          <a href="facebook.com/radionitroz.nitdgp"><i class="fa-brands fa-facebook"></i></a>
          </div>
          <div className="social">
          <a href="instagram.com/radionitroz.nitdgp"><i class="fa-brands fa-instagram"></i></a>
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;