import React, { useState } from "react";
import styles from "./form.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.logincont}>
      <div>
        <h2>Email</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>
      <div style={{ marginTop: "5em" }}>
        <h2>Password</h2>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
      </div>
      <button className={styles.submit}>Submit</button>
    </div>
  );
};

export default Login;
