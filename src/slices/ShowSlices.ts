import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import { Show } from "../madels/ShowModels";
const showsAdapter = createEntityAdapter<Show>();
// type State = {
//   // shows: { [showId: number]: Show };
//   query_show: { [query: string]: number[] };
//   query: string;
//   show_loading: { [showId: number]: boolean };
//   loading: boolean;
// };

const initialState = showsAdapter.getInitialState({
  // shows: {},
  query_show: {} as { [query: string]: number[] },
  query: "",
  show_loading: {} as { [query: string]: boolean },
  loading: false,
});
export type State = typeof initialState;
export const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    showLoading,
    showQueryChange,
    showDetailLoaded: showsAdapter.addOne,
  },
});

function showLoading(state: State, action: PayloadAction<Show[]>) {
  const shows = action.payload as Show[];
  // const showSchema = new schema.Entity("shows");
  console.log("shows", shows);

  if (!shows || shows.length === 0) {
    return;
  }
  state.loading = false;

  // const normalizrData = normalize(shows, [showSchema]);
  state.query_show[state.query] = shows.map((s) => s.id);
  // state.shows = { ...state.shows, ...normalizrData.entities.shows };
  showsAdapter.addMany(state, action);
}

function showQueryChange(state: State, action: PayloadAction<string>) {
  state.query = action.payload;
  state.loading = true;
}
const { actions, reducer: showReducer } = showSlice;
export const {
  showLoading: showLoadingAction,
  showQueryChange: showQueryChangeAction,
  showDetailLoaded: showDetailAction,
} = actions;
export default showReducer;
