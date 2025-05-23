import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css';

// Reusable SliderContent component
const SliderContent = ({ number, title, description, imageSrc, altText }) => (
  <div className="slider__content">
    <div className="slider__text">
      <h3 className="event_title" >{title}</h3>
      <p>{description}</p>
    </div>
    <figure className="slider__image">
      <img className="imaeg" src={imageSrc} alt={altText} />
    </figure>
  </div>
);

const SliderComp = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  const sliderDataWaveCraze = [
    {
      number: "1",
      title: "WAVE CRAZE",
      imageSrc: "./assets/wavecraze.jpeg",
      altText: "The Producers",
    },
    {
      number: "2",
      title: "COMEDY NIGHT",
      imageSrc: "./assets/comedynight.jpeg",
      altText: "The Producers",
    },
    {
      number: "3",
      title: "RHYTHMIC MOMENTS",
      imageSrc: "./assets/music.jpeg",
      altText: "The Size",
    },
    {
      number: "4",
      title: "TALENT X",
      imageSrc: "./assets/talentx.jpeg",
      altText: "The Time",
    },
    {
      number: "5",
      title: "GLAM IT UP",
      imageSrc: "./assets/rampwalk.jpeg",  
      altText: "The Time",
    },
  ];

  const sliderDataEvents = [
    {
      number: "1",
      title: "NEXUS VERSE",
      imageSrc: "./assets/NEXUS_VERSE.6326236d.jpg",
      altText: "The Producers",
    },
    {
      number: "3",
      title: "EVENTS IN RECSTACY",
      imageSrc: "./assets/EVENTS IN RECSTACY.1f5f8103.jpg",
      altText: "The Size",
    },
    {
      number: "7",
      title: "KHOL-E-DIL",
      imageSrc: "./assets/kholedl.jpeg",
      altText: "The Time",
    },
    {
      number: "6",
      title: "MAT-KI-FOD",
      imageSrc: "./assets/matkifod.f39c1710.jpg",
      altText: "The Time",
    },
    {
      number: "7",
      title: "MEME-RAN-TINE",
      imageSrc: "./assets/memerantine.58468233-2.jpg",
      altText: "The Time",
    },
    {
      number: "8",
      title: "MOVIE MYSTICS",
      imageSrc: "./assets/moviem.jpeg",
      altText: "The Time",
    },
    {
      number: "9",
      title: "RED-FM-COLLAB",
      imageSrc: "./assets/redfmcollab.b9d400ec-2.jpg",
      altText: "The Time",
    },
    {
      number: "10",
      title: "LIME LIGHT",
      imageSrc: "./assets/limelite.jpg",
      altText: "The Time",
    },
    {
      number: "11",
      title: "VOICE IT OUT",
      imageSrc: "./assets/voice_it_out.f3d1fccb.jpg",
      altText: "The Time",
    },
  ];

  const sliderDataGallery = [
    {
      number: "1",
      title: "Freshers Introdction",
      imageSrc: "./assets/freshers_intro.1bceb250.jpeg",
      altText: "The Producers",
    },
    {
      number: "2",
      title: "NIT DURGAPUR SPECIAL",
      imageSrc: "./assets/Nit_durgapur_special.caaf72d6.jpeg",
      altText: "The Size",
    },
    {
      number: "3",
      title: "KARTHICK AND HEMANIKA",
      imageSrc: "./assets/karthick&hemanika.2b70b48e.jpeg",
      altText: "The Time",
    },
    {
      number: "4",
      title: "FRESHERS ORIENTATION",
      imageSrc: "./assets/freshers.4d0093e9.jpeg",
      altText: "The Time",
    },
    {
      number: "5",
      title: "DIL KI EY DIARY SE",
      imageSrc: "./assets/dil_ki_ek_diary_se.fbb2e85f.jpeg",
      altText: "The Time",
    },
    {
      number: "6",
      title: "THE RN POD",
      imageSrc: "./assets/the_rn_pod.d4345d3d.jpeg",
      altText: "The Time",
    },
    {
      number: "7",
      title:"TERRRIBLY NITROZ TALES",
      imageSrc: "./assets/Tnt.2363e719.jpeg",
      altText: "The Time",
    },
    {
      number: "8",
      title: "KASAUTI JHANDUON KI",
      imageSrc: "./assets/kasauti jhanduon ki.34555d13.jpeg",
      altText: "The Time",
    },
    {
      number: "9",
      title: "PRANK VIDEOS",
      imageSrc: "./assets/prank.336f21cd.jpeg",
      altText: "The Time",
    },
    {
      number: "10",
      title: "SUCESS STORIES",
      imageSrc: "./assets/success_stories.a2482b19.jpeg",
      altText: "The Time",
    },
  ];

  return (
    
    <div className="slider__wrapper">
      <div className="heading">
        <p>WAVE CRAZE</p>
      </div>
      <Slider {...settings} className="slider">
        {sliderDataWaveCraze.map((item, index) => (
          <SliderContent
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            altText={item.altText}
          />
        ))}
      </Slider>
      <div className="heading">
        <p>EVENTS</p>
      </div>
      <Slider {...settings} className="slider">
        {sliderDataEvents.map((item, index) => (
          <SliderContent
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            altText={item.altText}
          />
        ))}
      </Slider>
      
      <div className="heading">
        <p>VIDEOS AND SERIES</p>
      </div>
      <Slider {...settings} className="slider">
        {sliderDataGallery.map((item, index) => (
          <SliderContent
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            altText={item.altText}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;