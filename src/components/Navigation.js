import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="logo">IBRAMOVIES</div>
      <ul className="nav-links">
        <li><Link to="/">Filme</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default Navigation;
