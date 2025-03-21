import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        currentPage: 1,
        totalPages: undefined,
    },
    reducers: {
        fetchMovies: state => {
            state.loading = true;
        },

        setMovies: (state, { payload: movies }) => {
            state.movies = movies.movies;
            state.totalPages = movies.total_pages;
            state.loading = false;
        },

        setNewMoviesPage: (state, { payload: movies }) => {
            state.movies = movies;
            state.loading = false;
        },

        // setPagination: (state, payload) => {
        //     state.currentPage = payload.page;

        // },

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
export const currentPageSelector = state => moviesStateSelector(state).currentPage;
export const totalPagesSelector = state => moviesStateSelector(state).totalPages;

export const { fetchMovies, setMovies, setNewMoviesPage, setNextPage, setLastPage, setPreviousPage, setFirstPage } = moviesSlice.actions;
export default moviesSlice.reducer;