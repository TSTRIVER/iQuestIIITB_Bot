import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footercont}>
      <div className={styles.section}>
        <div className={styles.heading}>Contact Us</div>
        <p style={{ textAlign: "justify", marginTop: "2em" }}>
          C/O Maulana Azad National Institute of Technology (MANIT), Bhopal Room
          No TC-105, New Teaching Block, MANIT, Bhopal, MP, India Pin code :
          462003 Phone : 0755-4051950 Email: info@iiitbhopal.ac.in
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>Useful Links</div>
        <ul style={{ marginTop: "2vw", fontSize: "1.2vw" }}>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0001/SM0002/">
              Vision & Mission
            </a>
          </li>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0001/SM0002/">Notice</a>
          </li>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0001/SM0002/">
              Location on Map
            </a>
          </li>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0001/SM0002/">E-Notice App</a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>Important Links</div>
        <ul style={{ marginTop: "2vw", fontSize: "1.2vw" }}>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0002/SM0036/NSM0036">
              Scholarship
            </a>
          </li>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0002/SM0036/NSM0036">
              T&P Cell
            </a>
          </li>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0002/SM0036/NSM0036">
              Convocation 2024
            </a>
          </li>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0002/SM0036/NSM0036">
              Admission
            </a>
          </li>
          <li>
            <a href="https://iiitbhopal.ac.in/#!/M0002/SM0036/NSM0036">
              B.Tech. Programme
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>Helpdesk</div>
        <ul style={{ marginTop: "2vw", fontSize: "1.2vw" }}>
          <li>Fax No : +91-0755-2670562</li>
          <li>Last Updated : Fri, Feb 16, 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
