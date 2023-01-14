import { Action } from "../Action";
import { call, debounce, put } from "@redux-saga/core/effects";
import { fatchShow } from "../api";
import { showLoadingAction, SHOW_QUERY_ACTION } from "../Action/ShowAction";

import createSagaMiddleware from "@redux-saga/core";
import { takeLatest } from "redux-saga/effects";

export const sagaMiddleware = createSagaMiddleware();
export function* getShow(action: Action): Generator<any, any, any> {
  console.log("getShow");

  const show = yield call(fatchShow, action.payload);
  yield put(showLoadingAction(show));
}

export function* rootSaga() {
  console.log("rootSaga");
  yield debounce(400, SHOW_QUERY_ACTION, getShow);
}
