function BtnNavToggle({ stateToggle, handlerToggle }) {
  const toggleMenu = () => {
    handlerToggle(!stateToggle);
  };

  const normalClass = "nav-toggle";
  const activeClass = "nav-toggle active";

  return (
    <button className={stateToggle ? activeClass : normalClass} id="nav_toggle" type="button" onClick={toggleMenu}>
      <span className="nav-toggle__item">Menu</span>
    </button>
  );
}

export default BtnNavToggle;
