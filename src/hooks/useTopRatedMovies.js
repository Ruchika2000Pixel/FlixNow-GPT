import { API_OPTIONS } from '../utils/const/constants';
import { useDispatch,useSelector } from 'react-redux';
import { addNowTopRatedMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'


const useTopRatedMovies=()=>{

const dispatch=useDispatch();

const nowTopRatedMovies= useSelector((store)=> store.movies.nowTopRatedMovies);

  const getNowTopRatedMovies= async() =>{
    const data= await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
       API_OPTIONS);
const json = await data.json ();
dispatch(addNowTopRatedMovies(json.results));

  };
useEffect(()=>{
  if(!nowTopRatedMovies)
  getNowTopRatedMovies();
},[])
};


export default useTopRatedMovies;