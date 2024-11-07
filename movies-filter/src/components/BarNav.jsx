import { useState } from "react";
import { HomeIcon, CarIcon, FinesIcon, PaperIcon, PqrIcon, NotificationIcon, ExitIcon, HamburgerIcon, CloseHamburgerIcon } from "../icons.jsx";
import logo from "../assets/logo.png";

function BarNav() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleMenu = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="nav_header">
      <nav className="navbar nav_lower">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-list">
          <li>
            <a className="nabButtons" href="#">
              <HomeIcon className="icon" />
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a className="nabButtons" href="#">
              <CarIcon className="icon" />
              <span>Préstamos</span>
            </a>
          </li>
          <li>
            <a className="nabButtons" href="#">
              <FinesIcon className="icon" />
              <span>Multas</span>
            </a>
          </li>
          <li>
            <a className="nabButtons" href="#">
              <PaperIcon className="icon" />
              <span>Solicitudes</span>
            </a>
          </li>
          <li>
            <a className="nabButtons" href="#">
              <PqrIcon className="icon" />
              <span>PQR</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar nav_upper">
        <ul className="nav-list">
          <li>
            <a className="nabButtons" href="#">
              <NotificationIcon className="icon" />
            </a>
          </li>
          <li>
            <a className="nabButtons" href="#">
              <ExitIcon className="icon" />
              <span>Cerrar sesión</span>
            </a>
          </li>
        </ul>
      </nav>

      <button className="open-menu" onClick={toggleMenu}><HamburgerIcon/></button>
      <nav className={`nav-container-media ${isNavVisible ? 'visible' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}><CloseHamburgerIcon/></button>
        <ul className="nav-list-phone">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Préstamos</a></li>
          <li><a href="#">Multas</a></li>
          <li><a href="#">Solicitudes</a></li>
          <li><a href="#">PQR</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default BarNav;
