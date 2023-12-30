import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../components/Api/Api';
import css from '../components/SearchForm/Form.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({
    title: '',
    poster_path: '',
    popularity: 0,
    overview: '',
    genres: [],
  });
  const [movieLocation, setMovieLocation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) setMovieLocation(location.state.from);
  }, [location.state]);

  useEffect(() => {
    const fetchById = async () => {
      try {
        if (movieId) {
          const movieData = await fetchMoviesById(movieId);
          setMovie(movieData);
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
      {!isLoading && movieId && (
        <>
          <Link to={movieLocation || '/'}>
            <button className={css.SrcButton}>Go back</button>
          </Link>
          <div className={`${css.container} ${css.movieDetailsContainer}`}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : 'default_image_url'}
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
          <div className={css.additionalInfo}>
            <h3 style={{ fontSize: 20 }}>Additional information</h3>
            <Link to={`/movies/${movieId}/cast`} style={{ marginRight: 20, fontSize: 20 }}>
              Cast
            </Link>
            <Link to={`/movies/${movieId}/reviews`} style={{ fontSize: 20 }}>
              Reviews
            </Link>
          </div>
          <div style={{ margin: '15px 0' }}>
            <Outlet />
          </div>
        </>
      )}
      {!isLoading && !movieId && (
        <div>
          <p>No movie selected.</p>
          <Link to="/">Go back to the movie list</Link>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
