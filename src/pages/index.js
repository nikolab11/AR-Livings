import { useState, useEffect, useRef } from "react";
import Loader from "@/components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { loadTranslations } from "@/api/api";
import Carousel from "@/components/Carousel";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  const loadTranslationsFromDb = async () => {
    const translations = await loadTranslations();
    if (translations) {
      const { eng, ger, srb } = translations;

      i18n.addResourceBundle("eng", "translation", eng, true, false);
      i18n.addResourceBundle("ger", "translation", ger, true, false);
      i18n.addResourceBundle("srb", "translation", srb, true, false);
    }
  };

  useEffect(() => {
    loadTranslationsFromDb()
      .then(() => {
        setTranslationsLoaded(true);
      })
      .catch((err) => console.log("Error: " + err));

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (!translationsLoaded)
    return (
      <I18nextProvider i18n={i18n}>
        <Loader loaded={false} />
      </I18nextProvider>
    );

  return (
    <I18nextProvider i18n={i18n}>
      <Loader loaded={true} />
      <Navigation />
      <Carousel />
      <Footer />
    </I18nextProvider>
  );
}
