import React, { useState } from "react";
import styles from "./form.module.css";
import Register from "./Register";
import Login from "./Login";

const FormToggler = () => {
  const form = ["Register", "Login"];
  const [cnt, setCnt] = useState(0);

  const toggle = (index) => {
    setCnt(index);
  };

  return (
    <div className={styles.formbarscont}>
      <div className={styles.barscont}>
        {form?.map((item, index) => {
          return (
            <button
              className={`${styles.bars} ${
                cnt === index ? styles.bars2 : styles.bars1
              }`}
              key={index}
              onClick={() => toggle(index)}
            >
              <h3 style={{ color: "navy" }}>{item}</h3>
            </button>
          );
        })}
      </div>
      {cnt === 0 ? <Register /> : <Login />}
    </div>
  );
};

export default FormToggler;
