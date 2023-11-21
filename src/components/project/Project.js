function Project() {
  return (
    <div className="content__descr-img content__descr-img-proj content--dotted-bottom">
      <img className="content__img content__img-proj" src={floratest_small} alt="Floratest" />
      <div className="content__descr">
        <a className="content__site" href="./project01.html">
          <span className="content__descr-span span-name-a content__descr--head" data-lang="proj-name-1">
            Portable device 'FLORATEST'
          </span>
        </a>
        <span className="content__descr-span content--justify" data-lang="proj-descr-1">
          The portable device 'FLORATEST' is intended for express-diagnostics of the impact of stress factors of natural
          and anthropogenic origin on the state of plants. The device measures the induction of chlorophyll fluorescence
          without damaging the plant. The use of the curve of chlorophyll fluorescence induction makes it possible to
          diagnose the influence of one or another factor on the state of plants and to take timely measures to
          eliminate or compensate the negative impact in order to avoid crop losses or plant death.
        </span>
        <a className="content__site" href="./project01.html">
          <span className="content__site-text" data-lang="proj-detail-1">
            More detailed about project...
          </span>
        </a>
      </div>
    </div>
  );
}

export default Project;
