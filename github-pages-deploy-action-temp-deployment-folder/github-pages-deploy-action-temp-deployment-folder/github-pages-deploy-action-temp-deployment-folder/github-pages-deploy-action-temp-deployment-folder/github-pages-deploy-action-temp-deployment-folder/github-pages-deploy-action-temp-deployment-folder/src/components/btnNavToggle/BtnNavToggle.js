function BtnNavToggle() {
  const navToggle = document.getElementById("nav_toggle");
  const navMenu = document.getElementById("nav_menu");

  const toggleMenu = () => {
    navMenu.classList.toggle("nav__menu-active");
    navToggle.classList.toggle("active");
  };

  return (
    <button className="nav-toggle" id="nav_toggle" type="button" onClick={toggleMenu}>
      <span className="nav-toggle__item">Menu</span>
    </button>
  );
}

export default BtnNavToggle;
