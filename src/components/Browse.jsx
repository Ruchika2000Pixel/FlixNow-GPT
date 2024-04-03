import React from 'react'
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from '../hooks/usePopularMovies.js';

import MainContainer from "./MainCointainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import GPTSearch from './GPTSearch.jsx';

const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();
useTopRatedMovies();


  return (
    <div>
        <Header/>
        <GPTSearch/>
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