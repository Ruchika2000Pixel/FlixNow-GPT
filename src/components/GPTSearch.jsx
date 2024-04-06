import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import img from "../utils/const/gpt_final3.png"

const GPTSearch = () => {
  return (
    <>
        <div className=' -z-10  fixed'>
            <img className='h-screen w-screen object-cover'
            src={img}
            alt="bg_img"/>
        </div>
        <div className=''>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
        </div>
        </>
        
  )
}

export default GPTSearch