import React from 'react';
import './sponsers.css'; // Import the CSS file

const SponsorCard = ({ imageSrc, altText }) => {
  return (
    <div className="nft">
      <div className="main">
        <img className="tokenImage" src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

const Sponsors = () => {
  const sponsorData = [
    { imageSrc: "../src/assets/logiczap.9c50e3e2.jpeg", altText: "Logiczap" },
    { imageSrc: "../src/assets/wildstone.1c87940b.jpeg", altText: "Wildstone" },
    { imageSrc: "../src/assets/pizza.d4b69360.jpeg", altText: "Pizza" },
    { imageSrc: "../src/assets/redFm.6002ca9d.jpeg", altText: "Red FM" },
    { imageSrc: "../src/assets/gg.419ad0b1.jpeg", altText: "GG" },
    { imageSrc: "../src/assets/wileyindia.42c00e29.jpg", altText: "Wiley India" },
    { imageSrc: "../src/assets/thementorx.d0d2795c.jpg", altText: "The MentorX" },
    { imageSrc: "../src/assets/hoverrobotix.7590a3c6.jpg", altText: "Hoverrobotix" },
  ];

  return (
    <div>
      <div id="sponsers">
        <div className="heading">
          <p>SPONSORS</p>
        </div>
        <div className="tnft">
          {sponsorData.map((sponsor, index) => (
            <SponsorCard key={index} imageSrc={sponsor.imageSrc} altText={sponsor.altText} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
