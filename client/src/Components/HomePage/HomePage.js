import React from "react";
import styles from "./HomePage.module.css";
import banner from "../../images/banner.jpg";
import InfoDesk from "../InfoDesks/InfoDesk";

const HomePage = () => {
  let subnavlinks = [
    "Home (Current)",
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

  return (
    <>
      <div className={styles.navcont}>
        <div className={styles.leftcont}>
          Admission | pgportal.gov.in | Placement | Notice | |
        </div>
        <div className={styles.rightcont}>
          Web mail | ERP Login | Office Login | A+ | A- | A|
        </div>
      </div>
      <div className={styles.bannercont}>
        <img
          alt="banner"
          src={banner}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.subnavs}>
        {subnavlinks.map((ele, index) => {
          return (
            <div key={index} className={styles.subnavlink}>
              {ele}
            </div>
          );
        })}
      </div>
      <div className={styles.carouselcont}></div>
      <div className={styles.headlinescont}>
        <div className={styles.heading}>Current Updates</div>
        <div className={styles.headlines}></div>
      </div>
      <InfoDesk />
    </>
  );
};

export default HomePage;
