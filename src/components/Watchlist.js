import React from 'react';
import { Link } from 'react-router-dom';
import './Watchlist.css';

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div className="watchlist-container">
      <h2>Deine Watchlist</h2>
      <div className="movie-grid">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
              <button onClick={() => removeFromWatchlist(movie)}>Entfernen</button> {}
            </div>
          ))
        ) : (
          <p>Du hast noch keine Filme zu deiner Watchlist hinzugefügt.</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
