import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
import Watchlist from './components/Watchlist';
import About from './pages/About';
import { searchMovies, fetchMovies } from './api';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]); 
  const [popularMovies, setPopularMovies] = useState([]); 
  const [isSearching, setIsSearching] = useState(false);
  const [watchlist, setWatchlist] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const loadPopularMovies = async () => {
      const movies = await fetchMovies('popular', currentPage);
      setPopularMovies((prevMovies) => [...prevMovies, ...movies]);
    };
    loadPopularMovies();
  }, [currentPage]);


  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim()) {
      setIsSearching(true);
      const results = await searchMovies(searchTerm);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
    }
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((m) => m.id !== movie.id));
  };

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Routes>
            {}
            <Route 
              path="/" 
              element={
                <>
                  <SearchBar onSearch={handleSearch} /> {}
                  {isSearching ? (
                    <MovieList movies={searchResults} addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} />
                  ) : (
                    <>
                      <MovieList movies={popularMovies} addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} />
                      <button className="load-more-btn" onClick={loadMoreMovies}>Mehr anzeigen</button>
                    </>
                  )}
                </>
              } 
            />
            <Route 
              path="/movies" 
              element={<MovieList type="now_playing" addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} />} 
            />
            <Route 
              path="/movie/:id" 
              element={<MovieDetail addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} />} 
            />
            <Route 
              path="/watchlist" 
              element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
