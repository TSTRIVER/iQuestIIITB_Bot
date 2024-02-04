import React from "react";
import styles from "./navbar.module.css";
import chatbotIcon from "../images/chatbot-icon.png";

const Navbar = () => {
  return (
    <div className={styles.navcont}>
      <img src={chatbotIcon} alt="chatbotIcon" className={styles.img} />
      <h1 className={styles.title}>
        <i>iQuest</i>
        <i style={{ color: "yellow" }}>IIITB</i>
      </h1>
    </div>
  );
};

export default Navbar;
