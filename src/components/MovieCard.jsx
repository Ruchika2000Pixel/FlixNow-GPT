import React from 'react'
import { IMG_CDN_URL } from '../utils/const/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-2 duration-500 cursor-pointer group rounded-xl bg-white/30 group-hover:blur-md hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 ">
        <img className=" rounded-md" alt="Movie Card"
        src={IMG_CDN_URL+ posterPath }/>


    </div>
  );
};

export default MovieCard;