import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const elem = document.querySelector(`[data-lang=nav-projects]`);
    if (pathname.includes("project")) {
      elem.classList.add("active");
    } else elem.classList.remove("active");
  }, [pathname]);

  return null;
}
