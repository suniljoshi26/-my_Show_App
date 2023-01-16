import { createSelector } from "reselect";
import { State } from "../store";

export const castStateSelector = (state: State) => state.cast;

export const castMapSelector = createSelector(
  castStateSelector,
  (state) => state.cast
);
export const castSelector = createSelector(castMapSelector, (state) =>
  Object.keys(state).map((castId) => state[+castId])
);
