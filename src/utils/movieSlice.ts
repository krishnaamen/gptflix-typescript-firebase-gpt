import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state: { nowPlayingMovies: any }, action: { payload: any }) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state: { trailerVideo: any }, action: { payload: any }) => {
            state.trailerVideo = action.payload;
        }

    } 
});

export const { addNowPlayingMovies,addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;