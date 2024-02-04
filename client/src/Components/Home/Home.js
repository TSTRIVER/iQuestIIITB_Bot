import React from "react";
import styles from "./home.module.css";
import FormToggler from "../Forms/FormToggler";

const Home = () => {
  return (
    <div className={styles.maincont}>
      <div className={styles.left_cont}>
        <div className={styles.content}>
          <h1 className={styles.h1}>Student Enquiry System</h1>
          <h2 className={styles.h2}>
            ChatBOT Designed to cater student enquiries..
          </h2>
          <h3 className={styles.h3}>
            <i>~ Indian Institute of Information Technology, Bhopal</i>
          </h3>
        </div>
      </div>
      <div className={styles.right_cont}>
        <FormToggler />
      </div>
    </div>
  );
};

export default Home;
