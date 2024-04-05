import { API_OPTIONS } from '../utils/const/constants';
import { useDispatch ,useSelector} from 'react-redux';
import { addNowUpcomingMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'


const useUpcomingMovies=()=>{

const dispatch=useDispatch();
const nowUpcomingMovies= useSelector((store)=> store.movies.nowUpcomingMovies);


  const getNowUpcomingMovies= async() =>{
    const data= await fetch(
      
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
       API_OPTIONS);
const json = await data.json ();
dispatch(addNowUpcomingMovies(json.results));

  };
useEffect(()=>{
  if(!nowUpcomingMovies)
  getNowUpcomingMovies();
},[])
};


export default useUpcomingMovies;