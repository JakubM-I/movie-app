import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { timeDelay } from "./timeDelay";

export function* detailsSaga({ getDetails, actions }) {
  function* fetchDetailsHandler({ payload: id }) {
    yield delay(timeDelay);

    try {
      const [details] = yield all([
        call(getDetails, { id }),
      ]);

      yield put(actions.fetchSuccess({ details }));

    } catch (error) {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}