import {useState, useEffect} from "react";

const useGetPopularMovies = () => {

  const API = 'https://api.themoviedb.org/3/movie/popular?api_key=51463645e696823d295c4c7e1cf5fd7e&language=es-MX&page=1'

  const [movies, setMovies] = useState([])

  useEffect(async () => {
    const response = await fetch(API)
    const data = await response.json()
    setMovies(data.results)
  }, [])

  return {
    movies
  }
}

const useGetUpcomingMovies = () => {
  const API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=51463645e696823d295c4c7e1cf5fd7e&language=es-MX&page=1'

  const [movies, setMovies] = useState([])

  useEffect(async () => {
    const response = await fetch(API)
    const data = await response.json()
    setMovies(data.results)
  }, [])

  const topMovies = movies.slice(0, 5)

  return {
    topMovies
  }
}

export {useGetPopularMovies, useGetUpcomingMovies};