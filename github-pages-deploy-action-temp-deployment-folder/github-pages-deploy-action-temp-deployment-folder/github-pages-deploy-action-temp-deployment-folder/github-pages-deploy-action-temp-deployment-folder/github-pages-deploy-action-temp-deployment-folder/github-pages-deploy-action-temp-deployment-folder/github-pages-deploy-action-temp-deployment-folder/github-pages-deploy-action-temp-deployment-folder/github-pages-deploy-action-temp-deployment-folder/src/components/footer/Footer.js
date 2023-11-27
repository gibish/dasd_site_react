import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../../App";

import Text from "../../lng/lng_footer";

function Footer() {
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
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__copyright">
            © 2023,{" "}
            <span data-lang="footer-department">
              Acquisition System Department of V.M.Glushkov's Institute of Cybernetics of NAS of Ukraine
            </span>
          </div>
          <div className="footer__developer">
            <span data-lang="footer-created">Created by</span> Gibish
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
