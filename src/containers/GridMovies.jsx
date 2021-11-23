import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";
import '../styles/containers/GridMovies.css'

const GridMovies = () => {

  const API = 'https://api.themoviedb.org/3/movie/popular?api_key=51463645e696823d295c4c7e1cf5fd7e&language=es-MX&page=1'

  const [movies, setMovies] = useState([])

  useEffect(async () => {
    const response = await fetch(API)
    const data = await response.json()
    setMovies(data.results)
  }, [])

  return (
    <section className="gridMovies">
      {movies.map(movie => (
        <MovieItem 
          // key={movie.id}
          // poster={movie.poster_path}
          // vote={movie.vote_average}
          key={movie.id}
          movie = {movie}
        />
      ))}
    </section>
  )
}

export default GridMovies;