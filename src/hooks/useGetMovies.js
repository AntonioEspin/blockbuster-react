import {useState, useEffect} from "react";

const useGetPopularMovies = (page) => {

  const API = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.APIKEY}&language=es-MX&page=${page}`

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
  const API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.APIKEY}&language=es-MX&page=1`

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