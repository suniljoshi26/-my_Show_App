import produce from "immer";
import { schema, normalize } from "normalizr";
import { AnyAction } from "redux";
import {
  SHOW_DETAIL_LODADED,
  SHOW_LOADING_ACTION,
  SHOW_QUERY_ACTION,
} from "../Action/ShowAction";
import { Show } from "../madels/ShowModels";
import ShowsListPage from "../Pages/ShowsList.Page";

export type State = {
  shows: { [showId: number]: Show };
  query_show: { [query: string]: number[] };
  query: string;
};
export const initalState: State = {
  shows: {},
  query_show: {},
  query: "",
};
function showReducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case SHOW_LOADING_ACTION:
      console.log("jg");
      return produce(state, (draft) => {
        const shows = action.payload;
        const showSchema = new schema.Entity("shows");

        const normalizrData = normalize(shows, [showSchema]);
        draft.query_show[draft.query] = normalizrData.result;
        draft.shows = { ...draft.shows, ...normalizrData.entities.shows };
      });
    case SHOW_QUERY_ACTION:
      return produce(state, (draft) => {
        draft.query = action.payload;
      });
    case SHOW_DETAIL_LODADED:
      return produce(state, (draft) => {
        const show = action.payload as Show;
        draft.shows[show.id] = show;
      });

    default:
      return state;
  }
}
export default showReducer;
