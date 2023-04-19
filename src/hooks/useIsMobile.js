import React from "react";

export default function useIsMobile() {
  const [isMobile, setisMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1150) {
      setisMobile(false);
    } else setisMobile(true);
  };

  React.useEffect(() => {
    if (window.innerWidth < 1150) setisMobile(true);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
