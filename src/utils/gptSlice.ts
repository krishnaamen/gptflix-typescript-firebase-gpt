import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearchView: false,
        gptMovieResults: null,
        searchMovies: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearchView = !state.showGptSearchView;
        },
        addGptMovieResults: (state, action) => {
            const {gptMovieResults,searchMovies} = action.payload;
            state.gptMovieResults = gptMovieResults;
            state.searchMovies = searchMovies;
        },
        
    },
});
export const { toggleGptSearchView,addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer;