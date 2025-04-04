import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesList/moviesSlice";
import moviePageReducer from "./features/moviePage/moviePageSlice";

import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieDetails: moviePageReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;