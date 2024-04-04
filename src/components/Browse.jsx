import React from 'react'
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from '../hooks/usePopularMovies.js';
import { useSelector } from 'react-redux';
import MainContainer from "./MainCointainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import GPTSearch from './GPTSearch.jsx';

const Browse = () => {
  const showGPTSearch= useSelector((store)=>store.gpt.showGPTSearch)

useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();
useTopRatedMovies();


  return (
    <div>
        <Header/>
        {
          showGPTSearch?(<GPTSearch/>):
          (
          <> 
          <MainContainer/>
          <SecondaryContainer/> 
          </>
          )
        }

        
        
       
     </div>
  )
}

export default Browse;