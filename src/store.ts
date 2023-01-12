import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});

function* rootSaga() {}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools());
export type State = ReturnType<typeof reducer>;

sagaMiddleware.run(rootSaga);

export default store;
