import "./Header.css";

const Header = ({ logo, logoAlt }) => {
  
  const menuBtnClick = () => {
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.header .navbar');
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }

  return (
    <header className="header" translate="no">
      <div id="menu-btn" className="fas fa-bars icons" onClick={menuBtnClick}></div>
      <div className="nothing" id="null"></div>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#apod">Apod</a>
        <span className="space"></span>
        <a href="#mars">Mars</a>
        <a href="#gallery">Gallery</a>
      </nav>
      <a href="#" className="no-action-link"></a>
      <a href="#home" className="logo">
        <img src={logo} alt={logoAlt} />
      </a>
    </header>
  );
};

export default Header;