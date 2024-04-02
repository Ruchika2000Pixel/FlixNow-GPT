import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-tr from-slate-950">
        <h1 className="text-6xl font-bold"
        >{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="bg-gray-500 rounded-lg bg-opacity-50 hover:bg-opacity-80 text-white p-4 px-16 font-bold text-xl"> ▶️   Play</button>
            <button className="bg-gray-500 rounded-lg bg-opacity-50 hover:bg-opacity-80 mx-2 text-white p-4 px-16  font-bold text-xl"> 🛈  More Info </button>
        </div>
    </div>
  );
};

export default VideoTitle;