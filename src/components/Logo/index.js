import React from "react";
import Image from "next/image";
import styles from "../../styles/Logo.module.css";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (currentRoute !== "/") router.push("/");
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <Image
        className={styles.logo}
        priority={true}
        src={require("../../../public/logo.jpg")}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
