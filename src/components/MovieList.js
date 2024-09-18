import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api';
import { Link } from 'react-router-dom';

const MovieList = ({ type, movies, addToWatchlist, removeFromWatchlist, watchlist }) => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    if (movies) {
      setMoviesData(movies);
    } else {
      const getMovies = async () => {
        const moviesFromApi = await fetchMovies(type);
        setMoviesData(moviesFromApi);
      };
      getMovies();
    }
  }, [type, movies]);

  const isInWatchlist = (movie) => {
    return watchlist.some((m) => m.id === movie.id);
  };

  return (
    <div>
      <div className="movie-grid">
        {moviesData.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className="movie-card"> {}
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
