import { API_OPTIONS } from '../utils/const/constants';
import { useDispatch } from 'react-redux';
import { addNowPopularMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'


const usePopularMovies=()=>{

const dispatch=useDispatch();


  const getNowPopularMovies= async() =>{
    const data= await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
               API_OPTIONS);
const json = await data.json ();
dispatch(addNowPopularMovies(json.results));

  };
useEffect(()=>{
  getNowPopularMovies();
},[])
};


export default usePopularMovies;