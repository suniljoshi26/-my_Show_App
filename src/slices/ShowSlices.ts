import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import { Show } from "../madels/ShowModels";

type State = {
  shows: { [showId: number]: Show };
  query_show: { [query: string]: number[] };
  query: string;
  show_loading: { [showId: number]: boolean };
  loading: boolean;
};

const initialState: State = {
  shows: {},
  query_show: {},
  query: "",
  loading: false,
  show_loading: {},
};

export const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    showLoading,
    showQueryChange,
  },
});

function showLoading(state: State, action: PayloadAction<Show[]>) {
  const shows = action.payload.map((item: any) => item.show) as Show[];
  const showSchema = new schema.Entity("shows");
  if (!shows || shows.length === 0) {
    return;
  }
  state.loading = false;

  const normalizrData = normalize(shows, [showSchema]);
  state.query_show[state.query] = normalizrData.result;
  state.shows = { ...state.shows, ...normalizrData.entities.shows };
}

function showQueryChange(state: State, action: PayloadAction<string>) {
  state.query = action.payload;
  state.loading = true;
}
const { actions, reducer: showReducer } = showSlice;
export const {
  showLoading: showLoadingAction,
  showQueryChange: showQueryChangeAction,
} = actions;
export default showReducer;
