import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
    },
    reducers: {
        fetchMovies: state => {
            state.loading = true;
        },

        setMovies: (state, { payload: movies }) => {
            state.movies = movies.movies;
            state.loading = false;
        },
    }
});

export const moviesStateSelector = state => state.movies;
export const moviesSelector = state => moviesStateSelector(state).movies;


export const { fetchMovies, setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;