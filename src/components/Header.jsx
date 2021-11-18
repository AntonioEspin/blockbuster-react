import React from "react";
import Logo from '@images/logo-blockBuster.svg'
import iconSearch from '@images/icon-search.svg'
import '../styles/components/Header.css'

const Header = () => {
  return (
    <header className="header">
      <figure className="header__figure">
        <img src={Logo} alt="logo-blockBuster" />
      </figure>
      <nav className="header__nav">
        <ul>
          <li><a href="">Todas</a></li>
          <li><a href="">Más valoradas</a></li>
          <li><a href="">Menos Valoradas</a></li>
        </ul>
      </nav>
      <div className="header__search">
        <input type="text"/>
        <img src={iconSearch} alt="iconSearch" />
      </div>
    </header>
  )
}

export default Header;