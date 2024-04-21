import { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../images/icons/carrito-de-compras.png";
import usuario from "../images/icons/usuario.png";
import lupa from "../images/icons/lupa.png";
import menu from "../images/icons/menu.png";
import "../styles/Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header-nav">
      <img
        onClick={toggleMenu}
        className="menu-icon"
        src={menu}
        alt="menu icon"
      />
      <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/womensclothing"> WOMEN </Link>
        </li>
        <li>
          <Link to="/mensClothing"> MEN </Link>
        </li>
        <li>
          <Link to="/jewerlyProducts"> JEWERLY </Link>
        </li>
        <li>
          <Link to="/electronics"> ELECTRONICS </Link>
        </li>
      </ul>
      <section className="nav-buttons">
        <img className="button" src={lupa} alt="" />
        <img className="button" src={usuario} alt="" />
        <img className="button" src={cart} alt="" />
      </section>
    </nav>
  );
}

export default Header;
