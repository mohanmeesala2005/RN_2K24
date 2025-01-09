import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ProfileCard.css';

const ProfileCard = ({ imageSrc, name, role, mail ,phone }) => {
  return (
    <div className="img-wrapper">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <ul>
        <li><a href={`mailto:${mail}`}><i class="fa-regular fa-envelope"></i></a></li>
        <li><a href={`tel:${phone}`}><i className="fa-solid fa-phone"  /></a></li> 
      </ul>
    </div>
  );
};

const Card = () => {
  const teamMembers = [

    {
      imageSrc: "../src/assets/DebasmitaSaha.jpg",
      name: "Debasmita Saha",
      role: "Event Management & Content Writing",
      mail: "sdebasmita2005@gmail.com ",
      phone:"9748036639",
    },
    {
      imageSrc: "../src/assets/-iwvq7r.jpg",
      name: "Anurag Ray",
      role: "Public Speaking & Event Management",
      mail:"anurag.ray2005@gmail.com ",
      phone:" 9836530276",
    },
    {
      imageSrc: "../src/assets/IMG-20240324-WA0014 (1).jpg",
      name: "Antharya J",
      role: "Web Developer",
      mail:"jantharya321@gmail.com ",
      phone:"7013408920 ",
    },
    {
      imageSrc: "../src/assets/Arohan.jpg",
      name: "Swastik Roy",
      role: "Graphic Design & Video Editing",
      mail:"royswastik047@gmail.com",
      phone:"8101858528",
    },
    {
      imageSrc: "../src/assets/IMG-20240814-WA0017.jpg",
      name: "MMK Lechler",
      role: "Event Management & Public Speaking",
      mail:"floramosses123@gmail.com",
      phone:'9381072245',
    },
    {
      imageSrc: "../src/assets/IMG_3211.JPG",
      name: "Animesh",
      role: "Public Speaking & Event Management",
      mail:"animeshsatyapragyanpatra@gmail.com ",
      phone:"9337269060",
    },
    {
      imageSrc: "../src/assets/SayantanBanerjee.jpg",
      name: "Sayantan banerjee",
      role: "Content Writing & Event Management",
      mail:"sayantanbanerjee2022@gmail.com",
      phone:"8240679056",
    },
    {
      imageSrc: "../src/assets/IMG_20240814_121335.JPG",
      name: "Suraj Kumar",
      role: "Web Development & Public Speaking",
      mail:"suraj8757868482@gamil.com",
      phone:"8102152665",
    },
    {
      imageSrc: "../src/assets/IMG_20240128_174103585.jpg",
      name: "Thanusree",
      role: "Event Management & Public Speaking",
      mail:"thanusreemadhusudan@gmail.com",
      phone:"9390342185",
    },

    {
      imageSrc: "../src/assets/Shaswata.jpg",
      name: "Sashwata Ghosh",
      role: "Video Editing & Event Management",
      mail:"shaswatanitdgpofficial@gmail.com ",
      phone:"7603065660",
    },
    {
      imageSrc: "../src/assets/IMG_20240814_163310.jpg",
      name: "Basudev Pal",
      role: "Event Management",
      mail:" palbasudev65@gmail.com ",
      phone:"7750907396",
    },
    {
      imageSrc: "../src/assets/IMG_20240323_133103.jpg",
      name: "Vishu J",
      role: "Graphic Desing",
      mail:"vishujudiyan2005@gmail.com",
      phone:"7017787150",
    },
    {
      imageSrc: "../src/assets/IMG_20240525_071011_398.jpg",
      name: "Utkarsh A",
      role: "Graphic Desing",
      mail:"uaashay@gmail.com",
      phone:"9060107102",
    },
    {
      imageSrc: "../src/assets/IMG_20240730_151418_739.jpg",
      name: "Darshit R",
      role: "Video Editing",
      mail:"darshitrawal27@gmail.com ",
      phone:"7976998315",
    },

    {
      imageSrc: "../src/assets/IMG-20231104-WA0077.jpg",
      name: "Aman Shaw",
      role: "Content Writing & Event Management",
      mail:"ayushaman709@gmail.com ",
      phone:"7980271149",
    },
    
    {
      imageSrc: "../src/assets/WhatsApp Image 2024-08-14 at 8.27.37 PM.jpeg",
      name: "Pulkit Sepat",
      role: "Graphic Desing",
      mail:"pulkitsepat@gmail.com",
      phone:"8000487872",
    },
    {
      imageSrc: "../src/assets/IMG-20240814-WA0011.jpg",
      name: "SHAMBhabi gupta",
      role: "Content Writing & Web Development",
      mail:"shambhabigupta24@gmail.com ",
      phone:"7810871263",
    },
    {
      imageSrc: "../src/assets/Gopeshwar.jpg",
      name: "Gopeshwar kumar",
      role: "Web Developer",
      mail:"gopeshwarkumark@gmail.com",
      phone:"6205731951",
    },
    {
      imageSrc: "../src/assets/Screenshot_2024-08-14-19-30-36-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg",
      name: "md Huzaifah alam",
      role: "Event Management & Content Writing",
      mail:"alamhuzaifah@gmail.com ",
      phone:"8910041459",
    },
    {
      imageSrc: "../src/assets/IMG_20240814_203251.jpg",
      name: "Rishab Soni",
      role: "Graphic Desing",
      mail:"rishabhsoni1803@gmail.com",
      phone:"6388660810",
    },
    {
      imageSrc: "../src/assets/IMG-20240815-WA0007.jpg",
      name: "Srirama Sai Bhavana",
      role: "Content Writing",
      mail:"ss.23cs8153@nitdgp.ac.in  ",
      phone:"9381770556",
    },

  ];
  const teamMembers1 = [
    {
      imageSrc: "../src/assets/Shubham.b8e235d6.jpg",
      name: "Shubham Ghosh",
      role: "President",
      mail:"ghoshshubham930@gmail.com",
      phone:"91530 42605",
    },
    {
      imageSrc: "../src/assets/IMG_20240814_120517.jpg",
      name: "Nabina Layek",
      role: "Vice President",
      mail:"layeknabina@gmail.com",
      phone:"73638 64294",
    },
    {
      imageSrc: "../src/assets/Debashis.bf44bff1.jpg",
      name: "debashish panigrahi",
      role: "General Secretary",
      mail:"debashis2003panigrahi@gmail.com",
      phone:"99387 69662",
    },
    
    {
      imageSrc: "../src/assets/Vineet.5d1424b6.jpeg",
      name: "vineet jeengar",
      role: "Treasurer",
      mail:"",
      phone:"93526 86123",
    },
    {
      imageSrc: "../src/assets/Kens.jpeg",
      name: "KENS VenkateshWARULU",
      role: "Convenor",
      mail:"venlyndl2001@gmail.com",
      phone:"90327 95418",
    },
    {
      imageSrc: "../src/assets/Vineet.5d1424b6.jpeg",
      name: "rajeev kumar yadav",
      role: "Tech Head",
      mail:"yadavrajeev1587@gmail.com",
      phone:"63928 33881",
    },
    {
      imageSrc: "../src/assets/Aniket_.8b6200b3.jpg",
      name: "Ainket Kamble",
      role: "Logistics Head",
      mail:"aniketkamble9192@gmail.com",
      phone:"93252 44725",
    },
    {
      imageSrc: "../src/assets/Sumit.8f756d48.jpg",
      name: "Sumit Rastogi",
      role: "Fest and Sponsership Head",
      mail:"sumitrastogi2003@gmail.com",
      phone:"91427 94435",
    },

    {
      imageSrc: "../src/assets/Priyal.fb8ca003.jpg",
      name: "Priyal Bhalerao",
      role: "Event Head",
      mail:"priyalbhalerao13@gmail.com  ",
      phone:"87677 47389",
    },
    {
      imageSrc: "../src/assets/Dharma.4ed1f5be.jpg",
      name: "Dharma Teja",
      role: "Publicity Head",
      mail:"dharmateja3232@gmail.com",
      phone:"891942 8507",
    },
    {
      imageSrc: "../src/assets/Basab.ec7b21ad.jpeg",
      name: "Basab Lekhri",
      role: "Web Devlopment Head",
      mail:"bumbalekri08@gmail.com",
      phone:"93827 47295",
    },


  ];
  const teamMembers2 = [
    {
      imageSrc: "../src/assets/Jayant.jpg",
      name: "JAYANT MANDAL",
      role: "Sr Coordinator",
      mail:"jayantroot3@gmail.com",
      phone:"95318 65131",
    },
    {
      imageSrc: "../src/assets/Kirthika.6999743c.jpg",
      name: "KIRTHIKA S",
      role: "Sr Coordinator",
      mail:"skirthika2409@gmail.com",
      phone:"94760 51610",
    },
    {
      imageSrc: "../src/assets/Mohammed Asif.565a636a.jpg",
      name: "MOHAMMED ASIF",
      role:"",
      mail: "mdasif28049@gmail.com",
      phone:"89672 90251",
    },
    {
      imageSrc: "../src/assets/ramya.f113c21e.jpg",
      name: "RAMYA AKALANKAM",
      role: "Sr Coordinator",
      mail:"akalankamramya84@gmail.com",
      phone:"90591 67355",
    },
    {
      imageSrc: "../src/assets/1713104296967-02.jpg",
      name: "KARTIKEYA",
      role: "Sr Coordinator",
      mail:"karthikeya4@gmail.com",
      phone:"89770 25556",
    },
    {
      imageSrc: "../src/assets/PRANESH.7bad8073.jpg",
      name: "Pranesh rao K",
      role: "Sr Coordiantor",
      mail:"praneshrao6936@gmail.com",
      phone:"96795 08518",
    },
    {
      imageSrc: "../src/assets/Rupali.3f1978e5.jpg",
      name: "Rupali kumari",
      role: "Event Management",
      mail:"rkumarirupali3489@gmail.com",
      phone:"91532 65972",
    },
    {
      imageSrc: "../src/assets/Arnab Banerjee.79320dab.jpg",
      name: "Arnab Banerjee",
      role: "Sr Coordinator",
      mail:"arnabbanerjee2003@gmail.com",
      phone:"+91 90645 92539",
    },

    {
      imageSrc: "../src/assets/Anshika.27c6b3f8.jpg",
      name: "Anshika Goswami",
      role: "Sr Coordinator",
      mail:"anshika4607@gmail.com",
      phone:"+91 80095 91725",
    },
    {
      imageSrc: "../src/assets/SAI SAHIL.b582a455.JPG",
      name: "D SAi sahil",
      role: "Event Management",
      mail:"saisahilduvvuu1@gmail.com",
      phone:"+91 832 807 8950",
    },
    {
      imageSrc: "../src/assets/Sarmistha.64a9a910.jpg",
      name: "Sarmistha Naskar",
      role: "Sr Coordinator",
      mail:"Sarmisthan2003@gmail.com",
      phone:"+91 6289 762 949",
    },
    {
      imageSrc: "../src/assets/BeautyPlus Cam_20240504084809127_save.jpg",
      name: "SK RAJ ALI",
      role: "Sr Coordinator",
      mail:"skrajali062003@gmail.com",
      phone:"+91 96356 37725",
    },

    {
      imageSrc: "../src/assets/WhatsApp Image 2024-08-14 at 8.16.10 PM.jpeg",
      name: "Anshul kumar",
      role: "Sr Coordinator",
      mail:"pariraanshulkumar@gmail.com",
      phone:"+91 7488 898 308",
    },
    {
      imageSrc: "../src/assets/WhatsApp Image 2024-08-14 at 9.57.56 PM.jpeg",
      name: "MMSS MANIKANTA",
      role: "Sr Coordinator",
      mail:"mohanmeesala2005@gmail.com",
      phone:"95050 98186",
    },
    {
      imageSrc: "../src/assets/IMG_20240220_235105.jpg",
      name: "Kumar Shankar",
      role: "Sr Coordinator",
      mail:"kumarsankar2911@gmail.com",
      phone:"+91 63011 01659",
    },
    {
      imageSrc: "../src/assets/WhatsApp Image 2024-08-14 at 9.07.49 PM.jpeg",
      name: "Md Toufeeque Khan",
      role: "Sr Coordinator",
      mail:"mohammadtoufeequekhan786@gmail.com",
      phone:"+91 78424 05876",
    },
    {
      imageSrc: "../src/assets/IMG_20230918_144643.jpg",
      name: "Sivala Rishitha",
      role: "Sr Coordinator",
      mail:"sivalarishita@gmail.com",
      phone:"+91 90634 62911",
    },
    {
      imageSrc: "../src/assets/IMG-20240814-WA0018.jpg",
      name: "Deepsika Bishoye",
      role: "Sr Coordinator",
      mail:"deepsikabishoye1@gmail.com",
      phone:"+91 891 971 8045",
    },
    {
      imageSrc: "../src/assets/WhatsApp Image 2024-04-25 at 10.39.42 PM.jpeg",
      name: "Sanjib Maity",
      role: "Sr Coordinator",
      mail:"sanjibmaity200295@gmail.com",
      phone:"+91 98832 97925",
    },
    {
      imageSrc: "../src/assets/Screenshot_2024-08-15-13-06-36-96_99c04817c0de5652397fc8b56c3b3817.jpg",
      name: "Harshada Pawar",
      role: "Sr Coordinator",
      mail:"harshadapawar2402@gmail.com",
      phone:"+91 93567 04880",
    },
  ];

  return (
    <div className="main_card">
      <div className="heading">
        TEAM RN
      </div>
      <div className="team_years">
        Final Years
      </div>
      <div className="image-area">
        {teamMembers1.map((member, index) => (
          <ProfileCard
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            role={member.role}
            mail={member.mail}
            phone={member.phone}
          />
        ))}
      </div>
      <div className="team_years">
        Third Years
      </div>
      <div className="image-area">
        {teamMembers2.map((member, index) => (
          <ProfileCard
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            role={member.role}
            mail={member.mail}
            phone={member.phone}
          />
        ))}
      </div>
      <div className="team_years">
        Second Years
      </div>
      <div className="image-area">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            role={member.role}
            mail={member.mail}
            phone={member.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
