import { createSlice } from "@reduxjs/toolkit";


const popularSlice= createSlice({
    name:"popular  movies",
    initialState:{
        
    },
    reducers:{
        addpopular:(state,action)=>{
            state.popularSlice=action.payload;
        },
        
        
    }
});
export const {addpopular}= popularSlice.actions;
export default popularSlice.reducer;