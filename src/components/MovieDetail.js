import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import './MovieDetail.css'; 

const MovieDetail = ({ addToWatchlist, removeFromWatchlist, watchlist }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const isInWatchlist = () => {
    return watchlist.some((m) => m.id === parseInt(id));
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(id);
      setMovie(movieDetails);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <p>Lädt...</p>;

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-poster">
        <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-detail-info">
        <h1>{movie.title}</h1>
        <div className="meta">
          <span>{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</span>
          <span>{movie.runtime ? `${movie.runtime} min` : 'N/A'}</span>
          <span>{movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : 'N/A'}</span>
        </div>
        <div className="stars">
          {[...Array(5)].map((star, index) => {
            const rating = Math.round(movie.vote_average / 2);
            return (
              <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
            );
          })}
        </div>
        <p>{movie.overview}</p>
        {movie.homepage && (
          <a href={movie.homepage} className="read-more" target="_blank" rel="noopener noreferrer">Mehr erfahren</a>
        )}

        <div className="movie-detail-buttons">
          {isInWatchlist() ? (
            <button className="btn btn-remove" onClick={() => removeFromWatchlist(movie)}>Von Watchlist entfernen</button>
          ) : (
            <button className="btn btn-watchlist" onClick={() => addToWatchlist(movie)}>Zur Watchlist hinzufügen</button>
          )}
          <button className="btn btn-edit">Bearbeiten</button>
          <button className="btn btn-delete">Löschen</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
