import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import techApply from "../public/images/Main-Banner.svg";
import logoSvg from "../public/images/logo.svg";
import upPoint from "../public/images/up-group-point.svg";
import downPoint from "../public/images/down-group-point.svg";
import axios from "axios";

export default function Home() {
  const [textBtn, setTextBtn] = useState("Send Notification");
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
        setStatusEmail(false);
        setTextBtn("Sended");
      })
      .catch((e) => {
        setTextBtn("Send Notification");
      });
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/src/images/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hello, I am a system engineer with more than 5 years working on technology projects in the backend area (Java) such as frontend (Angular and React) and development of hybrid and native mobile applications (Ionic and ReactNative) applying an agile scrum methodology"
        />
        <meta name="author" content="Sebastian Jordan Frontend" />
        <meta
          property="og:title"
          content="Hello to personal website where I show my skills and resume"
        />
        <meta
          property="og:description"
          content="My personal portfolio where I show my technical skills at the fullstack level"
        />
        <meta property="og:image" content="src/images/icon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sjmPanama" />
        <meta
          name="twitter:title"
          content="Hello to personal website where I show my skills and resume"
        />
        <meta
          name="twitter:description"
          content="My personal portfolio where I show my technical skills at the fullstack level"
        />
        <meta name="twitter:image" content="src/images/icon.png" />
        <title>
          Hi, i&apos;m Sebasti&aacute;n Jord&aacute;n this is my portfolio
        </title>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      <main className={styles.page}>
        <section className={styles.slideInfo}>
          <Image src={logoSvg} alt="logo" className={styles.logo} />
          <article>
            <Image
              src={upPoint}
              alt="up group point"
              className={styles.groupPoint}
            />
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
                placeholder="Email"
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
          <Image
            src={techApply}
            alt="tech apply"
            className={styles.techApply}
          />
        </section>
      </main>
    </>
  );
}
