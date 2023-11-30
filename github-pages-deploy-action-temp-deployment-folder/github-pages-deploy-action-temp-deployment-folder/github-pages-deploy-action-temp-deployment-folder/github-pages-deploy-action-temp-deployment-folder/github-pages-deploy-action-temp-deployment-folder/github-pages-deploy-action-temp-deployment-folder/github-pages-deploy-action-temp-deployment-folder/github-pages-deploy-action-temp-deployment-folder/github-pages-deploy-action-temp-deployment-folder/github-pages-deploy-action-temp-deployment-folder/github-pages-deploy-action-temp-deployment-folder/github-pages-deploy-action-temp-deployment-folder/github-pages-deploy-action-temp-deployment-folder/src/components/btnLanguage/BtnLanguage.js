import { useContext, useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { CurrentLanguageContext } from "../../App";

function BtnLanguage() {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const { currentLanguage, setCurrentLanguage } = useContext(CurrentLanguageContext);

  useEffect(() => {
    if (currentLanguage !== language) {
      setCurrentLanguage(language);
      // console.log("setCL");
    }
    // console.log("setEf");
  }, [language, currentLanguage, setCurrentLanguage]);

  const changeLanguage = (e) => {
    setLanguage(e.target.dataset.btn);
  };

  const activeLink = "nav__item nav__item-btn nav--very-light active";
  const normalLink = "nav__item nav__item-btn nav--very-light";

  return (
    <div className="nav__menu nav__lang">
      <button className={language === "ua" ? activeLink : normalLink} data-btn="ua" onClick={changeLanguage}>
        UA
      </button>
      <button className={language === "en" ? activeLink : normalLink} data-btn="en" onClick={changeLanguage}>
        EN
      </button>
    </div>
  );
}

export default BtnLanguage;
