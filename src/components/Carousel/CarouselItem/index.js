import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Carousel.module.css";
import useOnScreen from "@/hooks/useOnScreen";

const CarouselItem = ({ item, setLoaded }) => {
  const itemRef = useRef();
  const onScreenRef = useRef();
  const isOnScreen = useOnScreen(itemRef, "-5%");
  const [showAnimation, setShowAnimation] = useState(false);

  const textClassName = `textContainer-${item.id}`;

  useEffect(() => {
    let timer;
    if (isOnScreen) {
      timer = setTimeout(() => {
        if (isOnScreen === onScreenRef.current) {
          setShowAnimation(true);
        }
      }, 300);
    } else {
      setShowAnimation(false);
    }

    onScreenRef.current = isOnScreen;

    return () => clearTimeout(timer);
  }, [isOnScreen]);

  return (
    <div ref={itemRef}>
      {showAnimation ? (
        <div className={`${styles.textContainer} ${styles[textClassName]}`}>
          <h1 className={styles.title}>{item.title?.toLowerCase()}</h1>
          <h3 className={styles.subtitle}> {item.body}</h3>
        </div>
      ) : null}
      <Image
        src={item.imageUrl}
        className={`${styles.image} ${isOnScreen ? styles.imageAnimation : ""}`}
        alt="slides"
        priority
        onLoad={() => {
          if (setLoaded) setLoaded(true);
        }}
      />
    </div>
  );
};

export default CarouselItem;
