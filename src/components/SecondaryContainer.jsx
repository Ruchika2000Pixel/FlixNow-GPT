import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const movies=useSelector((store) =>store.movies);


console.log(movies);


  return (
    movies.nowPlayingMovies && (
    <div>
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>

        
        </div>)
  );
};

export default SecondaryContainer;