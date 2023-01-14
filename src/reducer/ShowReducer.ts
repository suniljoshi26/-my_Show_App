import produce from "immer";
import { schema, normalize } from "normalizr";
import { AnyAction } from "redux";
import { SHOW_LOADING_ACTION, SHOW_QUERY_ACTION } from "../Action/ShowAction";
import { Show } from "../madels/ShowModels";

export type State = {
  shows: { [showId: number]: Show[] };
  query: string;
};
export const initalState: State = {
  shows: {},
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
        draft.shows = normalizrData.entities.shows || {};
      });
    case SHOW_QUERY_ACTION:
      return produce(state, (draft) => {
        draft.query = action.payload;
      });

    default:
      return state;
  }
}
export default showReducer;
