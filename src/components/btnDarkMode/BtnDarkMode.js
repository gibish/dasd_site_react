import { useEffect } from "react";
import { useLocalStorage } from "./../../utils/useLocalStorage";

const darkIcon = `<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Dark"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>`;
const lightIcon = `<svg fill="currentColor" aria-hidden="true" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>`;

function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("theme", "dark");

  useEffect(() => {
    let imgLight = document.getElementById("img_light_theme");
    imgLight.innerHTML = lightIcon;
    let imgDark = document.getElementById("img_dark_theme");
    imgDark.innerHTML = darkIcon;
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.querySelector(`[data-theme_btn="dark"]`).classList.add("active");
      document.querySelector(`[data-theme_btn="light"]`).classList.remove("active");
    } else {
      document.querySelector(`[data-theme_btn="light"]`).classList.add("active");
      document.querySelector(`[data-theme_btn="dark"]`).classList.remove("active");
    }
    changeTheme(darkMode);
  }, [darkMode]);

  const changeTheme = (theme) => {
    document.documentElement.style.setProperty("--color-bg", `var(--${theme}-color-bg)`);
    document.documentElement.style.setProperty("--color-bg2", `var(--${theme}-color-bg2)`);
    document.documentElement.style.setProperty("--color-bg3", `var(--${theme}-color-bg3)`);
    document.documentElement.style.setProperty("--color-text", `var(--${theme}-color-text)`);
    document.documentElement.style.setProperty("--color-text-menu", `var(--${theme}-color-text-menu)`);
    document.documentElement.style.setProperty("--color-text-menu-light", `var(--${theme}-color-text-menu-light)`);
    document.documentElement.style.setProperty("--color-text-link", `var(--${theme}-color-text-link)`);
    document.documentElement.style.setProperty("--color-text2", `var(--${theme}-color-text2)`);
    document.documentElement.style.setProperty("--color-text2-menu", `var(--${theme}-color-text2-menu)`);
    document.documentElement.style.setProperty("--color-link", `var(--${theme}-color-link)`);
    document.documentElement.style.setProperty("--color-shadow", `var(--${theme}-color-shadow)`);
  };

  const toggleLightMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
  };

  const toggleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
    }
  };

  return (
    <div className="nav__menu nav__theme">
      <button className="nav__item nav__item-btn nav--very-light" data-theme_btn="light" onClick={toggleLightMode}>
        <div className="nav__img-theme" id="img_light_theme">
          Light
        </div>
      </button>
      <button className="nav__item nav__item-btn nav--very-light" data-theme_btn="dark" onClick={toggleDarkMode}>
        <div className="nav__img-theme" id="img_dark_theme">
          Dark
        </div>
      </button>
    </div>
  );
}

// window.onload = () => {
//   let imgLight = document.getElementById("img_light_theme");
//   imgLight.innerHTML = lightIcon;
//   let imgDark = document.getElementById("img_dark_theme");
//   imgDark.innerHTML = darkIcon;
// };

export default BtnDarkMode;
