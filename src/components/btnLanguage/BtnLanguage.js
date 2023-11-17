import { useLocalStorage } from "../../utils/useLocalStorage";

function BtnLanguage() {
  const [language, setLanguage] = useLocalStorage("language", "en");

  const changeLanguage = (e) => {
    setLanguage(e.target.dataset.btn);
  };

  return (
    <div className="nav__menu nav__lang">
      <button className="nav__item nav__item-btn nav--very-light" data-btn="ua" onClick={changeLanguage}>
        UA
      </button>
      <button className="nav__item nav__item-btn nav--very-light" data-btn="en" onClick={changeLanguage}>
        EN
      </button>
    </div>
  );
}

export default BtnLanguage;
