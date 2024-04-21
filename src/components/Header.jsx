import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header-nav">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
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
        <button className="button">Search</button>
        <button className="button">Login</button>
        <button className="button">Cart</button>
      </section>
    </nav>
  );
}

export default Header;
