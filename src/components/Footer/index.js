import React, { useState } from "react";
import styles from "../../styles/Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const currentRoute = router.asPath;

  const handleLinkClick = (scrollTo) => {
    if (currentRoute !== "/") router.push("/");
    setTimeout(() => {
      const container = document.getElementById(scrollTo);
      container?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }, 150);
  };

  return (
    <footer className={styles.container}>
      <div className={styles.reservedContainer}>
        Copyright © 2023 AR Livings - All Rights Reserved.
        <span className={styles.developedBy}>Developed by: Digimont</span>
      </div>
    </footer>
  );
};

export default Footer;
