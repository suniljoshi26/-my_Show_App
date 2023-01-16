import produce from "immer";
import { normalize, schema } from "normalizr";
import { AnyAction } from "redux";
import { CAST_LOADING_ACTIN } from "../Action/CastAction";
import { Cast } from "../madels/ShowModels";

export type State = { cast: { [personId: number]: Cast } };
export const initalState: State = { cast: {} };
function CastReducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case CAST_LOADING_ACTIN:
      return produce(state, (draft) => {
        const cast = action.payload as Cast[];
        const castArr = new schema.Entity("cast");
        const normalizeCast = normalize(cast, [castArr]);
        draft.cast = normalizeCast.entities.cast! || {};
      });
    default:
      return state;
  }
}
export default CastReducer;
