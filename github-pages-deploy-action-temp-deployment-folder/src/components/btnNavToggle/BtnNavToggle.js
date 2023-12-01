import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BtnNavToggle() {
  const navToggle = document.getElementById("nav_toggle");
  const navMenu = document.getElementById("nav_menu");
  const { pathname } = useLocation();

  useEffect(() => {
    navMenu.classList.remove("nav__menu-active");
    navToggle.classList.remove("active");
  }, [pathname, navMenu.classList, navToggle.classList]);

  const toggleMenu = () => {
    navMenu.classList.toggle("nav__menu-active");
    navToggle.classList.toggle("active");
  };

  return (
    <button className="nav-toggle" id="nav_toggle" type="button" onClick={toggleMenu}>
      <span className="nav-toggle__item">Menu</span>
    </button>
  );
}

export default BtnNavToggle;
