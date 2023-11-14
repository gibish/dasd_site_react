function Publications() {
  return (
    <main className="content">
      <div className="container">
        <div className="content__inner">
          <div className="content__title" data-lang="publ-content-welcome">
            Selected Publications
          </div>
          {/* <div><button id="btn_test" className="btn__test">Get publications</button></div> */}
          <div className="content__descr" data-lang="publ-content-1">
            The list of selected publications is generated automatically on the basis of the international ORCID system.
          </div>
          <div className="content__descr">
            <ol className="content__list-publications-ol" id="content__list-publications-ol">
              <span className="content__loading">LOADING...</span>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Publications;
