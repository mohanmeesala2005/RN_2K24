import React from 'react';
import './contact.css'; // Import your CSS file

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-us">
        <div className="contact-header">
          <h1>CONTACT US</h1>
        </div>
        <div className="social-bar"> 
          <ul>
            <li><i className="fab fa-facebook-f"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
            <li><i className="fab fa-dribbble"></i></li>
          </ul>
        </div>
      </div>

      <div className="header">
        <h1>Let's Get Started</h1>
        <h2>Contact us to start your next project!</h2>
      </div>

      <div className="address">
        <i className="fas fa-map-marker-alt"></i>
        <h3>8266 Gygax</h3>
        <h3>Norfolk, VA</h3>
      </div>

      <div className="phone">
        <i className="fas fa-phone-alt"></i>
        <h3>757-287-1608</h3>
      </div>

      <div className="email">
        <i className="fas fa-envelope"></i>
        <h3>hello@adept.com</h3>
      </div>

      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="4" placeholder="Tell us about your project..." required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
