import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './aboutus.css'; // Import the CSS file

const AboutUs = () => {
  useEffect(() => {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation
    gsap.fromTo(
      ".aboutus",
      {
        x: 0,
        y: 100,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 5,
        ease: "slow",
        scrollTrigger: {
          trigger: ".aboutus",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="aboutus">
          <div className="heading">
            Contact Us
      </div>
      <div>
      <section className="contact-us-section">
      <div className="container">
        <div className="grid-wrapper">
          <div className="image-container">
            <div className="image-group">
              <img 
                src="../src/assets/rnlogo.jpg" 
                alt="Contact Us" 
                className="contact-image"
              />
              <h1 className="contact-title">Contact us</h1>
              <div className="info-card">
                <div className="contact-info">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <h5 className="contact-text"><a href="mailto:radionitroz.nitdgp@gmail.com">radionitroz.nitdgp@gmail.com</a></h5>
                </div>
              </div>
            </div>
          </div>

          <div className="form-container">
            <h2 className="form-title">Send Us A Message</h2>
            <input type="text" className="form-input" placeholder="Name" />
            <input type="text" className="form-input" placeholder="Email" />
            <input type="text" className="form-input" placeholder="Phone" />
            
            <input type="text" className="form-input-msg" placeholder="Message" />
            <button className="form-button">Send</button>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default AboutUs;
