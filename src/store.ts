import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { SHOW_QUERY_ACTION } from "./Action/ShowAction";
import CastReducer from "./reducer/CastReducer";
import showReducer from "./reducer/ShowReducer";
import { getShow, rootSaga, sagaMiddleware } from "./Saga/Show";

const reducer = combineReducers({
  shows: showReducer,
  cast: CastReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof reducer>;

export default store;
