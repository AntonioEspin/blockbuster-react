import React from "react";
import CarrouselItem from "../components/CarrouselItem";
import {useGetUpcomingMovies} from '../hooks/useGetMovies'
import '../styles/containers/Carrousel.css'

const Carrousel = () => {
  const {topMovies} = useGetUpcomingMovies()
  return (
    <section className="carrousel">
      {
        topMovies.map(item => (
          <CarrouselItem 
            key={item.id} 
            backdrop_path={item.backdrop_path} 
            title={item.title} 
          />
        ))
      }
    </section>
  )
}

export default Carrousel