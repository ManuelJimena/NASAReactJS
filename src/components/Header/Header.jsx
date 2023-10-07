import { useRef, useState } from 'react';
import './Header.css';

const Header = ({ logo, logoAlt }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const menuBtnRef = useRef(null);
  const navbarRef = useRef(null);

  const menuBtnClass = `fas fa-bars icons ${menuOpen ? 'fa-times' : ''}`;
  const navbarClass = `navbar ${menuOpen ? 'active' : ''}`;

  return (
    <header className="header" translate="no">
      <div
        id="menu-btn"
        ref={menuBtnRef}
        className={menuBtnClass}
        onClick={handleMenuClick}
      ></div>
      <div className="nothing" id="null"></div>

      <nav ref={navbarRef} className={navbarClass}>
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