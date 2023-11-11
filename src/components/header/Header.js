function Header() {
  return (
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
  );
}

export default Header;
