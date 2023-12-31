
import React, { useEffect, useState, Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../components/Api/Api';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';

const MoviesPage = () => {
  
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
    
  };

  useEffect(() => {
    const queryParams = searchParams.get('query');
    if (queryParams) {
      fetchMoviesByQuery(queryParams).then((res) => setSearchMovies(res));
    }
  }, [searchParams]);

  return (
    <>
      <div>
        <SearchForm onSubmit={handleSubmit} />
        <MoviesList movies={searchMovies} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesPage;
