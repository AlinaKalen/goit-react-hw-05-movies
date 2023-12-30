import React from 'react'
import { Link } from 'react-router-dom'
import css from './Movies.module.css'

const MoviesList = ({ location, movies, to }) => {
  return (
    <ul>
      {movies?.map(({ id, original_title }) => (
        <li key={id} className={css.MovieList}>
          <Link to={`${to}${id}`} state={{ from: location }} >{original_title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MoviesList;