// MovieDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../components/Api/Api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [movieLocation, setMovieLocation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) setMovieLocation(location.state.from);
  }, [location.state]);

  useEffect(() => {
    console.log('Movie ID:', movieId);
    const fetchById = async () => {
      try {
        if (movieId) {
          const movie = await fetchMoviesById(movieId);
          setMovie(movie);
        }
      } catch (error) {
        console.error('Error fetching movie by ID:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchById();
  }, [movieId]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && movie.title && (
        <>
          <Link to={movieLocation || '/'}>&lt; Go back</Link>
          <div style={{ display: 'flex' }}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              style={{ marginRight: 30 }}
            />
            <div>
              <h3>{movie.title}</h3>
              <p>User Score: {parseInt(movie.popularity)}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres?.map((gen) => gen.name).join(', ')}</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Additional information</h3>
            <Link to={`/movies/${movieId}/cast`} style={{ marginRight: 15 }}>
              Cast
            </Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </div>
          <div style={{ margin: '15px 0' }}>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
