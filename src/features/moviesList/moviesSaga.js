import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getMoviesData } from "../../common/utils/getMoviesData";
import { fetchMovies, setMovies } from "./moviesSlice";

function* fetchMoviesWorker() {
    console.log("fetchMoviesWorker");
    try {
        const movies = yield call(getMoviesData);
        yield put(setMovies(movies));
    } catch (error) {
        console.error(error);
        // yield put(setError(error));
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchMovies.type, fetchMoviesWorker);
}