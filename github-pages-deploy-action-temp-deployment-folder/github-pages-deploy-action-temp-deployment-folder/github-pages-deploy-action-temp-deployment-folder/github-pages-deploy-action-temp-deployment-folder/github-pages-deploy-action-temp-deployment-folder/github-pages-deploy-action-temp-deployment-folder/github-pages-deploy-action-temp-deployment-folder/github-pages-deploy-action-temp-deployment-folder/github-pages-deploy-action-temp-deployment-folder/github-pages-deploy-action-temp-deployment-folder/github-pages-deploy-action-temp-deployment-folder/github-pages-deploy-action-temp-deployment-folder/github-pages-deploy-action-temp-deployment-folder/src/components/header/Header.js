import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../../App";

import Text from "../../lng/lng_header";

function Header() {
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
    <header className="header" id="header">
      <div className="header__bgc"></div>
      <div className="container">
        <div className="header__inner">
          <div className="header__department" data-lang="header-department">
            Data acquisition system department
          </div>
          <div className="header__institute" data-lang="header-institute">
            V.M.Glushkov's Institute of Cybernetics
          </div>
          <div className="header__nasu" data-lang="header-nasu">
            National Academy of Sciences of Ukraine
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
