import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/UnderConstruction.module.css";
import techApply from "../public/images/Main-Banner.svg";
import logoSvg from "../public/images/logo.svg";
import upPoint from "../public/images/up-group-point.svg";
import axios from "axios";
export function UnderConstruction() {
  const [textBtn, setTextBtn] = useState("Notify me");
  const [emailInput, setEmail] = useState("");
  const [sendingEmail, setStatusEmail] = useState(false);

  const handleChange = (event) => {
    setEmail({ value: event.target.value });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setTextBtn("Loading");
    setStatusEmail(true);
    axios
      .post("api/email", { email: emailInput.value })
      .then((res) => {
        console.log(res.data);
        setStatusEmail(false);
        setTextBtn("Sended");
      })
      .catch((e) => {
        setTextBtn("Error");
      });
  };
  return (
    <div className={styles.page}>
      <section className={styles.slideInfo}>
        <div className="pt-8">
          <Image src={logoSvg} alt="logo" />
        </div>
        <article>
          <div className={styles.groupPoint}>
            <Image src={upPoint} alt="up group point" />
          </div>
          <h1 className={styles.title}>Under Construction</h1>
          <p className={styles.description}>
            My website is currently undergoing .
            <br />
            Should be back shortly, thanks you for you patience.
          </p>
          <form onSubmit={sendEmail}>
            <input
              required
              disabled={sendingEmail}
              type="email"
              name="email"
              placeholder="Enter your email"
              className={styles.email}
              value={emailInput.value}
              onChange={handleChange}
            ></input>
            <button
              className={styles.btnEmail}
              onClick={sendEmail}
              type="submit"
            >
              {textBtn}
            </button>
          </form>
        </article>
      </section>
      <section>
        <div className={styles.techApply}>
          <Image src={techApply} alt="tech apply" />
        </div>
      </section>
    </div>
  );
}
