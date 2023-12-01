import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../App";

import floratestBig from "../img/Floratest_big.gif";
import Text from "../lng/lng_project01";

function Project01() {
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
    <main className="content">
      <div className="container">
        <div className="content__inner">
          <div className="content__title" data-lang="proj01-content-welcome">
            Portable device 'FLORATEST'
          </div>
          <div className="content__descr-img column content--top">
            <div className="content--center">
              <img className="content__img content__img-proj-big" src={floratestBig} alt="Floratest" />
            </div>
            <div className="content__descr">
              <span className="content__descr-span content--subhead content--subhead-color" data-lang="proj01-descr-0">
                General information
              </span>
              <span className="content__descr-span content--justify" data-lang="proj01-descr-1">
                Portable device 'Floratest' for express-diagnostics of plant state allows easy to estimate the level of
                influence of stress factors of natural or anthropogenic origin on alive plants. The device is based on
                real time processing of the curve of chlorophyll fluorescent induction. The portable device 'Floratest'
                measures intensity of chlorophyll fluorescent induction without plant destruction. By the form of curve
                of chlorophyll fluorescent induction (like to cardiogram) the influence of stress factor to the plant is
                determined.
              </span>
              <span className="content__descr-span content--justify" data-lang="proj01-descr-2">
                Device and relevant diagnostic methods refer to the area of biological object researches by detecting
                their biophysical properties, particularly native chlorophyll fluorescent induction. Device is defined
                as smart biosensor with fragment of live plant as sensing element.
              </span>
              <span className="content__descr-span content--justify" data-lang="proj01-descr-3">
                Express-diagnostic of plant state is based on using of features of separate specific sections of
                chlorophyll fluorescent induction curve, which refer to separate areas of photosynthesis chains as
                diagnostic features. By chlorophyll fluorescent induction curve form it is easily to detect influence of
                one or another factor on the plant state.
              </span>
            </div>
          </div>
          <div className="content__descr" data-lang="proj01-descr-4">
            Photosynthesis and induction of fluorescence of chlorophyll operate in direct competition for a finite pool
            of absorbed light energy. Any change in energy utilization by one process produces a complementary change in
            the others. So this fact enables induction of fluorescence of chlorophyll to be used as express and reliable
            non-invasive estimation of photosynthesis. Portable device 'Floratest' is intended specifically to detect
            the chlorophyll fluorescence emission from leaf of plant. The main features of device are wide dynamic
            range, high precision and speed, low quiescent current and low operating voltage.
          </div>
          <div className="content__descr subhead content--subhead-color" data-lang="proj01-descr-5">
            Application areas of portable device 'Floratest':
          </div>
          <div className="content__descr">
            <ul className="content__descr-ul">
              <li data-lang="proj01-descr-5-1">
                Express estimating plant life activity after drought, freeze, imps, pesticide application;
              </li>
              <li data-lang="proj01-descr-5-2">
                Express estimating optimal dozes of fertilizers and biological active admixtures. It makes possible to
                reduce nitrate content in fruits and vegetables;
              </li>
              <li data-lang="proj01-descr-5-3">
                Precision farming technology optimization using the device for validation of remote observation of
                agricultural lands;
              </li>
              <li data-lang="proj01-descr-5-4">
                Express estimating land pollutions by pesticides, heavy metals, industrial emissions and their impact to
                green planting in megalopolis;
              </li>
              <li data-lang="proj01-descr-5-5">Water and energy saving in artificial watering;</li>
              <li data-lang="proj01-descr-5-6">Forecasting future crop;</li>
              <li data-lang="proj01-descr-5-7">
                Automating scientific research in plant physiology area in universities and research institutes.
              </li>
            </ul>
          </div>
          <div className="content__descr subhead content--subhead-color" data-lang="proj01-descr-6">
            Main developer:
          </div>
          <div className="content__descr" data-lang="proj01-descr-6-1">
            Volodymyr ROMANOV
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project01;
