import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>Mein Projekt</h2>
        <p>
          Dieses Projekt ist eine Filmwebseite, die auf der TMDb API basiert. Es handelt sich um ein Schulprojekt, das
          darauf abzielt, den Umgang mit APIs zu üben. Diese Seite zeigt Filme an, ermöglicht das Suchen nach Filmen
          und zeigt Detailinformationen zu jedem Film. Es sind erweiterte Funktionen wie das Hinzufügen und
          Bearbeiten von Filmdetails vorgesehen.
        </p>
      </div>
      <div className="about-images">
        <img src="https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg" alt="Team Image 1" />
        <img src="https://www.bluedogposters.com.au/cdn/shop/products/PP34925_1400x.jpg?v=1674016516" alt="Team Image 2" />
        <img src="https://static.ipic.com/filmimage/HO00003031/The_Killers_Game.jpg?width=400&maxWidth=400" alt="Team Image 3" />
        <img src="https://static.posters.cz/image/1300/poster/fast-furious-dominic-toretto-i114155.jpg" alt="Team Image 4" />
        <img src="https://images.thalia.media/-/BF2000-2000/c85ffb59166d4eef84353980bfc8d80b/fast-furious-neues-modell-originalteile-dvd-vin-diesel.jpeg" alt="Team Image 5" />
        <img src="https://m.media-amazon.com/images/M/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA@@._V1_.jpg" alt="Team Image 6" />
        <img src="https://www.liveabout.com/thmb/v9dF_CUVcm8CY6j4IuVIO0kOWvw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/billy-madison-56a4f8445f9b58b7d0da2701.jpg" alt="Team Image 7" />
      </div>
    </div>
  );
};

export default About;
