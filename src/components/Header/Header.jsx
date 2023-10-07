import "./Header.css";
import { useState } from 'react';

const Header = ({ logo, logoAlt }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" translate="no">
      <div
        id="menu-btn"
        className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} icons`}
        onClick={toggleMenu}
      ></div>
      <div className="nothing" id="null"></div>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a href="#home">inicio</a>
        <a href="#menu">burguers</a>
        <a href="#entrantes">entrantes</a>
        <span className="space"></span>
        <a href="#postres">postres</a>
        <a href="#menús">menús</a>
        <a href="#contact">contacto</a>
      </nav>
      <a href="#" className="no-action-link"></a>
      <a href="#home" className="logo">
        <img src={logo} alt={logoAlt} />
      </a>
    </header>
  );
};

export default Header;