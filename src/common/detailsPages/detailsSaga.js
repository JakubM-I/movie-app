import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { timeDelay } from "./timeDelay";

export function* detailsSaga({ getDetails, getCredits, actions }) {
  function* fetchDetailsHandler({ payload: id }) {
    yield delay(timeDelay);

    try {
      const [details, { cast, crew }] = yield all([
        call(getDetails, { id }),
        call(getCredits, { id }),
      ]);

      yield put(actions.fetchSuccess({
        ...details,
        cast,
        crew,
      }));

    } catch (error) {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}