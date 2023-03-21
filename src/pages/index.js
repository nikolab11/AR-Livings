import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setAnimate(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>AR Livings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {animate ? (
          <div className={`${styles.backgroundImage} ${animate}`} />
        ) : null}
        <div className={styles.textContainer}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              alt="logo"
              src={require("../../public/logo.png")}
            />
          </div>
          <h2 className={styles.name}>AR Living</h2>
          <h4 className={styles.description}>
            Erleben Sie das BESTE von zwei Welten <br /> LIFESTYLE & SERVICE{" "}
            <br /> unter einem Dach
          </h4>
          <h1 className={styles.comingSoon}>COMING SOON</h1>
          <h5
            className={styles.link}
            onClick={() =>
              window.open(
                "mailto:reservations@arlivings.com?subject=''&body=''%20goes%20here"
              )
            }
          >
            reservations@arlivings.com
          </h5>

          <a className={styles.download} href="flyer.pdf" download>
            <p className={styles.downloadText}>Download our flyer</p>
            <Image
              className={styles.downloadIcon}
              alt="download"
              src={require("../../public/pdf.png")}
            />
          </a>
        </div>
      </main>
    </>
  );
}
