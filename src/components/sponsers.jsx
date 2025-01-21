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
    { imageSrc: "./assets/wildstone.1c87940b.jpeg", altText: "GG" },
    { imageSrc: "./assets/images (5).jpg", altText: "The MentorX" },
    { imageSrc: "./assets/mentorx.jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/revup.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/redFm.jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/teachnook.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/dominos.jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/moorve.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/jambo.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/IMG-20250117-WA0022[1].jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/sponserx.jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/citygym.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/lgcybaw.jpg-300x300.jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/londonbakery.jpeg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/lapinoz.jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/chicago.jpg", altText: "Hoverrobotix" },
    { imageSrc: "./assets/adda.jpg", altText: "Hoverrobotix" },
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
