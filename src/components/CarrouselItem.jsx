import React from "react";
import '../styles/components/CarrouselItem.css'
import iconPlay from '../static/images/icon-play.svg'
import iconPlus from '../static/images/icon-plus.svg'

const CarrouselItem = ({backdrop_path, title}) => {
  return (
    <div className="carrousel__item">
      <img className="carrousel__item--figure" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={title} />
      <div className="carrousel__item-buttons">
        <button className="button button-play">
          <img src={iconPlay} alt="icon-play" />
          <p>VER AHORA</p>
        </button>
        <button className="button button-add">
          <img src={iconPlus} alt="icon-plus" />
          <p>VER DESPUÉS</p>
        </button>
      </div>
    </div>
  )
}

export default CarrouselItem;