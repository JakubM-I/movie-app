import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        genres: [],
        results: [],
        loading: false,
        currentPage: 1,
        totalPages: undefined,
        isSearching: false,
        searchQuery: "",
    },
    reducers: {
        fetchMovies: state => {
            state.loading = true;
            state.isSearching = false;
        },

        setMovies: (state, { payload: movies }) => {
            state.movies = movies.movies || movies.results;
            state.totalPages = movies.total_pages;
            state.loading = false;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },

        setActor: (state, { payload: results }) => {
            state.results = results.results || results;
            state.totalPages = results.total_pages || 0; 
            state.loading = false;
        },

        setNewMoviesPage: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
        },

        setMovieSearching: (state, { payload: query }) => {
            state.loading = true;
            state.isSearching = true;
            state.searchQuery = query;
            state.currentPage = 1;
        },



        setNextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage += 1;
                state.loading = true;
            }
        },

        setLastPage: (state) => {
            if (state.currentPage !== state.totalPages) {
                state.currentPage = state.totalPages;
                state.loading = true;
            }
        },

        setPreviousPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
                state.loading = true;
            }
        },

        setFirstPage: (state) => {
            if (state.currentPage !== 1) {
                state.currentPage = 1;
                state.loading = true;
            }
        }
    }
});

export const moviesStateSelector = state => state.movies;
export const moviesSelector = state => moviesStateSelector(state).movies;
export const moviesGenreSelector = state => moviesStateSelector(state).genres;
export const moviesActorSelector = state => moviesStateSelector(state).results;
export const currentPageSelector = state => moviesStateSelector(state).currentPage;
export const totalPagesSelector = state => moviesStateSelector(state).totalPages;
export const isSearchingSelector = state => moviesStateSelector(state).isSearching;
export const searchQuerySelector = state => moviesStateSelector(state).searchQuery;


export const { fetchMovies, setMovies, setGenres, setActor, setNewMoviesPage, setMovieSearching, setNextPage, setLastPage, setPreviousPage, setFirstPage, } = moviesSlice.actions;
export default moviesSlice.reducer;