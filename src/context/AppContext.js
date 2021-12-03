import React, { useEffect, useState } from "react";
import {useGetPopularMovies} from "../hooks/useGetMovies";

const AppContext = React.createContext({})

const ContainerContext = ({children}) => {
  
  
  const initialState = {
    listMovies: []
  }
  
  
  const [state, setState] = useState(initialState)
  const [page, setPage] = useState(1)
  
  const {movies} = useGetPopularMovies(page)

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

  const nextPage = () => {
    if(page < 1000) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if(page > 1 ) {
      setPage(page - 1)
      console.log(page)
    }
  }

  return (
    <AppContext.Provider value= {{state, getAllMovies, getMostValues, getLestValues, getFilterMovies, nextPage, previousPage}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, ContainerContext}