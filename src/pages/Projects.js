import floratest_small from "./../img/Floratest_small.gif";
import network_small from "./../img/Network_small.gif";
import communicator_small from "./../img/Communicator_small.gif";

function Projects() {
  return (
    <main className="content">
      <div className="container">
        <div className="content__inner">
          <div className="content__title" data-lang="proj-content-welcome">
            Projects
          </div>
          {/* <!-- Project Floratest--> */}
          <div className="content__descr-img content__descr-img-proj content--dotted-bottom">
            <img className="content__img content__img-proj" src={floratest_small} alt="Floratest" />
            <div className="content__descr">
              <a className="content__site" href="./project01.html">
                <span className="content__descr-span span-name-a content__descr--head" data-lang="proj-name-1">
                  Portable device 'FLORATEST'
                </span>
              </a>
              <span className="content__descr-span content--justify" data-lang="proj-descr-1">
                The portable device 'FLORATEST' is intended for express-diagnostics of the impact of stress factors of
                natural and anthropogenic origin on the state of plants. The device measures the induction of
                chlorophyll fluorescence without damaging the plant. The use of the curve of chlorophyll fluorescence
                induction makes it possible to diagnose the influence of one or another factor on the state of plants
                and to take timely measures to eliminate or compensate the negative impact in order to avoid crop losses
                or plant death.
              </span>
              <a className="content__site" href="./project01.html">
                <span className="content__site-text" data-lang="proj-detail-1">
                  More detailed about project...
                </span>
              </a>
            </div>
          </div>
          {/* <!-- Project Floratest--> */}
          <div className="content__descr-img content__descr-img-proj content--dotted-bottom">
            <img className="content__img content__img-proj" src={network_small} alt="Wireless sensor network" />
            <div className="content__descr">
              <a className="content__site" href="./project02.html">
                <span className="content__descr-span span-name-a content__descr--head" data-lang="proj-name-2">
                  Wireless sensor network for agriculture
                </span>
              </a>
              <span className="content__descr-span content--justify" data-lang="proj-descr-2">
                The wireless sensor network is intended for real-time estimation of the impact of stress factors on the
                state of plants in large areas for use in agriculture and environmental monitoring. Distributed sensors
                with embedded wireless transmitters are used as nodes of wireless sensor network for express estimation
                of the state of plants. The data acquisition about the state of plants is carried out through the
                self-organization of wireless nodes with different sets of sensors into a wireless sensor network that
                can covers a large territory.
              </span>
              <a className="content__site" href="./project02.html">
                <span className="content__site-text" data-lang="proj-detail-2">
                  More detailed about project...
                </span>
              </a>
            </div>
          </div>
          {/* <!-- Project Communicator--> */}
          <div className="content__descr-img content__descr-img-proj">
            <img className="content__img content__img-proj" src={communicator_small} alt="Communicator" />
            <div className="content__descr">
              <a className="content__site" href="./project03.html">
                <span className="content__descr-span span-name-a content__descr--head" data-lang="proj-name-3">
                  Information medical communicator
                </span>
              </a>
              <span className="content__descr-span content--justify" data-lang="proj-descr-3">
                The information medical communicator is designed to support the first contact between the doctor and
                patient by providing detailed information about the injury or disease and appropriate methods of care
                and treatment during the first examination of the sick or injured person, and in emergency medicine to
                communicate with patients who have lost the ability to speak or patients with limited opportunities.
                Correct communication and mutual understanding between the doctor and patient helps to avoid problems
                related to making a diagnosis and predicting the development of the disease, and leads the patient to a
                quick recovery.
              </span>
              <a className="content__site" href="./project03.html">
                <span className="content__site-text" data-lang="proj-detail-3">
                  More detailed about project...
                </span>
              </a>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </main>
  );
}

export default Projects;
