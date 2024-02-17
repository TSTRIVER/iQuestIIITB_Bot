import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import chatbotIcon from "../images/chatbot-icon.png";

const Chatbot = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <div className={styles.outerstrip}>
        <div className={styles.innerstrip} onClick={() => handleClick()}>
          <img
            src={chatbotIcon}
            alt="chatbot-icon"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      {isDialogOpen && (
        <>
          <div className={styles.backdrop} onClick={handleClick} />
          <div className={styles.dialog}>
            <div className={styles.dialogheader}></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 640">
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,277.3C672,299,768,309,864,298.7C960,288,1056,256,1152,240C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </>
      )}
    </>
  );
};

export default Chatbot;
