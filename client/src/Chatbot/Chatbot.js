import React, { useState, useRef, useEffect } from "react";
import styles from "./Chatbot.module.css";
import chatbotIcon from "../images/chatbot-icon.png";
import sendIcon from "../images/send-icon.png";

const Chatbot = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [text, setText] = useState("");

  const handleClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const [messages, setMessages] = useState([
    { message: "Hi 👋 How can I Help You ?", sent: false },
  ]);

  const chatContRef = useRef(null);

  useEffect(() => {
    chatContRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [isDialogOpen, messages]);

  const sendMessage = () => {
    if (text === "") return;
    const messageObj = {
      message: text,
      sent: true,
    };

    setMessages((prev) => [...prev, messageObj]);
    setText("");
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
          <div className={styles.backdrop} onClick={() => handleClick()}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
              <iframe
                width="100%"
                height="100%"
                allow="microphone;"
                src="https://console.dialogflow.com/api-client/demo/embedded/03d3ed30-fc31-4ea7-b379-103f99b71dc2"
              ></iframe>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chatbot;

/*<div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>
                  <div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>
                  <div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>
                  <div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>
                  <div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>
                  <div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>
                  <div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>
                  <div className={styles.received}>
                    Hi 👋 How can I Help You ?
                  </div>
                  <div className={styles.sent}>Im so fine blud</div>*/
