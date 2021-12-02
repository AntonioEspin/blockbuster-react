import { useEffect, useState } from "react";
import getMovies from "../utils/getMovies";



const useInitialState = () => {
  const {movies} = getMovies()

  const initialState = {
  // allMovies: [],
  // mostValues: [],
  // lestValues: [],
  setMovies: movies
}

  const [state, setState] = useState(initialState)

  const getAllMovies = (payload) => {
    setState({
      ...state,
      setMovies: payload
    })
  }

  const getMostValues = (payload) => {
    setState({
      ...state,
      setMovies: payload.filter(item => item.vote_average >= 7)
    })
  }

  const getLestValues = (payload) => {
    setState({
      ...state,
      setMovies: payload.filter(item => item.vote_average < 7)
    })
  }


  return {
    state,
    getAllMovies,
    getMostValues,
    getLestValues,
  }
}

export default useInitialState