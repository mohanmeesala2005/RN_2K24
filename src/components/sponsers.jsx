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
    { imageSrc: "../src/assets/wildstone.1c87940b.jpeg", altText: "GG" },
    { imageSrc: "../src/assets/images (5).jpg", altText: "The MentorX" },
    { imageSrc: "../src/assets/mentorx.jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/revup.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/redFm.jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/teachnook.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/dominos.jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/moorve.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/jambo.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/IMG-20250117-WA0022[1].jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/sponserx.jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/citygym.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/lgcybaw.jpg-300x300.jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/londonbakery.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/lapinoz.jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/chicago.jpg", altText: "Hoverrobotix" },
    { imageSrc: "../src/assets/adda.jpg", altText: "Hoverrobotix" },
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
