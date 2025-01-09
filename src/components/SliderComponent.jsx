import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.scss';

// Reusable SliderContent component
const SliderContent = ({ number, title, description, imageSrc, altText }) => (
  <div className="slider__content">
    <div className="slider__text">
      <span>{number}</span>
      <h3 className="event_title" >{title}</h3>
      <p>{description}</p>
    </div>
    <figure className="slider__image">
      <img src={imageSrc} alt={altText} />
    </figure>
  </div>
);

const AppleSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  const sliderDataEvents = [
    {
      number: "1",
      title: "NEXUS VERSE",
      imageSrc: "../src/assets/NEXUS_VERSE.6326236d.jpg",
      altText: "The Producers",
    },
    {
      number: "2",
      title: "RN JUKEBOX",
      imageSrc: "../src/assets/jukebox.98e9ff7c.jpg",
      altText: "The Producers",
    },
    {
      number: "3",
      title: "EVENTS IN RECSTACY",
      imageSrc: "../src/assets/EVENTS IN RECSTACY.1f5f8103.jpg",
      altText: "The Size",
    },
    {
      number: "4",
      title: "FUNTASTIC",
      imageSrc: "../src/assets/funtastic.a556059c-2.jpg",
      altText: "The Time",
    },
    {
      number: "5",
      title: "KHOL-E-DIL",
      imageSrc: "../src/assets/kholedil.2411a1e7.jpg",
      altText: "The Time",
    },
    {
      number: "6",
      title: "MAT-KI-FOD",
      imageSrc: "../src/assets/matkifod.f39c1710.jpg",
      altText: "The Time",
    },
    {
      number: "7",
      title: "MEME-RAN-TINE",
      imageSrc: "../src/assets/memerantine.58468233-2.jpg",
      altText: "The Time",
    },
    {
      number: "8",
      title: "MOVIE MYSTICS",
      imageSrc: "../src/assets/moviemystics.986c44df.jpg",
      altText: "The Time",
    },
    {
      number: "9",
      title: "RED-FM-COLLAB",
      imageSrc: "../src/assets/redfmcollab.b9d400ec-2.jpg",
      altText: "The Time",
    },
    {
      number: "10",
      title: "SHAAM-E-NOOR",
      imageSrc: "../src/assets/shaamenoor.0d2ad4e7-2.jpg",
      altText: "The Time",
    },
    {
      number: "11",
      title: "VOICE IT OUT",
      imageSrc: "../src/assets/voice_it_out.f3d1fccb.jpg",
      altText: "The Time",
    },
    // Add more event data as needed
  ];

  const sliderDataGallery = [
    {
      number: "1",
      title: "Freshers Introdction",
      imageSrc: "../src/assets/freshers_intro.1bceb250.jpeg",
      altText: "The Producers",
    },
    {
      number: "2",
      title: "NIT DURGAPUR SPECIAL",
      imageSrc: "../src/assets/Nit_durgapur_special.caaf72d6.jpeg",
      altText: "The Size",
    },
    {
      number: "3",
      title: "KARTHICK AND HEMANIKA",
      imageSrc: "../src/assets/karthick&hemanika.2b70b48e.jpeg",
      altText: "The Time",
    },
    {
      number: "4",
      title: "FRESHERS ORIENTATION",
      imageSrc: "../src/assets/freshers.4d0093e9.jpeg",
      altText: "The Time",
    },
    {
      number: "5",
      title: "DIL KI EY DIARY SE",
      imageSrc: "../src/assets/dil_ki_ek_diary_se.fbb2e85f.jpeg",
      altText: "The Time",
    },
    {
      number: "6",
      title: "THE RN POD",
      imageSrc: "../src/assets/the_rn_pod.d4345d3d.jpeg",
      altText: "The Time",
    },
    {
      number: "7",
      title:"TERRRIBLY NITROZ TALES",
      imageSrc: "../src/assets/Tnt.2363e719.jpeg",
      altText: "The Time",
    },
    {
      number: "8",
      title: "KASAUTI JHANDUON KI",
      imageSrc: "../src/assets/kasauti jhanduon ki.34555d13.jpeg",
      altText: "The Time",
    },
    {
      number: "9",
      title: "PRANK VIDEOS",
      imageSrc: "../src/assets/prank.336f21cd.jpeg",
      altText: "The Time",
    },
    {
      number: "10",
      title: "SUCESS STORIES",
      imageSrc: "../src/assets/success_stories.a2482b19.jpeg",
      altText: "The Time",
    },
    // Add more gallery data as needed
  ];

  return (
    <div className="slider__wrapper">
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

export default AppleSlider;
