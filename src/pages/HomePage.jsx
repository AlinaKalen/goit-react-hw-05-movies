import MovieList from '../components/MoviesList/MoviesList'
import React, { Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchMovies } from '../components/Api/Api'
import css from '../components/MoviesList/Movies.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData)
    }
    fetchData()
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1 className={css.header}> Trending movies</h1>
      <MovieList to={'movies/'} location={location} movies={movies} />

    </Suspense>

  )
}

export default HomePage