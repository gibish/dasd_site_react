import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../../App";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import BtnLanguage from "../btnLanguage/BtnLanguage";
import Text from "../../lng/lng_nav";

function Navbar() {
  const activeLink = "nav__item active";
  const normalLink = "nav__item";

  const { currentLanguage } = useContext(CurrentLanguageContext);

  useEffect(() => {
    for (const key in Text) {
      const elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.textContent = Text[key][currentLanguage];
      }
    }
  }, [currentLanguage]);

  return (
    <nav className="nav" id="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__menu nav__menu-hidden" id="nav_menu">
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
            {/* <a className="nav__item active" data-lang="nav-main" href="./index.html">
              Main
            </a> */}
            {/* <a className="nav__item" data-lang="nav-department" href="./department.html">
              About department
            </a> */}
            {/* <a className="nav__item" data-lang="nav-institute" href="./institute.html">
              About institute
            </a> */}
            {/* <a className="nav__item" data-lang="nav-projects" href="./projects.html">
              Projects
            </a> */}
            {/* <a className="nav__item" data-lang="nav-staff" href="./staff.html">
              Staff
            </a> */}
            {/* <a className="nav__item" data-lang="nav-publications" href="./publications.html">
              Publications
            </a> */}
            {/* <a className="nav__item" data-lang="nav-contacts" href="./contacts.html">
              Contacts
            </a> */}
          </div>

          <div className="nav__menu">
            <BtnDarkMode />
            <BtnLanguage />
          </div>

          <button className="nav-toggle" id="nav_toggle" type="button">
            <span className="nav-toggle__item">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
