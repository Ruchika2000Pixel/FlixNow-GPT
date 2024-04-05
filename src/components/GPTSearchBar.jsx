import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector,useDispatch } from 'react-redux';
import { useRef } from 'react';
import { API_OPTIONS } from '../utils/const/constants';
import {addGptMovieResult} from "../utils/GPTSlice"
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from '../utils/const/constants';






const GPTSearchBar = () => {
  const genAI =new GoogleGenerativeAI(API_KEY);

  const dispatch=useDispatch();

  const langKey = useSelector((store)=>store.config.lang);
  const searchText =useRef(null);

  // search movie in tmdb database 
  const searchMovieTMDB =async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie+ "&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json=await data.json();
    return json.results; 
  };

  const handleGptSearchClick= async()=>{  console.log(searchText.current.value);
  
  //make an api call to gptapi to get movie results



  const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query"+ searchText.current.value + ".Only give me name of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  const model= genAI.getGenerativeModel({model: "gemini-pro"});
  const result =await model.generateContent(gptQuery);
  const response= await result.response ;
  const text = response.text();
  const gptMovies=text.split(",");
  console.log(gptMovies);
  

  
  // for each movie i will search in TMDB API

 const promiseArray =gptMovies.map((movie)=> searchMovieTMDB(movie));
 // [promise, pro,pro,pro,pro]

 const tmdbResults = await  Promise.all(promiseArray);  //takes the array of promises
console.log(tmdbResults); 

dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

  };


  






  return (
    <div className='pt-[8%] flex justify-center'>
        <form className="w-1/2 rounded-xl bg-gray-800  grid grid-cols-12"
        onSubmit={(e)=> e.preventDefault()}>
            <input 
            ref={searchText}
            type="text" 
            className='p-4 m-2 bg-black text-cyan-50 text-lg font-medium col-span-9'
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className="col-span-3 m-2 font-semibold text-white bg-gradient-to-r from-red-800 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800  rounded-lg text-xl px-5 py-2.5 text-center "
            onClick={handleGptSearchClick}>
               {lang[langKey].search}
            </button>
        </form>
    </div>
  );
  };

export default GPTSearchBar;