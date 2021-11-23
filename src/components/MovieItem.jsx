import React from "react";
import '../styles/components/MovieItem.css'
import starImage from '../static/images/icon-start.svg'

const MovieItem = ({movie}) => {
  return (
    <div className="movieItem">
      <img className="movieItem__img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movieItem__info">
        <img className="movieItem__info--img" src={starImage} alt="star-image" />
        <p>{movie.vote_average}</p>
      </div>
    </div>
  )
}

export default MovieItem;