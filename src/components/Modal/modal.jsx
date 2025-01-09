import React, { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>RADIO NITROZ</h2>
            <p>
            Hola Amigos!! And Welcome to the vibrant and colourful world of Radio NITroz,
             the Official Entertainment club of NIT Durgapur where we are dedicated to 
             making your campus life at NIT Durgapur memorable! As the creative pulse of 
             the campus, we believe that your  days at college shouldn't just be wasted 
             worrying about academics—it’s about the experiences, the memories, and the 
             connections you make along the way. Since our inception in 2006, Radio NITroz 
             has been at the forefront,  providing unparalleled entertainment and fostering
              a sense of community spirits and brotherhood among students.
            <br></br>
            With a clear mission of enhancing the college experience of each individual by
             creating an engaging and entertaining platform that resonates with our student 
             community, we strive to become the heartbeat of NIT Durgapur through a diverse 
             array of entertaining events, lively fests, podcasts, and viral content. Our 
             inclusive and innovative approach sets us apart as we carry forward our mission
              to build a cohesive and joyful environment where every student feels connected, 
              appreciated, and inspired. As catalysts, always at your back, we are committed 
              to ensure that no talent gets wasted and creativity destroyed by offering 
              a platform where students can showcase their talents and voice their opinions.
            <br></br>
              You say FESTS?! We say WAVECRAZE!: Our annual flagship cultural fest, packed
               with thrilling events. Show off your talents in TALENT-X, get swept away by
                the iconic movie moments in MOVIE-MYSTIC, strut your stuff in GLAM IT UP's 
                 energetic ramp walk, and laugh your lungs out at COMEDY NIGHT. With a 
                 footfall of over 6k enthusiastic individuals, feel the energy of campus
                  and be one with the people of NIT Durgapur. 
            <br></br>
            Witty people I see, we have got you covered through our online event
             NEXUS-VERSE that will challenge your intellect and keep you on your toes
              with its tricky questions and mind-bending puzzles. Now for the hopeless 
              romantics, KHOL-E-DIL, an open platform where students can finally confess 
              those unspoken thoughts and feelings throughout the Valentine's Week. Connected 
              to the Indian culture through the core or our hearts, celebrate Janmashtami
               with this traditional event, MATKI PHOD, bringing cultural heritage to life 
               on campus. Then go on to share the joy of Diwali by uploading pictures of 
               your celebrations among your peers and gather the LIMELIGHT. Who knows? You 
               might get viral as well! Freshers, this one’s for you! Join us in this fun 
               T-shirt painting event FUNTASTIC, perfect for breaking the ice and making 
               new friends. Have a knack for humor? Showcase your meme-making skills in 
               MEME-RAN-TINE and make the campus cry out in laughter. Unveil your hidden 
               talents by uploading videos in this online talent showcase, COLLEGE KE TASHANBAAZ,
                and immerse yourself in the beauty of words at our live poem recitation event, 
                VOICE IT OUT, where we create a striking ambiance for all.
                
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p className="about_cont">Hola Amigos!! And Welcome to the vibrant and colourful
       world of Radio NITroz, the Official Entertainment club of NIT Durgapur where we
        are dedicated to making your campus life at NIT Durgapur memorable! As the 
        creative pulse of the campus, we believe that your  days at college shouldn't
         just be wasted worrying about academics—it’s about the experiences, the memories,
          and the connections you make along the way. Since our inception in 2006, Radio NITroz
           has been at the forefront,  providing unparalleled entertainment and fostering a sense
            of community spirits and brotherhood among students.</p>
            <p className="about_cont">
            With a clear mission of enhancing the college experience of each individual
             by creating an engaging and entertaining platform that resonates with our 
             student community, we strive to become the heartbeat of NIT Durgapur 
             through a diverse array of entertaining events, lively fests, podcasts,
              and viral content. Our inclusive and innovative approach sets us apart 
              as we carry forward our mission to build a cohesive and joyful environment 
              where every student feels connected, appreciated, and inspired. As catalysts,
               always at your back, we are committed to ensure that no talent gets wasted and
                creativity destroyed by offering a platform where students can showcase their 
                talents and voice their opinions.
            </p>
      <button onClick={toggleModal} className="btn-modal">
        Read More....
      </button>
    </>
  );
}