import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div className='px-6  bg-gray-950 '>
        <h1 className='text-3xl text-white font-bold py-6 '>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide  cursor-pointer '>
        
        <div className='flex gap-4 group'>
            {movies?.map((movie) =>
            (<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
        </div>
    </div>
    </div>
  )
}

export default MovieList
