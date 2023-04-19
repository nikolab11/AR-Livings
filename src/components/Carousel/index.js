import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";
import CarouselItem from "./CarouselItem";

export default function Carousel({ isMobile, setLoaded }) {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      title: t("carousel-franfurt-title"),
      body: t("carousel-franfurt-subtitle"),
      imageUrl: require("../../../public/frankfurt.jpg"),
    },
    {
      id: 2,
      title: t("carousel-mainz-title"),
      body: t("carousel-mainz-subtitle"),
      imageUrl: require("../../../public/mainz.jpg"),
    },
    {
      id: 3,
      title: t("carousel-budva-title"),
      body: t("carousel-budva-subtitle"),
      imageUrl: require("../../../public/budva.jpg"),
    },
    {
      id: 4,
      title: t("carousel-berlin-title"),
      body: t("carousel-berlin-subtitle"),
      imageUrl: require("../../../public/berlin.jpg"),
    },
    {
      id: 7,
      title: "AMAZING STAY",
      body: "Exceptional Hospitality",
      imageUrl: require("../../../public/carousel1.jpg"),
    },
    {
      id: 5,
      title: t("carousel-hamburg-title"),
      body: t("carousel-hamburg-subtitle"),
      imageUrl: require("../../../public/hamburg.jpg"),
    },
    {
      id: 9,
      imageUrl: require("../../../public/carousel3.jpg"),
    },
    {
      id: 6,
      title: t("carousel-vienna-title"),
      body: t("carousel-munich-subtitle"),
      imageUrl: require("../../../public/Vienna.jpg"),
    },
    {
      id: 8,
      title: "ENJOY",
      body: "Every summer has its own story",
      imageUrl: require("../../../public/carousel2.jpg"),
    },
  ];
  return (
    <AliceCarousel
      infinite
      autoPlay={true}
      autoPlayInterval={3500}
      touchTracking={isMobile}
      disableDotsControls={true}
      items={items.map((item) => (
        <CarouselItem setLoaded={setLoaded} key={item.id} item={item} />
      ))}
    />
  );
}
