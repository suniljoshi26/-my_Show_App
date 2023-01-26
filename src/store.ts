import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { SHOW_QUERY_ACTION } from "./Action/ShowAction";
import CastReducer from "./reducer/CastReducer";
import showReducer from "./reducer/ShowReducer";
import { getShow, rootSaga, sagaMiddleware } from "./Saga/Show";

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );
const store = configureStore({
  reducer: { shows: showReducer, cast: CastReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
