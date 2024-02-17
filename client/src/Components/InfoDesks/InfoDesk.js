import React from "react";
import styles from "./Infodesk.module.css";
import directorImg from "../../images/director.png";

const InfoDesk = () => {
  let cardscontent = ["Academic", "Programmes", "Faculty", "Admission"];

  let noticesection = ["Notice", "Tender", "Contracts"];

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
              <div className={styles.acad_cards}>
                <div className={styles.acad_cards} key={index}>
                  {ele}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.noticescont}>
          {noticesection.map((ele, index) => {
            return (
              <div className={styles.cont}>
                <div className={styles.noticeheading} key={index}>
                  {ele}
                </div>
                <div className={styles.noticecontent}></div>
                <div className={styles.noticefootcontent}>
                  <button className={styles.viewnoticebtn}>View All</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.recruitercont}>
          <div className={styles.recruitheading}>Our Recruiters</div>
        </div>
      </div>
    </div>
  );
};

export default InfoDesk;
