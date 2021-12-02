import React, {useContext, useEffect, useRef} from "react";
import MovieItem from "../components/MovieItem";
import '../styles/containers/GridMovies.css'

import {AppContext} from "../context/AppContext";

const GridMovies = () => {

  const {state} = useContext(AppContext)
  const listMovies = state.listMovies

  return (
    <section className="gridMovies">
      {
        listMovies.map(movie => (
          <MovieItem 
            key={movie.id}
            movie = {movie}
          />
        ))   
      }
    </section>
  )
}

export default GridMovies;