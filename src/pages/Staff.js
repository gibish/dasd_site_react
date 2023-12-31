import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../App";

import romanov from "./../img/dept/Romanov.jpg";
import bagatskyi from "./../img/dept/Bagacjkyy.jpg";
import galelyuka from "./../img/dept/Galelyuka.jpg";
import kondratov from "./../img/dept/Kondratov.jpg";
import chebotarev from "./../img/dept/Chebotarev.jpg";
import babenko from "./../img/dept/Babenko.jpg";
import hrusha from "./../img/dept/Grusha.jpg";
import koshulko from "./../img/dept/Koshulko.jpg";
import brayko from "./../img/dept/Brayko.jpg";
import degtyaruk from "./../img/dept/Degtyaruk.jpg";
import antonova from "./../img/dept/Antonova.jpg";
import voronenko from "./../img/dept/Voronenko.jpg";
import kedych from "./../img/dept/Kedych.jpg";
import kovyrova from "./../img/dept/Kovyrova.jpg";
import imamutdinova from "./../img/dept/Imamutdinova.jpg";

import famale from "./../img/dept/female.svg";
import male from "./../img/dept/male.svg";
import scopus from "./../img/add/scopus_logo.svg";
import orchid from "./../img/add/orchid_logo.svg";
import google_scholar from "./../img/add/google_scholar.svg";
import researchgate from "./../img/add/researchgate_logo.svg";

import Text from "../lng/lng_staff";

function Staff() {
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
        <div className="content__inner columns">
          <div className="content-one-column">
            <div className="content__title" data-lang="staff-content-welcome">
              Department staff
            </div>
          </div>
          {/* <!-- Romanov V.O.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={romanov} alt="V.O. Romanov" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="rom-name">
                Volodymyr ROMANOV
              </span>
              <span className="content__descr-span" data-lang="rom-position">
                Head of department
              </span>
              <span className="content__descr-span" data-lang="rom-degree">
                Doctor of technical sciences, Professor
              </span>
              <span className="content__descr-span">
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=24178598200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref scopus" src={scopus} alt="scopus" />
                </a>
                <a href="https://orcid.org/0000-0001-6277-8756" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={orchid} alt="orchid" />
                </a>
                <a
                  href="https://scholar.google.com.ua/citations?hl=uk&user=IRpwPM0AAAAJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref" src={google_scholar} alt="google" />
                </a>
                <a href="https://www.researchgate.net/profile/Volodymyr-Romanov" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={researchgate} alt="researchgate" />
                </a>
              </span>
            </div>
          </div>
          {/* <!-- Bagatskyi V.O.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={bagatskyi} alt="V.O. Bagatskyi" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="bag-name">
                Valentyn BAGATSKYI
              </span>
              <span className="content__descr-span" data-lang="bag-position">
                Leading research fellow
              </span>
              <span className="content__descr-span" data-lang="bag-degree">
                Doctor of technical sciences
              </span>
            </div>
          </div>
          {/* <!-- Galelyuka I.B.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={galelyuka} alt="I.B. Galelyuka" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="gal-name">
                Igor GALELYUKA
              </span>
              <span className="content__descr-span" data-lang="gal-position">
                Leading research fellow
              </span>
              <span className="content__descr-span" data-lang="gal-degree">
                Candidate of technical sciences (PhD)
              </span>
              <span className="content__descr-span">
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=24179449600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref scopus" src={scopus} alt="scopus" />
                </a>
                <a href="https://orcid.org/0000-0003-1504-4439" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={orchid} alt="orchid" />
                </a>
                <a
                  href="https://scholar.google.com.ua/citations?user=JgsTVKsAAAAJ&hl=uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref" src={google_scholar} alt="goodle" />
                </a>
                <a href="https://www.researchgate.net/profile/Igor-Galelyuka" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={researchgate} alt="goodle" />
                </a>
              </span>
            </div>
          </div>
          {/* <!-- Kondratov V.T.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={kondratov} alt="V.T. Kondratov" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="kon-name">
                Vladyslav KONDRATOV
              </span>
              <span className="content__descr-span" data-lang="kon-position">
                Leading research fellow
              </span>
              <span className="content__descr-span" data-lang="kon-degree">
                Doctor of technical sciences, Professor
              </span>
            </div>
          </div>
          {/* <!-- Chebotarev A.M.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={chebotarev} alt="A.M. Chebotarev" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="che-name">
                Anatoliy CHEBOTAREV
              </span>
              <span className="content__descr-span" data-lang="che-position">
                Leading research fellow
              </span>
              <span className="content__descr-span" data-lang="che-degree">
                Doctor of technical sciences
              </span>
            </div>
          </div>
          {/* <!-- Babenko Ye.V.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={babenko} alt="Ye.V. Babenko" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="bab-name">
                Yevgenia BABENKO
              </span>
              <span className="content__descr-span" data-lang="bab-position">
                Senior research fellow
              </span>
              <span className="content__descr-span" data-lang="bab-degree">
                Candidate of agricultural sciences (Ph.D. of Crop Science)
              </span>
              <span className="content__descr-span">
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=24723228200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref scopus" src={scopus} alt="scopus" />
                </a>
                <a href="https://orcid.org/0000-0002-0983-9713" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={orchid} alt="orchid" />
                </a>
                <a href="https://scholar.google.cz/citations?user=WS_MmJAAAAAJ" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={google_scholar} alt="goodle" />
                </a>
                <a href="https://www.researchgate.net/profile/Yevheniia-Babenko-2" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={researchgate} alt="goodle" />
                </a>
              </span>
            </div>
          </div>
          {/* <!-- Hrusha V.M.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={hrusha} alt="V.M. Hrusha" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="hru-name">
                Volodymyr HRUSHA
              </span>
              <span className="content__descr-span" data-lang="hru-position">
                Research fellow
              </span>
              <span className="content__descr-span" data-lang="hru-degree">
                Candidate of technical sciences (PhD)
              </span>
              <span className="content__descr-span">
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=24179404800"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref scopus" src={scopus} alt="scopus" />
                </a>
                <a href="https://orcid.org/0000-0002-2497-0939" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={orchid} alt="orchid" />
                </a>
                <a
                  href="https://scholar.google.com.ua/citations?user=W_w4iIoAAAAJ&hl=uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref" src={google_scholar} alt="goodle" />
                </a>
                <a href="https://www.researchgate.net/profile/Volodymyr-Hrusha-2" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={researchgate} alt="goodle" />
                </a>
              </span>
            </div>
          </div>
          {/* <!-- Koshulko A.I.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={koshulko} alt="A.I. Koshulko" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="kos-name">
                Anatoliy KOSHULKO
              </span>
              <span className="content__descr-span" data-lang="kos-position">
                Senior research fellow
              </span>
              <span className="content__descr-span" data-lang="kos-degree">
                Candidate of technical sciences (PhD)
              </span>
            </div>
          </div>
          {/* <!-- Brayko Yu.O.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={brayko} alt="Yu.O. Brayko" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="bra-name">
                Yuriy BRAYKO
              </span>
              <span className="content__descr-span" data-lang="bra-position">
                Research fellow
              </span>
            </div>
          </div>
          {/* <!-- Degtyaruk V.I.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={degtyaruk} alt="V.I. Degtyaruk" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="deg-name">
                Viktor DEGTYARUK
              </span>
              <span className="content__descr-span" data-lang="deg-position">
                Research fellow
              </span>
            </div>
          </div>
          {/* <!-- Antonova G.V.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={antonova} alt="G.V. Antonova" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="ant-name">
                Hanna ANTONOVA
              </span>
              <span className="content__descr-span" data-lang="ant-position">
                Junior research fellow
              </span>
              <span className="content__descr-span">
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57215354948"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref scopus" src={scopus} alt="scopus" />
                </a>
                <a href="https://orcid.org/0000-0002-1876-8267" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={orchid} alt="orchid" />
                </a>
                <a href="https://scholar.google.com/citations?user=3rVtGm0AAAAJ&hl=ru" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={google_scholar} alt="goodle" />
                </a>
                <a href="https://www.researchgate.net/profile/Hanna-Antonova-2" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={researchgate} alt="goodle" />
                </a>
              </span>
            </div>
          </div>
          {/* <!-- Bednenko T.V.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={famale} alt="T.V. Bednenko" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="bed-name">
                Tetyana BEDNENKO
              </span>
              <span className="content__descr-span" data-lang="bed-position">
                Junior research fellow
              </span>
            </div>
          </div>
          {/* <!-- Voronenko O.V.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={voronenko} alt="O.V. Voronenko" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="vor-name">
                Oleksandr VORONENKO
              </span>
              <span className="content__descr-span" data-lang="vor-position">
                Junior research fellow
              </span>
            </div>
          </div>
          {/* <!-- Kedych A.V.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={kedych} alt="A.V. Kedych" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="ked-name">
                Anna KEDYCH
              </span>
              <span className="content__descr-span" data-lang="ked-position">
                Junior research fellow
              </span>
              <span className="content__descr-span">
                <a href="https://orcid.org/0000-0003-1784-4296" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={orchid} alt="orchid" />
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=SJ9yrpcAAAAJ" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={google_scholar} alt="goodle" />
                </a>
                <a href="https://www.researchgate.net/profile/Anna-Kedych" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={researchgate} alt="goodle" />
                </a>
              </span>
            </div>
          </div>
          {/* <!-- Kovyrova O.V.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={kovyrova} alt="O.V. Kovyrova" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="kov-name">
                Oleksandra KOVYROVA
              </span>
              <span className="content__descr-span" data-lang="kov-position">
                Junior research fellow
              </span>
              <span className="content__descr-span">
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=54789863400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="content__descr-img-ref scopus" src={scopus} alt="scopus" />
                </a>
                <a href="https://orcid.org/0000-0003-0253-4658" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={orchid} alt="orchid" />
                </a>
                <a href="https://scholar.google.com.ua/citations?user=GJCtdToAAAAJ" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={google_scholar} alt="goodle" />
                </a>
                <a href="https://www.researchgate.net/profile/Oleksandra-Kovyrova" target="_blank" rel="noreferrer">
                  <img className="content__descr-img-ref" src={researchgate} alt="goodle" />
                </a>
              </span>
            </div>
          </div>
          {/* <!-- Imamutdinova R.G.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={imamutdinova} alt="R.G. Imamutdinova" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="ima-name">
                Roza IMAMUTDINOVA
              </span>
              <span className="content__descr-span" data-lang="ima-position">
                Leading software engineer
              </span>
            </div>
          </div>
          {/* <!-- Podhapov V.S.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={male} alt="V.S. Podhapov" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="pod-name">
                Valentyn PODHAPOV
              </span>
              <span className="content__descr-span" data-lang="pod-position">
                Leading engineer
              </span>
            </div>
          </div>
          {/* <!-- Savchenko V.V.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={male} alt="V.V. Savchenko" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="sav-name">
                Viktor SAVCHENKO
              </span>
              <span className="content__descr-span" data-lang="sav-position">
                Leading engineer
              </span>
            </div>
          </div>
          {/* <!-- Randyuk O.S.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={famale} alt="O.S. Randyuk" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="ran-name">
                Olga RANDYUK
              </span>
              <span className="content__descr-span" data-lang="ran-position">
                Engineer
              </span>
            </div>
          </div>
          {/* <!-- Shtefanyuk V.G.--> */}
          <div className="content__descr-img content__columns">
            <img className="content__img content__img-staff" src={famale} alt="V.G. Shtefanyuk" />
            <div className="content__descr column">
              <span className="content__descr-span span-name" data-lang="sht-name">
                Valentyna SHTEFANYUK
              </span>
              <span className="content__descr-span" data-lang="sht-position">
                Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Staff;
