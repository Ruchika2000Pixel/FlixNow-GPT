import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const movies=useSelector((store) =>store.movies);


console.log(movies);


  return (
    movies.nowPlayingMovies && (
    <div className="bg-gray-950">
      <div className='-mt-80 md:pl-12 font-medium   relative z-20'>
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Popular"} movies={movies.nowPopularMovies}/>
     <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies}/>
     <MovieList title={"Upcoming"} movies={movies.nowUpcomingMovies}/>

        </div>
        </div>)
  );
};

export default SecondaryContainer;