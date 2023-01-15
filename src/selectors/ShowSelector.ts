import { createSelector } from "reselect";
import { State } from "../store";

export const showStateSelector = (state: State) => state.shows;

export const showQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);
export const showMapSelector = createSelector(
  showStateSelector,
  (showState) => showState.shows
);

const queryMapSelector = createSelector(
  showStateSelector,
  (state) => state.query_show
);
export const showSelectors = createSelector(
  showMapSelector,
  showQuerySelector,
  queryMapSelector,
  (showsMap, query, queryMap) =>
    queryMap[query] ? queryMap[query].map((showId) => showsMap[showId]) : []
);
// Object.keys(showMap).map((showId) => showMap[+showId])
