import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CurrentLanguageContext } from "../App";

import floratest_small from "./../img/Floratest_small.gif";
import network_small from "./../img/Network_small.gif";
import communicator_small from "./../img/Communicator_small.gif";

import Text from "../lng/lng_main";

function Home() {
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
          <div className="content__title" data-lang="content-welcome">
            Welcome to Site
          </div>
          <div className="content__descr first">
            <p data-lang="content-welcome1">
              Welcome to the website of Data Acquisition System Department of V.M.Glushkov's Institute of Cybernetics of
              NAS of Ukraine.
            </p>
            <div>
              <span data-lang="content-institute">More information about our Institute can be found at</span>
              <a className="content__site" href="https://www.incyb.kiev.ua" target="_blank" rel="noreferrer">
                https://www.incyb.kiev.ua
              </a>
              .
            </div>
            <div>
              <span data-lang="content-nasu">
                More information about National Academy of sciences of Ukraine can be found at
              </span>
              <a className="content__site" href="https://www.nas.gov.ua" target="_blank" rel="noreferrer">
                https://www.nas.gov.ua
              </a>
              .
            </div>
          </div>
          <div className="content__title" data-lang="content-brief-title">
            Briefly about department
          </div>
          <div className="content__descr" data-lang="content-brief-descr">
            The main activity of the department is directed to the development of information technologies, wireless
            sensor networks, hardware-software means and devices of the Internet of Things for estimating the state of
            objects of different origins and implementation of developed technologies in various spheres of human
            activity and industry, in particular: agriculture, horticulture, environmental monitoring and protection,
            medicine, telemedicine and food industry.
          </div>
          <div className="content__title" data-lang="content-recent-projects">
            Recent projects
          </div>
          <div className="content__projects">
            <div className="content__projects-item">
              <NavLink to="/project01">
                <div className="content__projects-item-img">
                  <img src={floratest_small} alt="Portable device FLORATEST" />
                </div>
              </NavLink>
              <NavLink to="/project01" className="content__projects-link">
                <div className="content__projects-item-title" data-lang="content-projects-1-title">
                  Portable device 'FLORATEST'
                </div>
              </NavLink>
              <div className="content__projects-item-descr" data-lang="content-projects-1-discr">
                The portable device 'FLORATEST' is intended for express-diagnostics of the impact of stress factors of
                natural and anthropogenic origin on the state of plants. The device measures the induction of
                chlorophyll fluorescence without damaging the plant. The use of the curve of chlorophyll fluorescence
                induction makes it possible to diagnose the influence of one or another factor on the state of plants
                and to take timely measures to eliminate or compensate the negative impact in order to avoid crop losses
                or plant death.
              </div>
            </div>
            <div className="content__projects-item">
              <NavLink to="project02">
                <div className="content__projects-item-img">
                  <img src={network_small} alt="Wireless sensor network for agriculture" />
                </div>
              </NavLink>
              <NavLink to="project02" className="content__projects-link">
                <div className="content__projects-item-title" data-lang="content-projects-2-title">
                  Wireless sensor network for agriculture
                </div>
              </NavLink>
              <div className="content__projects-item-descr" data-lang="content-projects-2-discr">
                The wireless sensor network is intended for real-time estimation of the impact of stress factors on the
                state of plants in large areas for use in agriculture and environmental monitoring. Distributed sensors
                with embedded wireless transmitters are used as nodes of wireless sensor network for express estimation
                of the state of plants. The data acquisition about the state of plants is carried out through the
                self-organization of wireless nodes with different sets of sensors into a wireless sensor network that
                can covers a large territory.
              </div>
            </div>
            <div className="content__projects-item">
              <NavLink to="/project03">
                <div className="content__projects-item-img">
                  <img src={communicator_small} alt="Information medical communicator" />
                </div>
              </NavLink>
              <NavLink to="/project03" className="content__projects-link">
                <div className="content__projects-item-title" data-lang="content-projects-3-title">
                  Information medical communicator
                </div>
              </NavLink>
              <div className="content__projects-item-descr" data-lang="content-projects-3-discr">
                The information medical communicator is designed to support the first contact between the doctor and
                patient by providing detailed information about the injury or disease and appropriate methods of care
                and treatment during the first examination of the sick or injured person, and in emergency medicine to
                communicate with patients who have lost the ability to speak or patients with limited opportunities.
                Correct communication and mutual understanding between the doctor and patient helps to avoid problems
                related to making a diagnosis and predicting the development of the disease, and leads the patient to a
                quick recovery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
