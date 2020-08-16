import { useEffect, useState } from "react";

export const useScroll = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => {
      window.scrollY > 90 ? setHidden(true) : setHidden(false);
    };
    window.addEventListener("scroll", hide);
    return () => {
      window.removeEventListener("scroll", hide);
    };
  }, []);
  return { hidden };
};
