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
  show_loading: { [showId: number]: boolean };
  loading: boolean;
};
export const initalState: State = {
  shows: {},
  query_show: {},
  query: "",
  loading: false,
  show_loading: {},
};
function showReducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case SHOW_LOADING_ACTION:
      console.log("jg");
      return produce(state, (draft) => {
        const shows = action.payload.map((item: any) => item.show) as Show;
        const showSchema = new schema.Entity("shows");
        draft.loading = false;

        const normalizrData = normalize(shows, [showSchema]);
        draft.query_show[draft.query] = normalizrData.result;
        draft.shows = { ...draft.shows, ...normalizrData.entities.shows };

        // const shows = action.payload as Show[];
        // console.log("show", shows);
        // const data = shows.reduce((pre: any, crt: any) => {
        //   return { ...pre, [crt.show.id]: crt };
        // }, {});
        // draft.shows = data;
      });
    // case SHOW_QUERY_ACTION:
    //   return produce(state, (draft) => {
    //     draft.query = action.payload;
    //     draft.loading = true;
    //   });
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
