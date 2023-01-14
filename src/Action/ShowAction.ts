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
