import axios from 'axios';

const api_key = '9ec68717ac0ee3cd927e52637a51d9f9';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: api_key,
  },
});

export const fetchMovies = async () => {
  const response = await movieApi.get('trending/movie/day');
  return response.data.results;
};

export const fetchMoviesByQuery = async (searchQuery) => {
  const response = await movieApi.get('/search/movie', {
    params: { query: searchQuery },
  });
  return response.data.results;
};

export const fetchMoviesById = async (id) => {
  try {
    const response = await movieApi.get(`/movie/${id}`, {
      params: {
        append_to_response: 'cast,reviews',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error.message);
    throw error;
  }
};

export const fetchCastById = async (id) => {
  const response = await movieApi.get(`/movie/${id}/cast`);
  return response.data;
};

export const fetchReviewsById = async (id) => {
  const response = await movieApi.get(`/movie/${id}/reviews`);
  return response.data;
};
