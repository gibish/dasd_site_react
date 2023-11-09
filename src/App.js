import "./Styles/null.css";
import "./Styles/style.css";
import floratest_small from "./img/Floratest_small.gif";
import network_small from "./img/Network_small.gif";
import communicator_small from "./img/Communicator_small.gif";

function App() {
  return (
    <div className="App">
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
      <nav className="nav" id="nav">
        <div className="container">
          <div className="nav__inner">
            <div className="nav__menu nav__menu-hidden" id="nav_menu">
              <a className="nav__item active" data-lang="nav-main" href="./index.html">
                Main
              </a>
              <a className="nav__item" data-lang="nav-department" href="./department.html">
                About department
              </a>
              <a className="nav__item" data-lang="nav-institute" href="./institute.html">
                About institute
              </a>
              <a className="nav__item" data-lang="nav-projects" href="./projects.html">
                Projects
              </a>
              <a className="nav__item" data-lang="nav-staff" href="./staff.html">
                Staff
              </a>
              <a className="nav__item" data-lang="nav-publications" href="./publications.html">
                Publications
              </a>
              <a className="nav__item" data-lang="nav-contacts" href="./contacts.html">
                Contacts
              </a>
            </div>

            <div className="nav__menu">
              <div className="nav__menu nav__theme">
                <button className="nav__item nav__item-btn nav--very-light" data-theme_btn="light">
                  <div className="nav__img-theme" id="img_light_theme">
                    Light
                  </div>
                </button>
                <button className="nav__item nav__item-btn nav--very-light" data-theme_btn="dark">
                  <div className="nav__img-theme" id="img_dark_theme">
                    Dark
                  </div>
                </button>
              </div>

              <div className="nav__menu nav__lang">
                {/*
                              <a className="nav__item" href="#">UA</a>
                  <a className="nav__item active" href="#">EN</a>
                */}

                <button className="nav__item nav__item-btn nav--very-light" data-btn="ua">
                  UA
                </button>
                <button className="nav__item nav__item-btn nav--very-light" data-btn="en">
                  EN
                </button>
              </div>
            </div>

            <button className="nav-toggle" id="nav_toggle" type="button">
              <span className="nav-toggle__item">Menu</span>
            </button>
          </div>
        </div>
      </nav>
      <div className="content">
        <div className="container">
          <div className="content__inner">
            <div className="content__title" data-lang="content-welcome">
              Welcome to Site
            </div>
            <div className="content__descr first">
              <p data-lang="content-welcome1">
                Welcome to the website of Data Acquisition System Department of V.M.Glushkov's Institute of Cybernetics
                of NAS of Ukraine.
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
                <a href="./project01.html">
                  <div className="content__projects-item-img">
                    <img src={floratest_small} alt="" />
                  </div>
                </a>
                <a className="content__projects-link" href="./project01.html">
                  <div className="content__projects-item-title" data-lang="content-projects-1-title">
                    Portable device 'FLORATEST'
                  </div>
                </a>
                <div className="content__projects-item-descr" data-lang="content-projects-1-discr">
                  The portable device 'FLORATEST' is intended for express-diagnostics of the impact of stress factors of
                  natural and anthropogenic origin on the state of plants. The device measures the induction of
                  chlorophyll fluorescence without damaging the plant. The use of the curve of chlorophyll fluorescence
                  induction makes it possible to diagnose the influence of one or another factor on the state of plants
                  and to take timely measures to eliminate or compensate the negative impact in order to avoid crop
                  losses or plant death.
                </div>
              </div>
              <div className="content__projects-item">
                <a href="./project02.html">
                  <div className="content__projects-item-img">
                    <img src={network_small} alt="" />
                  </div>
                </a>
                <a className="content__projects-link" href="./project02.html">
                  <div className="content__projects-item-title" data-lang="content-projects-2-title">
                    Wireless sensor network for agriculture
                  </div>
                </a>
                <div className="content__projects-item-descr" data-lang="content-projects-2-discr">
                  The wireless sensor network is intended for real-time estimation of the impact of stress factors on
                  the state of plants in large areas for use in agriculture and environmental monitoring. Distributed
                  sensors with embedded wireless transmitters are used as nodes of wireless sensor network for express
                  estimation of the state of plants. The data acquisition about the state of plants is carried out
                  through the self-organization of wireless nodes with different sets of sensors into a wireless sensor
                  network that can covers a large territory.
                </div>
              </div>
              <div className="content__projects-item">
                <a href="./project03.html">
                  <div className="content__projects-item-img">
                    <img src={communicator_small} alt="" />
                  </div>
                </a>
                <a className="content__projects-link" href="./project03.html">
                  <div className="content__projects-item-title" data-lang="content-projects-3-title">
                    Information medical communicator
                  </div>
                </a>
                <div className="content__projects-item-descr" data-lang="content-projects-3-discr">
                  The information medical communicator is designed to support the first contact between the doctor and
                  patient by providing detailed information about the injury or disease and appropriate methods of care
                  and treatment during the first examination of the sick or injured person, and in emergency medicine to
                  communicate with patients who have lost the ability to speak or patients with limited opportunities.
                  Correct communication and mutual understanding between the doctor and patient helps to avoid problems
                  related to making a diagnosis and predicting the development of the disease, and leads the patient to
                  a quick recovery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__copyright">
              © 2023,
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
      {/* <script src="./lng/lng_header.js"></script>
    <script src="./lng/lng_main.js"></script>
    <script src="./script.js"></script> */}
    </div>
  );
}

export default App;
