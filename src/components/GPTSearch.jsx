import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import img from "../utils/const/gpt_final3.png"

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10 w-screen bg-fixed'>
            <img 
            src={img}
            alt="bg_img"/>
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
        </div>
  )
}

export default GPTSearch