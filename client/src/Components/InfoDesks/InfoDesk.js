import React from "react";
import styles from "./Infodesk.module.css";
import directorImg from "../../images/director.png";

const InfoDesk = () => {
  let cardscontent = ["Academic", "Programmes", "Faculty", "Admission"];

  let noticesection = ["Notice", "Tender", "Contracts"];

  let notices = [
    {
      name: "List of Eligible/ Ineligible Applicants for the Post of Registrar ",
    },
    {
      name: "Notice regarding payment of hostel fee and mess charges (Jan-Jun 2024) ",
    },
    {
      name: "Notification to refund application fee for the post of Assistant Registrar - Feb 2024 ",
    },
    {
      name: "Application form for the post of Assistant Professor (On Contract, Pay Level-10) 2024",
    },
    {
      name: "The detailed rolling advertisement for the post of Assistant Professor (On Contract, Pay Level-10) - 2024",
    },
  ];

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

  let companies = [
    "Amazon",
    "Microsoft",
    "NVIDIA",
    "Samsung",
    "Adobe",
    "Qualcomm",
    "Atlassian",
    "MAQ Software",
    "NI (National Instruments)",
    "Flipkart",
    "Newzera",
    "TCS",
    "Intuit",
    "COMVIVA",
    "JIVOX",
    "GEP Worldwide",
    "Infoedge",
    "Sciative Solutions",
    "OpenFive",
  ];

  const view = (index) => {
    if (index === 0) {
      window.location.href = "https://iiitbhopal.ac.in/#!/Notice";
    } else {
      window.location.href = "https://iiitbhopal.ac.in/#!/Tender";
    }
  };

  return (
    <div className={styles.infodeskcont}>
      <div className={styles.maincont}>
        <div className={`${styles.directormsg} ${styles.m1}`}>
          Message From Director Desk
        </div>
        <div className={styles.directorcontent}>
          <div className={styles.directorcontact}>
            <img alt="director_profile" src={directorImg} />
            <h2 className={styles.details}>Dr. Ashutosh Kumar Singh</h2>
            <h2 className={styles.details}>Director, IIIT Bhopal</h2>
            <h2 className={styles.details}>director@iiitbhopal.ac.in</h2>
            <h2 className={styles.details}>0755-4051951</h2>
          </div>
          <div className={styles.directormessage}>
            The Indian Institute of Information Technology, Bhopal, established
            in 2017 as an Institute of National Importance through a
            not-for-profit Public Private Partnership with the Ministry of
            Education, Government of India, is dedicated to providing top-tier
            technical education. Our vision is to be a pioneer in generating new
            ideas and innovations in technology and science. Committed to
            excellence, we prepare students for leadership roles, fostering
            intellectual curiosity, critical thinking, and a passion for
            lifelong learning. Our interdisciplinary approach encourages
            collaboration between students and faculty to address complex social
            and research challenges. We continually update our curriculum to
            align with industry needs and actively engage with leading
            industries for real-world projects and internships. Holistic
            development is prioritized, emphasizing personal growth, leadership
            abilities, ethical values, and social responsibility. We aim to
            recruit distinguished faculty members, serving as mentors, and
            fostering an environment of continuous improvement and innovation.
            Collaboration with the broader community and industry partners is
            central to driving societal progress.
          </div>
          <div className={styles.followdetails}></div>
        </div>
        <div className={`${styles.directormsg} ${styles.m2}`}>
          Academic Information Desk
        </div>
        <div className={styles.cardscont}>
          {cardscontent.map((ele, index) => {
            return (
              <div className={styles.acad_cards} key={index}>
                {ele}
              </div>
            );
          })}
        </div>
        <div className={styles.noticescont}>
          {noticesection.map((ele, index) => {
            return (
              <div className={styles.cont}>
                <div
                  className={styles.noticeheading}
                  key={index}
                  style={
                    index !== 0
                      ? { backgroundColor: "rgb(31, 7, 120)" }
                      : { backgroundColor: "rgb(254, 165, 0)" }
                  }
                >
                  {ele}
                </div>
                <div className={styles.noticecontent}>
                  <div className={styles.scrollingBulletin}>
                    <ul>
                      {(index === 0 ? notices : tenders).map((ele, index) => {
                        return (
                          <li className={styles.noticeitem} key={index}>
                            {ele.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className={styles.noticefootcontent}>
                  <button
                    className={styles.viewnoticebtn}
                    onClick={() => view(index)}
                  >
                    View All
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.recruitercont}>
          <div className={styles.recruitheading}>Our Recruiters</div>
          <div className={styles.companyBulletin}>
            <ul className={styles.bulletinCompanyList}>
              {companies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.linkscont}>
          <button
            className={styles.linkbuttons}
            style={{ backgroundColor: "rgb(31, 7, 120)" }}
            onClick={() => {
              window.location.href = "https://iiitbhopal.ac.in/#!/Gallery";
            }}
          >
            Photo Gallery
          </button>
          <button
            className={styles.linkbuttons}
            style={{ backgroundColor: "rgb(254, 165, 0)" }}
            onClick={() => {
              window.location.href = "https://iiitbhopal.ac.in/#!/Press";
            }}
          >
            Press & Media
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoDesk;
