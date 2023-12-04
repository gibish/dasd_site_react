import { useContext, useEffect, useState } from "react";
import { CurrentLanguageContext } from "../../App";
import { NavLink, useLocation } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import BtnLanguage from "../btnLanguage/BtnLanguage";
import BtnNavToggle from "../btnNavToggle/BtnNavToggle";
import Text from "../../lng/lng_nav";

function Navbar() {
  const activeLink = "nav__item active";
  const normalLink = "nav__item";

  const { currentLanguage } = useContext(CurrentLanguageContext);
  const [toggleActive, setToggleActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    for (const key in Text) {
      const elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.textContent = Text[key][currentLanguage];
      }
    }
  }, [currentLanguage]);

  useEffect(() => {
    setToggleActive(false);
  }, [pathname]);

  const normalClass = "nav__menu nav__menu-hidden";
  const activeClass = "nav__menu nav__menu-hidden nav__menu-active";

  return (
    <nav className="nav" id="nav">
      <div className="container">
        <div className="nav__inner">
          <div className={toggleActive ? activeClass : normalClass} id="nav_menu">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)} data-lang="nav-main">
              Main
            </NavLink>
            <NavLink
              to="/department"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              data-lang="nav-department"
            >
              About department
            </NavLink>
            <NavLink
              to="/institute"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              data-lang="nav-institute"
            >
              About institute
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              data-lang="nav-projects"
            >
              Projects
            </NavLink>
            <NavLink
              to="/staff"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              data-lang="nav-staff"
            >
              Staff
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              data-lang="nav-publications"
            >
              Publications
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              data-lang="nav-contacts"
            >
              Contacts
            </NavLink>
          </div>
          <div className="nav__menu">
            <BtnDarkMode />
            <BtnLanguage />
          </div>
          <BtnNavToggle stateToggle={toggleActive} handlerToggle={setToggleActive} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
