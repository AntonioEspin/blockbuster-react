import React, { useEffect, useState } from "react";
import {useGetPopularMovies} from "../hooks/useGetMovies";

const AppContext = React.createContext({})

const ContainerContext = ({children}) => {
  const {movies} = useGetPopularMovies()

  const initialState = {
    listMovies: []
  }


  const [state, setState] = useState(initialState)

  useEffect(()=>{
    setState({
      listMovies: movies
    })
  },[movies])
  

  const getAllMovies = (payload) => {
    setState({
      listMovies: movies
    })
  }

  const getMostValues = (payload) => {
    setState({
      listMovies: movies.filter(item => item.vote_average >= 7)
    })
  }
  
  
  const getLestValues = (payload) => {
    setState({
      listMovies: movies.filter(item=> item.vote_average < 7)
    })
  }
  
  const getFilterMovies = (payload) => {
    setState({
      listMovies: movies.filter(movie => movie.title.toLowerCase().includes(payload.toLowerCase()))
    })
  }

  return (
    <AppContext.Provider value= {{state, getAllMovies, getMostValues, getLestValues, getFilterMovies}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, ContainerContext}