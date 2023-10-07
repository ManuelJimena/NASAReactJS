import { useState } from "react";
import "./Header.css";

const Header = ({ logo, logoAlt }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" translate="no">
      <button
        id="menu-icon"
        aria-label="desplegar menú"
        onClick={handleMenuClick}
        className={menuOpen ? "open" : ""}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="nothing" id="null"></div>
      <nav className={`navbar ${menuOpen ? "activo" : ""}`} id="navbar">
        <a href="#home" onClick={handleLinkClick}>
          inicio
        </a>
        <a href="#menu" onClick={handleLinkClick}>
          burgers
        </a>
        <a href="#entrantes" onClick={handleLinkClick}>
          entrantes
        </a>
        <span className="space"></span>
        <a href="#postres" onClick={handleLinkClick}>
          postres
        </a>
        <a href="#menus" onClick={handleLinkClick}>
          menus
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          contacto
        </a>
      </nav>
      <a href="#" className="no-action-link"></a>
      <a href="#home" className="logo">
        <img src={logo} alt={logoAlt} />
      </a>
    </header>
  );
};

export default Header;