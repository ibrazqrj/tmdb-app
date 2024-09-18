const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = 'de-DE';

export const fetchMovies = async (type = 'popular', page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  });
  const data = await response.json();
  return data;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=${LANGUAGE}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  });
  const data = await response.json();
  return data.results;
};


