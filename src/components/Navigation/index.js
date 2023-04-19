import React, { useEffect, useRef } from "react";
import Logo from "../Logo";
import styles from "../../styles/Navigation.module.css";

import { AiFillInstagram } from "react-icons/ai";

import { FaTiktok } from "react-icons/fa";

import Image from "next/image";

const Navigation = () => {
  const navigationRef = useRef();
  const handleScroll = () => {
    /*    if (window.scrollY > navigationRef.current.clientHeight && !isMobile)
      navigationRef.current.classList.add(styles.animation);
    if (window.scrollY === 0)
      navigationRef.current.classList.remove(styles.animation); */
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navigationRef} className={styles.container}>
      <div className={styles.left}>
        <Logo />
      </div>

      <div className={styles.right}>
        <>
          <div className={styles.followIcons}>
            <a className={styles.download} href="flyer.pdf" download>
              <Image
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "5px",
                }}
                alt="download"
                src={require("../../../public/pdf.png")}
              />
            </a>
            <div
              onClick={() =>
                window.open("https://www.instagram.com/ar__living/", "_blank")
              }
              className={styles.followIcon}
            >
              <AiFillInstagram color="#C13584" size={28} />
            </div>
            <div
              onClick={() =>
                window.open("https://www.tiktok.com/@ar__living", "_blank")
              }
              className={styles.followIcon}
            >
              <FaTiktok color="black" size={25} />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Navigation;
