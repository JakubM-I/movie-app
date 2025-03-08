import { all, put } from "redux-saga/effects";
import { moviesSaga } from "./features/moviesList/moviesSaga";
import { fetchMovies } from "./features/moviesList/moviesSlice";

export default function* rootSaga() {
    // yield put(fetchMovies());
    yield all([
        moviesSaga(),
    ])
}