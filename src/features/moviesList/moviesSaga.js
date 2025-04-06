import { call, delay, put, takeEvery, select } from "redux-saga/effects";
import { getMoviesData } from "../../common/utils/getMoviesData";
import { getSearchMovie } from "../../common/utils/getSearchMovie";
import { getMovieGenre } from "../../common/utils/getMoviesGerne";
import { getPerson } from "../../common/utils/getPerson";
import {
    currentPageSelector,
    moviesGenreSelector,
    fetchMovies,
    isSearchingSelector,
    searchQuerySelector,
    setFirstPage,
    setLastPage,
    setMovies,
    setGenres,
    setMovieSearching,
    setNewMoviesPage,
    setNextPage,
    setPreviousPage,
    setActor,
} from "./moviesSlice";

function* fetchMoviesWorker() {
    const page = yield select(currentPageSelector);
    // console.log("fetchMoviesWorker");
    try {
        const movies = yield call(getMoviesData, page);
        yield put(setMovies(movies));
    } catch (error) {
        console.error(error);
        // yield put(setError(error));
    }
}

function* fetchGenresWorker() {
    const genres = yield select(moviesGenreSelector);

    try {
        const genres = yield call(getMovieGenre);
        yield put(setGenres(genres));
    } catch (error) {
        console.error(error);
    }
}

function* fetchActorWorker() {
    const page = yield select(currentPageSelector);

    try {
        const person = yield call(getPerson, page);
        yield put(setActor(person));
    } catch (error) {
        console.error(error);
    }
}

// function* paginationWorker() {
//     try {
//         const { page, total_pages, total_results } = yield call(getMoviesData);
//         yield console.log(page, total_pages, total_results);
//         yield setPagination(page, total_pages, total_results);
//     } catch (error) {
//         console.error(error);
//     }
// }

function* newPageWorker() {
    yield delay(600);
    const page = yield select(currentPageSelector);
    const isSearching = yield select(isSearchingSelector);

    try {
        if (isSearching) {
            const query = yield select(searchQuerySelector);
            const movies = yield call(getSearchMovie, query, page)
            yield put(setNewMoviesPage(movies.results));
        } else {
            const movies = yield call(getMoviesData, page);
            yield put(setNewMoviesPage(movies.results));
        }
    } catch (error) {
        console.error(error);
    }
}

function* searchMovieWorker({ payload }) {
    // const query = yield select(searchQuerySelector);
    try {
        const page = yield select(currentPageSelector);
        const query = payload;
        const movies = yield call(getSearchMovie, query, page);
        yield put(setMovies(movies));
    } catch (error) {
        console.error(error);
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchMovies.type, fetchMoviesWorker);
    yield takeEvery(fetchMovies.type, fetchGenresWorker);
    yield takeEvery(fetchMovies.type, fetchActorWorker);
    yield takeEvery(setMovieSearching.type, searchMovieWorker)
    yield takeEvery(setNextPage.type, newPageWorker);
    yield takeEvery(setPreviousPage.type, newPageWorker);
    yield takeEvery(setLastPage.type, newPageWorker);
    yield takeEvery(setFirstPage.type, newPageWorker);
}