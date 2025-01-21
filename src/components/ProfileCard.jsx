import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ProfileCard.css';

const FacadCard = ({ imageSrc, name, role, mail ,phone }) => {
  return (
    <div className="facad_wrapper">
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
  const faculty =[
    {
      imageSrc: "./assets/TusharKanti.jpeg",
      name: "Dr Tushar Kanti Bera",
      role: "Associate Proffesor,EE,NITDGP",
      mail: "tusharkanti.bera@ee.nitdgp.ac.in",
      phone:"9448853308",
    }
  ]
  const teamMembers = [

    {
      imageSrc: "./assets/DebasmitaSaha.jpg",
      name: "Debasmita Saha",
      role: "Event Management",
      mail: "sdebasmita2005@gmail.com ",
      phone:"9748036639",
    },
    {
      imageSrc: "./assets/-iwvq7r.jpg",
      name: "Anurag Ray",
      role: "Public Speaking",
      mail:"anurag.ray2005@gmail.com ",
      phone:" 9836530276",
    },
    {
      imageSrc: "./assets/IMG-20240324-WA0014 (1).jpg",
      name: "Antharya J",
      role: "Web Developer",
      mail:"jantharya321@gmail.com ",
      phone:"7013408920 ",
    },
    {
      imageSrc: "./assets/Arohan.jpg",
      name: "Swastik Roy",
      role: "Video Editing",
      mail:"royswastik047@gmail.com",
      phone:"8101858528",
    },
    {
      imageSrc: "./assets/IMG-20240814-WA0017.jpg",
      name: "MMK Lechler",
      role: "Event Management",
      mail:"floramosses123@gmail.com",
      phone:'9381072245',
    },
    {
      imageSrc: "./assets/IMG_3211.JPG",
      name: "Animesh",
      role: "Public Speaking",
      mail:"animeshsatyapragyanpatra@gmail.com ",
      phone:"9337269060",
    },
    {
      imageSrc: "./assets/SayantanBanerjee.jpg",
      name: "Sayantan banerjee",
      role: "Content Writing",
      mail:"sayantanbanerjee2022@gmail.com",
      phone:"8240679056",
    },
    {
      imageSrc: "./assets/IMG_20240814_121335.JPG",
      name: "Suraj Kumar",
      role: "Event Management",
      mail:"suraj8757868482@gamil.com",
      phone:"8102152665",
    },
    {
      imageSrc: "./assets/IMG_20240128_174103585.jpg",
      name: "Thanusree",
      role: "Public Speaking",
      mail:"thanusreemadhusudan@gmail.com",
      phone:"9390342185",
    },

    {
      imageSrc: "./assets/Shaswata.jpg",
      name: "Sashwata Ghosh",
      role: "Video Editing",
      mail:"shaswatanitdgpofficial@gmail.com ",
      phone:"7603065660",
    },
    {
      imageSrc: "./assets/IMG_20240814_163310.jpg",
      name: "Basudev Pal",
      role: "Event Management",
      mail:" palbasudev65@gmail.com ",
      phone:"7750907396",
    },
    {
      imageSrc: "./assets/IMG_20240323_133103.jpg",
      name: "Vishu J",
      role: "Graphic Desing",
      mail:"vishujudiyan2005@gmail.com",
      phone:"7017787150",
    },
    {
      imageSrc: "./assets/IMG_20240525_071011_398.jpg",
      name: "Utkarsh A",
      role: "Graphic Desing",
      mail:"uaashay@gmail.com",
      phone:"9060107102",
    },
    {
      imageSrc: "./assets/IMG_20240730_151418_739.jpg",
      name: "Darshit R",
      role: "Video Editing",
      mail:"darshitrawal27@gmail.com ",
      phone:"7976998315",
    },

    {
      imageSrc: "./assets/IMG-20231104-WA0077.jpg",
      name: "Aman Shaw",
      role: "Event Management",
      mail:"ayushaman709@gmail.com ",
      phone:"7980271149",
    },
    
    {
      imageSrc: "./assets/WhatsApp Image 2024-08-14 at 8.27.37 PM.jpeg",
      name: "Pulkit Sepat",
      role: "Graphic Desing",
      mail:"pulkitsepat@gmail.com",
      phone:"8000487872",
    },
    {
      imageSrc: "./assets/IMG-20240814-WA0011.jpg",
      name: "SHAMBhabi gupta",
      role: "Content Writing",
      mail:"shambhabigupta24@gmail.com ",
      phone:"7810871263",
    },
    {
      imageSrc: "./assets/Gopeshwar.jpg",
      name: "Gopeshwar kumar",
      role: "Web Developer",
      mail:"gopeshwarkumark@gmail.com",
      phone:"6205731951",
    },
    {
      imageSrc: "./assets/Screenshot_2024-08-14-19-30-36-66_6012fa4d4ddec268fc5c7112cbb265e7.jpg",
      name: "md Huzaifah alam",
      role: "Event Management",
      mail:"alamhuzaifah@gmail.com ",
      phone:"8910041459",
    },
    {
      imageSrc: "./assets/IMG_20240814_203251.jpg",
      name: "Rishab Soni",
      role: "Graphic Desing",
      mail:"rishabhsoni1803@gmail.com",
      phone:"6388660810",
    },
    {
      imageSrc: "./assets/IMG-20240815-WA0007.jpg",
      name: "Srirama Sai Bhavana",
      role: "Content Writing",
      mail:"ss.23cs8153@nitdgp.ac.in  ",
      phone:"9381770556",
    },

  ];
  const teamMembers1 = [
    {
      imageSrc: "./assets/shubahm.jpeg",
      name: "Shubham Ghosh",
      role: "President",
      mail:"ghoshshubham930@gmail.com",
      phone:"91530 42605",
    },
    {
      imageSrc: "./assets/IMG_20240814_120517.jpg",
      name: "Nabina Layek",
      role: "Vice President",
      mail:"layeknabina@gmail.com",
      phone:"73638 64294",
    },
    {
      imageSrc: "./assets/Debashis.bf44bff1.jpg",
      name: "debashish panigrahi",
      role: "General Secretary",
      mail:"debashis2003panigrahi@gmail.com",
      phone:"99387 69662",
    },
    
    {
      imageSrc: "./assets/vineet.jpeg",
      name: "vineet jeengar",
      role: "Treasurer",
      mail:"",
      phone:"93526 86123",
    },
    {
      imageSrc: "./assets/kens.jpeg",
      name: "KENS VenkateshWARULU",
      role: "Convenor",
      mail:"venlyndl2001@gmail.com",
      phone:"90327 95418",
    },
    {
      imageSrc: "./assets/rajeev.jpeg",
      name: "rajeev kumar yadav",
      role: "Tech Head",
      mail:"yadavrajeev1587@gmail.com",
      phone:"63928 33881",
    },
    {
      imageSrc: "./assets/Aniket_.8b6200b3.jpg",
      name: "Ainket Kamble",
      role: "Logistics Head",
      mail:"aniketkamble9192@gmail.com",
      phone:"93252 44725",
    },
    {
      imageSrc: "./assets/sumit.jpeg",
      name: "Sumit Rastogi",
      role: "Fest and Sponsership Head",
      mail:"sumitrastogi2003@gmail.com",
      phone:"91427 94435",
    },

    {
      imageSrc: "./assets/priyal.jpeg",
      name: "Priyal Bhalerao",
      role: "Event Head",
      mail:"priyalbhalerao13@gmail.com  ",
      phone:"87677 47389",
    },
    {
      imageSrc: "./assets/dharma.jpeg",
      name: "Dharma Teja",
      role: "Publicity Head",
      mail:"dharmateja3232@gmail.com",
      phone:"891942 8507",
    },
    {
      imageSrc: "./assets/Basab.ec7b21ad.jpeg",
      name: "Basab Lekhri",
      role: "Webd Head",
      mail:"bumbalekri08@gmail.com",
      phone:"93827 47295",
    },


  ];
  const teamMembers2 = [
    {
      imageSrc: "./assets/Jayant.jpg",
      name: "JAYANT MANDAL",
      role: "Sr Coordinator",
      mail:"jayantroot3@gmail.com",
      phone:"95318 65131",
    },
    {
      imageSrc: "./assets/Kirthika.6999743c.jpg",
      name: "KIRTHIKA S",
      role: "Sr Coordinator",
      mail:"skirthika2409@gmail.com",
      phone:"94760 51610",
    },
    {
      imageSrc: "./assets/Mohammed Asif.565a636a.jpg",
      name: "MOHAMMED ASIF",
      role:"Creative Head",
      mail: "mdasif28049@gmail.com",
      phone:"89672 90251",
    },
    {
      imageSrc: "./assets/ramya.f113c21e.jpg",
      name: "RAMYA AKALANKAM",
      role: "Sr Coordinator",
      mail:"akalankamramya84@gmail.com",
      phone:"90591 67355",
    },
    {
      imageSrc: "./assets/1713104296967-02.jpg",
      name: "KARTIKEYA",
      role: "Sr Coordinator",
      mail:"karthikeya4@gmail.com",
      phone:"89770 25556",
    },
    {
      imageSrc: "./assets/PRANESH.7bad8073.jpg",
      name: "Pranesh rao K",
      role: "Sr Coordiantor",
      mail:"praneshrao6936@gmail.com",
      phone:"96795 08518",
    },
    {
      imageSrc: "./assets/Rupali.3f1978e5.jpg",
      name: "Rupali kumari",
      role: "Content Head",
      mail:"rkumarirupali3489@gmail.com",
      phone:"91532 65972",
    },
    {
      imageSrc: "./assets/Arnab Banerjee.79320dab.jpg",
      name: "Arnab Banerjee",
      role: "Sr Coordinator",
      mail:"arnabbanerjee2003@gmail.com",
      phone:"+91 90645 92539",
    },

    {
      imageSrc: "./assets/Anshika.27c6b3f8.jpg",
      name: "Anshika Goswami",
      role: "Sr Coordinator",
      mail:"anshika4607@gmail.com",
      phone:"+91 80095 91725",
    },
    {
      imageSrc: "./assets/SAI SAHIL.b582a455.JPG",
      name: "D SAi sahil",
      role: "Deputy Treasurer",
      mail:"saisahilduvvuu1@gmail.com",
      phone:"+91 832 807 8950",
    },
    {
      imageSrc: "./assets/Sarmistha.64a9a910.jpg",
      name: "Sarmistha Naskar",
      role: "Sr Coordinator",
      mail:"Sarmisthan2003@gmail.com",
      phone:"+91 6289 762 949",
    },
    {
      imageSrc: "./assets/BeautyPlus Cam_20240504084809127_save.jpg",
      name: "SK RAJ ALI",
      role: "Sr Coordinator",
      mail:"skrajali062003@gmail.com",
      phone:"+91 96356 37725",
    },

    {
      imageSrc: "./assets/WhatsApp Image 2024-08-14 at 8.16.10 PM.jpeg",
      name: "Anshul kumar",
      role: "Sr Coordinator",
      mail:"pariraanshulkumar@gmail.com",
      phone:"+91 7488 898 308",
    },
    {
      imageSrc: "./assets/WhatsApp Image 2024-08-14 at 9.57.56 PM.jpeg",
      name: "MMSS MANIKANTA",
      role: "Sr Coordinator",
      mail:"mohanmeesala2005@gmail.com",
      phone:"95050 98186",
    },
    {
      imageSrc: "./assets/IMG_20240220_235105.jpg",
      name: "Kumar Shankar",
      role: "Sr Coordinator",
      mail:"kumarsankar2911@gmail.com",
      phone:"+91 63011 01659",
    },
    {
      imageSrc: "./assets/WhatsApp Image 2024-08-14 at 9.07.49 PM.jpeg",
      name: "Md Toufeeque Khan",
      role: "Sr Coordinator",
      mail:"mohammadtoufeequekhan786@gmail.com",
      phone:"+91 78424 05876",
    },
    {
      imageSrc: "./assets/IMG_20230918_144643.jpg",
      name: "Sivala Rishitha",
      role: "Sr Coordinator",
      mail:"sivalarishita@gmail.com",
      phone:"+91 90634 62911",
    },
    {
      imageSrc: "./assets/IMG-20240814-WA0018.jpg",
      name: "Deepsika Bishoye",
      role: "Sr Coordinator",
      mail:"deepsikabishoye1@gmail.com",
      phone:"+91 891 971 8045",
    },
    {
      imageSrc: "./assets/WhatsApp Image 2024-04-25 at 10.39.42 PM.jpeg",
      name: "Sanjib Maity",
      role: "Sr Coordinator",
      mail:"sanjibmaity200295@gmail.com",
      phone:"+91 98832 97925",
    },
    {
      imageSrc: "./assets/Screenshot_2024-08-15-13-06-36-96_99c04817c0de5652397fc8b56c3b3817.jpg",
      name: "Harshada Pawar",
      role: "Sr Coordinator",
      mail:"harshadapawar2402@gmail.com",
      phone:"+91 93567 04880",
    },
  ];

  return (
    <div className="main_card">
      <div className="heading">
        <p>TEAM RN</p>
      </div>
      <div className="facad_head">
        Faculty Advisor
      </div>
      <div className="facad_image">
        {faculty.map((member, index) => (
          <FacadCard
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
