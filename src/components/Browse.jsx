import React from 'react'
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainCointainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {

useNowPlayingMovies();

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        {/*
        MainCotainer
      -VideoBackground
    -VideoTitle 
  SecondaryContainer
-MovieList * n
-Cards *n
  */ }
     </div>
  )
}

export default Browse;