import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getMoviesData } from "../../common/utils/getMoviesData";
import { currentPageSelector, fetchMovies, setMovies } from "./moviesSlice";

function* fetchMoviesWorker() {
    const page = yield select(currentPageSelector);
    console.log("fetchMoviesWorker");
    try {
        const movies = yield call(getMoviesData(page));
        yield put(setMovies(movies));
    } catch (error) {
        console.error(error);
        // yield put(setError(error));
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
    try {
        const { movies } = yield call(getMoviesData(page));
        yield put(setNewMoviesPage(movies));
    } catch (error) {
        console.error(error);
    }
}


export function* moviesSaga() {
    yield takeEvery(fetchMovies.type, fetchMoviesWorker);
    yield takeEvery(fetchMovies.type, paginationWorker);
    yield takeEvery(setNextPage.type, newPageWorker);
    yield takeEvery(setPreviousPage.type, newPageWorker);
    yield takeEvery(setLastPage.type, newPageWorker);
    yield takeEvery(setFirstPage.type, newPageWorker);
}