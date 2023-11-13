import romanov from "./../img/dept/Romanov.jpg";

function Department() {
  return (
    <main className="content">
      <div className="container">
        <div className="content__inner">
          <div className="content__title" data-lang="dept-content-welcome">
            About Data Acquisition System Department
          </div>
          <div className="content__descr" data-lang="dept-content-1">
            The department was founded by doctor of sciences, professor A.I. Kondalev in 1963, who was at the head till
            1989. There are 20 scientists in the department now including 4 Doctors of sciences, and 4 PhDs.
          </div>
          <div className="content__descr" data-lang="dept-content-2">
            Now the department is headed by doctor of sciences, professor V.O. Romanov.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={romanov} alt="V.O. Romanov" />
            <div className="content__descr">
              <span className="content__descr-span" data-lang="dept-content-head-position">
                Head of department
              </span>
              <span className="content__descr-span span-name content--subhead-color" data-lang="dept-content-head-name">
                Volodymyr ROMANOV
              </span>
              <span className="content__descr-span" data-lang="dept-content-head-degree">
                Doctor of technical sciences, Professor
              </span>
              <span className="content__descr-span" data-lang="dept-content-head-awards">
                Awarded Academician Lebedev Prize, Honorary degree Inventor of the Year of Ukraine, awarded State Prize
                of Ukraine in Science and Technique, and Honorary degree Honoured Scientist of Ukraine.
              </span>
            </div>
          </div>
          <div className="content__descr subhead content--subhead-color" data-lang="dept-content-3">
            The main directions of scientific activity
          </div>
          <div className="content__descr">
            <ul className="content__descr-ul">
              <li data-lang="dept-content-3-1">
                theory and methodology of creation of CAD/CAM information technologies for creation of computer means
                and systems for data converting, processing, transferring, and visualization;
              </li>
              <li data-lang="dept-content-3-2">
                methodology of creation and application of wireless sensor networks for express diagnostics of state of
                biological and physical objects;
              </li>
              <li data-lang="dept-content-3-3">
                theory and methodology of processing results of multiple measurement conversations of physical quantity,
                theory of redundant measurements, and metrological reliability of means of redundant measurements.
              </li>
            </ul>
          </div>
          <div className="content__descr subhead content--subhead-color" data-lang="dept-content-4">
            Some fundamental results
          </div>
          <ul className="content__descr-ul">
            <li data-lang="dept-content-4-1">
              it was developed theory and methodology of design of high-productive means of data converting, processing,
              transferring, and visualization;
            </li>
            <li data-lang="dept-content-4-2">
              it was developed methodology of creating new information technologies for virtual design of computer
              devices and means for data conversion, processing, transferring, and visualization of state of complicated
              biological and physical objects;
            </li>
            <li data-lang="dept-content-4-3">
              it was developed methodology of creating, deployment and self-organizing of wireless sensor networks for
              express-diagnostics of state of biological and physical objects in agriculture, ecology, medicine, housing
              and municipal, and other areas of human activity;
            </li>
            <li data-lang="dept-content-4-4">
              it was developed methodology of processing the results of multiple measurement conversions of physical
              quantity of different nature;
            </li>
            <li data-lang="dept-content-4-5">
              it was developed theory of redundant measurements, and methods of creation of measurement means on this
              base.
            </li>
          </ul>
        </div>
        <div className="content__descr subhead content--subhead-color" data-lang="dept-content-5">
          Some applied results
        </div>
        <div className="content__descr" data-lang="dept-content-5-1">
          The following product lines were developed and full-scale manufactured:
        </div>
        <ul className="content__descr-ul">
          <li data-lang="dept-content-5-1-1">
            electronic modules "EC-1841.0100", "EC-1841.0101", and "EC-1841.E108" for PCs "EC-1840/41/42" (Computer
            Research Institute, Minsk);
          </li>
          <li data-lang="dept-content-5-1-2">
            microprocessor set of very large hybrid integrated circuits for development of high reliable control and
            data processing systems in heavy engineering industry, atomic power engineering, and power machine building
            (all-USSR Research Institute 'Atommash', Moscow);
          </li>
          <li data-lang="dept-content-5-1-3">
            the first in the USSR the integrated circuit of data converter 'DAC 594PAI' (Research Institute 'Venta',
            Vilnus);
          </li>
          <li data-lang="dept-content-5-1-4">
            input/output modules of analog signals 'FF 5005' and 'FF 5010', embedded into technological controller 'FK
            5001', and CAD workstation for their attestation, and ADC module 'F5286', embedded into measuring and
            computing complexes 'IVK-6', 'IVK-20', and 'IVK-25' (Production Association 'Tochelectroprylad', Kyiv);
          </li>
          <li data-lang="dept-content-5-1-5">
            portable computer devices of 'Floratest' family for express-diagnostics of plant state on the base of
            chlorophyll fluorescence induction method (scientific-production firm 'VD MAIS', Kyiv). The devices are
            manufactured according to license contract;
          </li>
          <li data-lang="dept-content-5-1-6">
            georadar control system with smart sensors and the first stage of automation information-measuring system
            'Prikarpattja' for measuring surface water parameters, and remote system for groundwater and environment
            parameters control on 'Zmeinyy' island.
          </li>
        </ul>
        <div className="content__descr" data-lang="dept-content-5-2">
          The following research results were prepared for full-scale manufacture:
        </div>
        <ul className="content__descr-ul">
          <li data-lang="dept-content-5-2-1">
            hardware and software communicator for family and first aid medicine, including for communication with
            patients with loss of ability to speak. The communicator is manufactured according to license contract;
          </li>
          <li data-lang="dept-content-5-2-2">
            wireless sensor network for express-diagnostics of plant state on large territories for agriculture and
            environment protection;
          </li>
          <li data-lang="dept-content-5-2-3">
            information-measuring complex for pulse diagnostics of human cardiovascular system;
          </li>
          <li data-lang="dept-content-5-2-4">
            computer device 'Yakist' for estimating quality of electric energy at consumer side.
          </li>
        </ul>
        <div className="content__descr" data-lang="dept-content-6">
          All products, designed in the department, are new, patented and awarded by diplomas of international and
          national exhibitions, awarded as the best inventions of the year in Ukraine.
        </div>
        <div className="content__descr" data-lang="dept-content-7">
          New information technology 'Information technology for express-diagnostics of plant state on large territories
          under stressful factors' was developed and registered.
        </div>
        <div className="content__descr" data-lang="dept-content-8">
          National standards were developed in areas of microprocessor technique and biometrics.
        </div>
        <div className="content__descr" data-lang="dept-content-9">
          Within the scope of international cooperation agreements, grants and projects, the department efficiently
          cooperates with universities and organizations of Bulgaria, Germany, Poland, Malaysia, Egypt, and USA.
        </div>
        {/*<!-- END OF Content inner-->*/}
      </div>
    </main>
  );
}

export default Department;
