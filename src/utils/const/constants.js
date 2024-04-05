export const API_OPTIONS=  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
       'Bearer'+process.env.REACT_APP_TMDBAPI_KEY,
    }
  };
  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";  
  export const SUPPORTED_LANGUAGES = [
{identifier: "en",name:"English"},
{identifier: "hindi",name:"Hindi"},
{identifier: "odia",name:"Odia"},
{identifier: "spanish",name:"Spanish"}] ;

export const API_KEY=process.env.REACT_APP_GEMINIAI_KEY;