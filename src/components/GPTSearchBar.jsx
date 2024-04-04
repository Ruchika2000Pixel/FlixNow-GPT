import React from 'react'
import lang from '../utils/languageConstants';

const GPTSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className="w-1/2 rounded-xl bg-gray-800  grid grid-cols-12">
            <input 
            type="text" 
            className='p-4 m-2 bg-black text-lg font-medium col-span-9'
            placeholder={lang.hindi.gptSearchPlaceholder}/>
            <button className="col-span-3 m-2 font-semibold text-white bg-gradient-to-r from-red-800 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800  rounded-lg text-xl px-5 py-2.5 text-center ">
               {lang.hindi.search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar;