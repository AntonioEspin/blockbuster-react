import React from "react";
import GridMovies from "./GridMovies";
import Buttons from "../components/Buttons";
import '../styles/containers/MoviesContainer.css'

const MoviesContainer = () => {
  return (
    <section className="moviesContainer">
      <h1>Todas las peliculas</h1>
      <GridMovies/>
      <Buttons/>
    </section>
  )
}

export default MoviesContainer;

