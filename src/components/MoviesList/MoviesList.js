import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import css from './Movies.module.css'

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies?.map(({ id, original_title }) => (
        <li key={id} className={css.MovieList}>
          <Link to={`/movies/${id}`} state={{ from: location }}>{original_title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MoviesList;