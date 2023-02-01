import { Action } from "../Action";
import { call, debounce, put } from "@redux-saga/core/effects";
import { fatchCast, fatchDetail, fatchShow2 } from "../api";
import { SHOW_LOAD_ACTION, SHOW_QUERY_ACTION } from "../Action/ShowAction";

import createSagaMiddleware from "@redux-saga/core";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { castLoadingAction, CAST_LOAD_ACTION } from "../Action/CastAction";
import {
  showQueryChangeAction,
  showDetailAction,
  showLoadingAction,
} from "../slices/ShowSlices";

export const sagaMiddleware = createSagaMiddleware();
export function* getShow(action: Action): Generator<any, any, any> {
  console.log("getShow");
  if (!action.payload) {
    return;
  }
  const showAndCast = yield call(fatchShow2, action.payload);
  console.log("showAndCast", showAndCast);
  const show = showAndCast.map((item: any) => item.show);
  console.log("show", show);

  yield put(showLoadingAction(show));
}
export function* getShowDetail(action: Action): Generator<any, any, any> {
  const show = yield call(fatchDetail, action.payload);
  yield put(showDetailAction(show));
}
export function* getCast(action: Action): Generator<any, any, any> {
  const cast = yield call(fatchCast, action.payload);
  yield put(castLoadingAction(cast));
}
export function* rootSaga() {
  console.log("rootSaga");
  yield debounce(400, showQueryChangeAction, getShow);
  yield takeEvery(SHOW_LOAD_ACTION, getShowDetail);
  yield takeEvery(CAST_LOAD_ACTION, getCast);
}
