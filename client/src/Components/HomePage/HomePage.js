import React, { useState } from "react";
import styles from "./HomePage.module.css";
import banner from "../../images/banner.jpg";
import convo from "../../images/convo.png";
import desh from "../../images/desh.png";
import pledge from "../../images/pledge.png";
import sports from "../../images/sports.png";
import vote from "../../images/vote.png";
import InfoDesk from "../InfoDesks/InfoDesk";
import Footer from "../../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomePage = () => {
  let subnavlinks = [
    "Home",
    "About Us",
    "Academics",
    "Department",
    "Research",
    "People",
    "Placement",
    "Anti-Ragging",
    "Quick Links",
    "Life @IIIT Bhopal",
  ];
  let mapping = {
    0: ["Home"],
    1: [
      "About Institute ",
      "Vision & Mission",
      "Director's Message",
      "Ordinance",
    ],
    2: ["Btech - UG", "MCA - PG", "Academic Calendar"],
    3: ["ECE", "CSE", "IT"],
    4: ["Research Areas", "Faculty", "Research Scholars"],
    5: ["Administration", "Faculty", "Staff"],
    6: ["TnP Cell", "Internship"],
    7: ["Commitee", "Helpline"],
    8: ["Recruitment", "Right to Information"],
    9: ["Libary", "Hostel", "IEEE", "Sports", "Clubs"],
  };

  let links = {
    0: "https://iiitbhopal.ac.in/#!/",
    1: "https://iiitbhopal.ac.in/#!/M0001/SM0001/",
    2: "https://iiitbhopal.ac.in/#!/M0002/SM0035/",
    3: "https://iiitbhopal.ac.in/#!/M0009/SM0047/",
    4: "https://iiitbhopal.ac.in/#!/M0010/SM0059/",
    5: "https://iiitbhopal.ac.in/#!/M0003/SM0017/",
    6: "https://iiitbhopal.ac.in/#!/M0005/SM0032/NSM0046",
    7: "https://iiitbhopal.ac.in/#!/M0008/SM0052/",
    8: "https://iiitbhopal.ac.in/#!/M0006/SM0067/",
    9: "https://iiitbhopal.ac.in/#!/M0004/SM0021/",
  };

  const [menuClass, setMenuClass] = useState(styles.topnav);

  const toggleMenu = () => {
    setMenuClass((prevClass) =>
      prevClass === styles.topnav
        ? `${styles.topnav} ${styles.responsive}`
        : styles.topnav
    );
  };

  let tenders = [
    {
      name: "Corrigendum on TENDER for Hiring of Building for Hostel Facility to Students (Boys) - 2024",
    },
    {
      name: "Corrigendum on TENDER for Hiring of Building for Hostel Facility to Students (Girls) - 2024 ",
    },
    {
      name: "NOTICE INVITING TENDER for Hiring of Building for Hostel Facility to Students (Boys) - 2024",
    },
    {
      name: "NOTICE INVITING TENDER for Hiring of Building for Hostel Facility to Students (Girls) - 2024 ",
    },
  ];

  return (
    <>
      <div className={styles.navcont}>
        <div className={styles.leftcont}>
          <a
            href="https://iiitbhopal.ac.in/#!/M0002/SM0036/NSM0031"
            className={styles.navlinks}
          >
            Admission
          </a>{" "}
          |{" "}
          <a href="https://pgportal.gov.in/" className={styles.navlinks}>
            pgportal.gov.in
          </a>{" "}
          |{" "}
          <a
            href="https://iiitbhopal.ac.in/#!/M0005/SM0032/NSM0046"
            className={styles.navlinks}
          >
            Placement
          </a>{" "}
          |{" "}
          <a
            href="https://iiitbhopal.ac.in/#!/Notice"
            className={styles.navlinks}
          >
            Notice
          </a>{" "}
          |{" "}
          <a
            href="https://www.rtip2r-conference.org/2024/"
            className={styles.navlinks}
          >
            RTIP2R Conference 2024
          </a>
          | |
        </div>
        <div className={styles.rightcont}>
          <a
            href="https://shiksha.iiitbhopal.ac.in/"
            className={styles.navlinks}
          >
            Moodle
          </a>{" "}
          |{" "}
          <a
            href="https://shiksha.iiitbhopal.ac.in/"
            className={styles.navlinks}
          >
            Web Mail
          </a>{" "}
          |
          <a
            href="https://shiksha.iiitbhopal.ac.in/"
            className={styles.navlinks}
          >
            {" "}
            ERP Login
          </a>{" "}
          |{" "}
          <a
            href="https://shiksha.iiitbhopal.ac.in/"
            className={styles.navlinks}
          >
            {" "}
            Office Login
          </a>
        </div>
      </div>
      <div className={styles.bannercont}>
        <img alt="banner" src={banner} className={styles.bannerimg} />
      </div>
      <div className={menuClass} id={styles.myTopnav}>
        {subnavlinks.map((ele, indexs) => {
          if (indexs >= 0) {
            return (
              <div key={indexs} className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  {ele}
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className={styles.dropdown_content}>
                  {mapping[indexs].map((elem, index) => {
                    return (
                      <a key={index} href={links[indexs]}>
                        {elem}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
        <a
          href="javascript:void(0);"
          style={{ fontSize: "15px", color: "white", textDecoration: "none" }}
          className={styles.icon}
          onClick={() => toggleMenu()}
        >
          &#9776;
        </a>
      </div>
      <div>
        <Carousel
          showThumbs={false}
          autoPlay
          interval="5000"
          transitionTime="5000"
          style={{ width: "100%", height: "100%" }}
        >
          <div>
            <img src={convo} />
          </div>
          <div>
            <img src={desh} />
          </div>
          <div>
            <img src={pledge} />
          </div>
          <div>
            <img src={sports} />
          </div>
          <div>
            <img src={vote} />
          </div>
        </Carousel>
      </div>
      <div className={styles.headlinescont}>
        <div className={styles.heading}>Current Updates</div>
        <div className={styles.headlines}>
          <ul className={styles.bulletin}>
            {tenders.map((ele, index) => {
              return <li key={index}>{ele.name} |</li>;
            })}
          </ul>
        </div>
      </div>
      <InfoDesk />
      <Footer />
    </>
  );
};

export default HomePage;
