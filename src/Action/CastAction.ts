import { ActionCreater } from ".";
import { Cast } from "../madels/ShowModels";

export const CAST_LOADING_ACTIN = " CAST_LOADING_ACTIN";
export const castLoadingAction: ActionCreater<Cast[]> = (cast: Cast[]) => ({
  type: CAST_LOADING_ACTIN,
  payload: cast,
});

export const CAST_LOAD_ACTION = " CAST_LOAD_ACTION";
export const castloadAction: ActionCreater<number> = (showId: number) => ({
  type: CAST_LOAD_ACTION,
  payload: showId,
});
