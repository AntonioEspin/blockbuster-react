import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";
import Logo from '@images/logo-blockBuster.svg'
import iconSearch from '@images/icon-search.svg'
import '../styles/components/Header.css'

const Header = () => {
  const {getAllMovies, getMostValues, getLestValues, getFilterMovies} = useContext(AppContext)

  const handleGetAllMovies = (event) => {
    event.preventDefault()
    getAllMovies()
  }

  const handleMostMovies = (event) => {
    event.preventDefault()
    getMostValues()
  }

  const handleLestValues = (event) => {
    event.preventDefault()
    getLestValues()
  }

  const [search, setSearch] = useState('')

  const handleInputSearch = (event) => {
    setSearch(event.target.value)
    getFilterMovies(search)
  }
  console.log(search)
  return (
    <header className="header">
      <figure className="header__figure">
        <img src={Logo} alt="logo-blockBuster" />
      </figure>
      <nav className="header__nav">
        <ul>
          <li><a href="" onClick={(event)=> handleGetAllMovies(event)}>Todas</a></li>
          <li><a href="" onClick={(event)=> handleMostMovies(event)}>Más valoradas</a></li>
          <li><a href="" onClick={(event)=> handleLestValues(event)}>Menos Valoradas</a></li>
        </ul>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Busca tu pelicula favorita" value={search}  onChange={handleInputSearch}/>
        <figure>
          <img src={iconSearch} alt="iconSearch" />
        </figure>
      </div>
    </header>
  )
}

export default Header;