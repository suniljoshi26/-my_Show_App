import { ActionCreater } from ".";
import { Show } from "../madels/ShowModels";

export const SHOW_LOADING_ACTION = " SHOW_LOADING_ACTION";
export const showLoadingAction: ActionCreater = (shows: Show[]) => ({
  type: SHOW_LOADING_ACTION,
  payload: shows,
});

export const SHOW_QUERY_ACTION = " SHOW_QUERY_ACTION";
export const queryAction: ActionCreater<string> = (query: string) => ({
  type: SHOW_QUERY_ACTION,
  payload: query,
});

export const SHOW_DETAIL_LODADED = " SHOW_DETAIL_LODADED";
export const showDetailAction: ActionCreater<Show> = (show: Show) => ({
  type: SHOW_DETAIL_LODADED,
  payload: show,
});

export const SHOW_LOAD_ACTION = " SHOW_LOAD_ACTION";
export const showLoadAction: ActionCreater<number> = (showId: number) => ({
  type: SHOW_LOAD_ACTION,
  payload: showId,
});
