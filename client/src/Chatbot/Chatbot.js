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
              <div className={styles.dialogheader}>
                <h1 className={styles.headertitle}>
                  <i>iQuest</i>
                  <i style={{ color: "yellow" }}>IIITB</i>
                </h1>
              </div>
              <svg
                width="100%"
                id="svg"
                viewBox="0 0 1440 310"
                xmlns="http://www.w3.org/2000/svg"
                class="transition duration-300 ease-in-out delay-150"
                display="block"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="67%"
                    y1="97%"
                    x2="33%"
                    y2="3%"
                  >
                    <stop offset="5%" stop-color="#0693e3"></stop>
                    <stop offset="95%" stop-color="#8ED1FC"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0,400 L 0,150 C 108.07142857142858,160.10714285714286 216.14285714285717,170.21428571428572 349,171 C 481.85714285714283,171.78571428571428 639.5,163.25 773,143 C 906.5,122.74999999999999 1015.8571428571429,90.78571428571428 1123,90 C 1230.142857142857,89.21428571428572 1335.0714285714284,119.60714285714286 1440,150 L 1440,400 L 0,400 Z"
                  stroke="none"
                  stroke-width="0"
                  fill="url(#gradient)"
                  fill-opacity="1"
                  class="transition-all duration-300 ease-in-out delay-150 path-0"
                  transform="rotate(-180 720 200)"
                ></path>
                <text x="65" y="100" font-size="3em" fill="white">
                  We are online!
                </text>
              </svg>
              <div className={styles.chatcont}>
                <div ref={chatContRef} className={styles.chatInnerCont}>
                  {messages?.map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className={ele.sent ? styles.sent : styles.received}
                      >
                        {ele.message}
                      </div>
                    );
                  })}
                </div>
              </div>
              <input
                autoFocus
                onClick={(e) => e.stopPropagation()}
                type="text"
                placeholder="Enter Your Message.."
                className={styles.inputer}
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button className={styles.sendbtn} onClick={() => sendMessage()}>
                <img src={sendIcon} alt="send" />
              </button>
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
                  <div className={styles.sent}>Im so fine blud</div>
                  
                  
                  <iframe
                width="100%"
                height="100%"
                allow="microphone;"
                src="https://console.dialogflow.com/api-client/demo/embedded/03d3ed30-fc31-4ea7-b379-103f99b71dc2"
              ></iframe>
                  
                  
                  */
