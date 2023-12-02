import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../App";

import networkBig from "../img/Network_big.gif";
import Text from "../lng/lng_project02";

function Project02() {
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
          <div className="content__title" data-lang="proj02-content-welcome">
            Wireless Sensor Network for Agriculture
          </div>
          <div className="content__descr-img column content--top">
            <div className="content--center">
              <img className="content__img content__img-proj-big content--bg-white" src={networkBig} alt="WSN" />
            </div>
            <div className="content__descr">
              <span className="content__descr-span content--justify" data-lang="proj02-descr-1">
                In agriculture, ecological monitoring and medicine it is very important to obtain data of the real-time
                influence of stress factors of natural or anthropogenic origin on the state of biological objects (e.g.
                plants, humans etc.). For this purposes special means are used in modern industrial agriculture,
                environmental monitoring, medicine and military applications. The applications of modern achievements in
                microelectronics, biosensors, and communications and information technologies make it possible to solve
                this rather complicated problem of real-time monitoring of state of lots of biological objects. The most
                perspective technology for realization of data acquisition and processing systems is wireless sensor
                network.
              </span>
              <span className="content__descr-span content--justify" data-lang="proj02-descr-2">
                A node of wireless sensor network – remote smart wireless biosensors with embedded sensors and radio
                transceiver for express estimation of plant state for precision farming. Node features: long-term
                autonomous work, reliability of data sending and receiving, a large communication range, small size and
                weight, stability to climate influence.
              </span>
            </div>
          </div>
          <div className="content__descr" data-lang="proj02-descr-3">
            Organization of data acquisition of state of biological objects is performed via self-organization of
            wireless nodes with different sets of sensing units in wireless sensor network, which can covers a large
            territory.
          </div>
          <div className="content__descr" data-lang="proj02-descr-4">
            Data acquisition can be performed by mobile unmanned platform, namely multicopter. In this mode, the mobile
            unmanned platform is equipped with flash-memory with wireless communication unit.
          </div>
          <div className="content__descr" data-lang="proj02-descr-5">
            Implementation of proposed wireless sensor network into industrial agriculture, ecological monitoring and
            medicine makes it possible to increase efficiency and quality of agricultural products, spare fertilizers,
            water and energy resources, timely protect agricultural plants, woodlands and parklands from infections and
            anthropogenic impacts, obtain real-time information about human state including estimating physiological
            parameters of human in extreme conditions.
          </div>

          <div className="content__descr content--subhead content--subhead-color" data-lang="proj02-descr-6">
            Main developer:
          </div>
          <div className="content__descr" data-lang="proj02-descr-6-1">
            Volodymyr ROMANOV
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project02;
