import React, { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import styles from "../../styles/Loader.module.css";

const Loader = ({ loaded }) => {
  useEffect(() => {
    if (loaded) {
      document.body.classList.remove("no-scroll");
    } else document.body.classList.add("no-scroll");
  }, [loaded]);

  if (loaded) return null;
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <ThreeCircles width="70" color="#008f97" />
      </div>
    </div>
  );
};

export default Loader;
