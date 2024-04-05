import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPopularMovies:null,
        nowTopRatedMovies:null,
        nowUpcomingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addNowPopularMovies:(state,action)=>{
            state.nowPopularMovies=action.payload;
        },
        addNowTopRatedMovies:(state,action)=>{
            state.nowTopRatedMovies=action.payload;
        },
        addNowUpcomingMovies:(state,action)=>{
            state.nowUpcomingMovies=action.payload;
        },


        addTrailerVideo : (state,action)=>{
            state.trailerVideo =action.payload;
        }
    }
});
export const {addNowPlayingMovies,addNowPopularMovies,addNowUpcomingMovies,addNowTopRatedMovies, addTrailerVideo}= movieSlice.actions;
export default movieSlice.reducer;