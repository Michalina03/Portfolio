import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Michalina Janowska</h1>
        <button className="header__hamburger" onClick={toggleMenu}>
          <span className="header__hamburger__line"></span>
          <span className="header__hamburger__line"></span>
          <span className="header__hamburger__line"></span>
        </button>
        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav__list">
            <li className="header__nav__list__item">
              <Link to="/" onClick={() => setIsOpen(false)}>Strona Główna</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to="/projekty" onClick={() => setIsOpen(false)}>Projekty</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to="/o mnie" onClick={() => setIsOpen(false)}>O Mnie</Link>
            </li>
            <li className="header__nav__list__item">
              <Link to="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}