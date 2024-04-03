import { API_OPTIONS } from '../utils/const/constants';
import { useDispatch } from 'react-redux';
import { addNowTopRatedMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'


const useTopRatedMovies=()=>{

const dispatch=useDispatch();


  const getNowTopRatedMovies= async() =>{
    const data= await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
       API_OPTIONS);
const json = await data.json ();
dispatch(addNowTopRatedMovies(json.results));

  };
useEffect(()=>{
  getNowTopRatedMovies();
},[])
};


export default useTopRatedMovies;