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
        <ul style={{ marginTop: "2em", fontSize: "large", cursor: "pointer" }}>
          <li>Vision & Mission</li>
          <li>Notice</li>
          <li>Location on Map</li>
          <li>E-Notice App</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>Important Links</div>
        <ul style={{ marginTop: "2em", fontSize: "large", cursor: "pointer" }}>
          <li>Scholarship</li>
          <li>T&P Cell</li>
          <li>Convocation 2024</li>
          <li>Admission</li>
          <li>B.Tech. Programme</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>Helpdesk</div>
        <ul style={{ marginTop: "2em", fontSize: "large", cursor: "pointer" }}>
          <li>Fax No : +91-0755-2670562</li>
          <li>Last Updated : Fri, Feb 16, 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
