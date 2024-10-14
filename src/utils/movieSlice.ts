import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcommingMovies: null,

    },
    reducers: {
        addNowPlayingMovies: (state: { nowPlayingMovies: any }, action: { payload: any }) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state: { trailerVideo: any }, action: { payload: any }) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state: { popularMovies: any }, action: { payload: any }) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state: { topRatedMovies: any }, action: { payload: any }) => {
            state.topRatedMovies = action.payload;
        },
        addUpcommingMovies: (state: { upcommingMovies: any }, action: { payload: any }) => {
            state.upcommingMovies = action.payload;
        }

    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcommingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;