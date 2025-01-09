import React, { useState } from 'react';
import './Tabs.css'; // Assuming you have your CSS here

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [oldId, setOldId] = useState(null);

  const tabs = [
    "Batch 2004", "Batch 2005", "Batch 2007", "Batch 2008", "Batch 2010",
    "Batch 2011", "Batch 2012", "Batch 2013", "Batch 2014", "Batch 2015",
    "Batch 2016", "Batch 2017", "Batch 2018", "Batch 2019", "Batch 2020"
  ];

  const batchMembers = {
    "Batch 2004": ["Arjun Mehra", "Arun Krishnamoorthy", "Piyush Chitkara","Santhosh","Sangeet Somakumar"],
    "Batch 2005": ["Samrat Chakravorty","Deepu","Anil Nagpal"],
    "Batch 2007": ["Shankaransh Srivastava","Anubhav Mehta","Swati Gorade","Sanghamitra Das","Arpita Banerjee"],
    "Batch 2008": ["Sandhya","Varsha Gupta","Vasu Irneni","Ria Baki Lalu"],
    "Batch 2010": ["Keshav Gupta","Harshit Arya","Anjali Mathur"],
    "Batch 2011": ["Shivang Singh","Jitendra Kushram"],
    "Batch 2012": ["Pallavi Chaurasia","Anupam Anand","Himanshu","R Sanish","Aman Kumar","Shivang","M Ramsundharsan","Abhijith T","S H Nilofer Maideen","Swathi Mehta"],
    "Batch 2013": ["Ahmed Meeran","Kavishaq Agarwal","Rishabh Pankaj","Vivek Kumar Singh","Gaurav Agarwal","Diksha Dubey","B Harika","Rahul Ranjan"],
    "Batch 2014": ["Mahesh Nayak","Pooja Maurya","Nithin Thomas","Jyoti Singh","Ujas B Nandasana","Chetender Chauhan"],
    "Batch 2015": ["Nancy","Rahul Singh","Sarwani Kumari","Hema Maurya","Swarnendu Mondal","Chandan Tyagi"],
    "Batch 2016": ["Anshu Kumari","Kunal D Dekate","S Hariharan","Aryaman Panda","Sanhita Pal","Sayoni Shah","Nitika Mondal","Sachin K Yadav"],
    "Batch 2017": ["Kuldeep Suthar","Pooja Yadhav","Pratik Biswas","Gourav Dogra","Kritika Gora","Sourav Das","Amit Dalai","Ashish Kumar"],
    "Batch 2018": ["Arjya Singh Roy","Ankita Singha","Gourab Mondal","Sayantan Maity","Kiran P Abraham","Pavan Preetham"],
    "Batch 2019": ["Sonali Sah","Aditya Gupta","Ayush Chaudary","Ayush Singh","Aditi Gedam","Praghya Kumari"],
    "Batch 2020": ["Dhiraj Kumar","Akshay A Baiju","Priyanshu Burman","Kalyan Choubey","Ashish Raj","Amool Khudia","Sumit Kumar Sah","Sankalp Mishra"]
  };

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    if (tabId === activeTab) return;

    if (tabId < oldId) {
      let timing = document.querySelectorAll('.card.hidden').length * 100;
      document.querySelectorAll('.card').forEach((card, index) => {
        if (index >= tabId - 1) {
          setTimeout(() => {
            card.classList.remove('hidden');
          }, timing - index * 100);
        }
      });
    } else {
      document.querySelectorAll('.card').forEach((card, index) => {
        if (index < tabId - 1) {
          setTimeout(() => {
            card.classList.add('hidden');
          }, index * 100);
        }
      });
    }

    setOldId(activeTab);
    setActiveTab(tabId);
  };

  return (
    <section className="page">
      <section>
        <ul className="tabs-controls">
          {tabs.map((label, index) => (
            <li className="tabs-controls__item" key={index}>
              <a
                href="#"
                className={`tabs-controls__link ${activeTab === index + 1 ? 'tabs-controls__link--active' : ''}`}
                onClick={(e) => handleTabClick(e, index + 1)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="cards-container">
        {tabs.map((label, index) => (
          <div className={`card ${activeTab === index + 1 ? 'card--current' : ''}`} id={index + 1} key={index}>
            <h1 className='mem'>{label}</h1>
          
            <ul>
              {batchMembers[label].map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Tabs;
