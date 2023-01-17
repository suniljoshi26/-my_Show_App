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

// export const showCastSelector = createSelector(showMapSelector, (showState) => {
//   console.log("showMapSelector", showState);

//   const data = Object.keys(showState).map((i) => showState[+i]);
//   console.log("dataSele", data);
//   return data;
// });
export const queryMapSelector = createSelector(
  showStateSelector,
  (state) => state.query_show
);
export const showLoadingSelector = createSelector(
  showStateSelector,
  (state) => state.loading
);
export const showSelectors = createSelector(
  showMapSelector,
  showQuerySelector,
  queryMapSelector,
  (showsMap, query, queryMap) =>
    queryMap[query] ? queryMap[query].map((showId) => showsMap[showId]) : []
);
// Object.keys(showMap).map((showId) => showMap[+showId])
