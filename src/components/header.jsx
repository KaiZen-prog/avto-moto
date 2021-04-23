import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <span className="header__company--bigger">AVTO</span>
        <span className="header__company--smaller">MOTO</span>
      </a>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Автомобили</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Контакты</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link header__nav-link--current" href="#">Услуги</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Вакансии</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.displayName = `Header`;

export default Header;
