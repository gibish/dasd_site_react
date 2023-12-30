import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../App";

import communicatorBig from "../img/Communicator_big.gif";
import Text from "../lng/lng_project03";

function Project03() {
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
          <div className="content__title" data-lang="proj03-content-welcome">
            Information Communicator for Medicine
          </div>
          <div className="content__descr-img column content--top">
            <div className="content--center">
              <img
                className="content__img content__img-proj-big content--bg-white"
                src={communicatorBig}
                alt="Medical communicator"
              />
            </div>
            <div className="content__descr">
              <span className="content__descr-span content--justify" data-lang="proj03-descr-1">
                Mutual understanding and communication between doctors and patients is a very important problem as in
                medicine, so in telemedicine. Ability of correct communication and mutual understanding during the
                disease or separate stage of disease helps to diagnose, prognose a clinical behaviour, and accelerate
                the recovery.
              </span>
              <span className="content__descr-span content--justify" data-lang="proj03-descr-2">
                Communication problems between a doctor and a patient influence correctness of the diagnoses and quality
                of a doctor aid, and complicate the medical treatment.
              </span>
              <span className="content__descr-span content--justify" data-lang="proj03-descr-3">
                It is proposed to apply special hardware-software means, particularly information communicators to
                simplify the communication of doctors with patients (particularly with voice limitation) and increase
                treatment efficiency beginning from the first contact.
              </span>
              <span className="content__descr-span content--justify" data-lang="proj03-descr-4">
                Special application-dependent software consists of two subsystems. The first subsystem is used for the
                first contact of a doctor and a patient. The second subsystem is used for alternative communication of
                doctors with patient lost temporarily or permanently possibility of speaking.
              </span>
            </div>
          </div>
          <div className="content__descr content--subhead content--subhead-color" data-lang="proj03-descr-5">
            Information communicators are used for the following purposes:
          </div>
          <div className="content__descr">
            <ul className="content__descr-ul">
              <li data-lang="proj03-descr-5-1">
                In medicine: for supporting first contact of doctors with patients (with voice limitation), and getting
                information about patient state, for example, during the preliminary examination of patients.
                Particularly it is very important for family doctors because they are the firsts who examine patients
                with different diseases. Sometimes family doctors have no enough knowledge and experience to diagnose.
              </li>
              <li data-lang="proj03-descr-5-2">
                To make emergency medical aid for patients with voice limitation: in this case the information
                communicators help patients to communicate with doctors.
              </li>
            </ul>
          </div>
          <div className="content__descr content--justify" data-lang="proj03-descr-6">
            The other aim of information communicator is to support alternative communication with voice and motion
            limited patients. The idea of alternative communication is rather simple. Voice limited patient needs
            communication with surroundings in any way. The process of establishing relations with additional means
            helps patient with voice limitation to express his needs and wishes.
          </div>
          <div className="content__descr content--subhead content--subhead-color" data-lang="proj03-descr-7">
            Main developer:
          </div>
          <div className="content__descr" data-lang="proj03-descr-7-1">
            Volodymyr ROMANOV
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project03;
