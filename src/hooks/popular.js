import { API_OPTIONS } from '../utils/const/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'


const popular=()=>{

const dispatch=useDispatch();


  const getpopular= async() =>{
    const data= await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
               API_OPTIONS);
const json = await data.json ();
dispatch(addNowPlayingMovies(json.results));

  };
useEffect(()=>{
  getpopular();
},[])
};


export default popular;