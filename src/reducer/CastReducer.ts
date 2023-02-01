import produce from "immer";
import { normalize, schema } from "normalizr";
import { AnyAction } from "redux";
import { CAST_LOADING_ACTIN } from "../Action/CastAction";
import { Cast, Cast1 } from "../madels/ShowModels";
import { SHOW_LOADING_ACTION } from "../Action/ShowAction";
import { collapseClasses } from "@mui/material/Collapse";
export type State = {
  cast: {
    [personId: number]: Cast;
  };
  castShow: { [showd: number]: Cast1 };
};
export const initalState: State = { cast: {}, castShow: {} };
function CastReducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case CAST_LOADING_ACTIN:
      return produce(state, (draft) => {
        const cast = action.payload as Cast[];
        const castArr = new schema.Entity("cast");
        console.log("castArr", castArr);

        const normalizeCast = normalize(cast, [castArr]);
        draft.cast = normalizeCast.entities.cast! || {};
      });
    case SHOW_LOADING_ACTION:
      return produce(state, (draft) => {
        const castsArr = action.payload.map((item: any) => {
          console.log("item.cast", item.cast);

          return item.cast;
        });

        const castEntity = new schema.Entity("cast");
        // console.log("castEntity", castEntity);
        const normalizeCast = normalize(castsArr, [castEntity]);
        // console.log("normalizeCast", normalizeCast);
        // console.log("assaa", normalizeCast.entities);
        draft.castShow = normalizeCast.entities.cast!;
      });
    default:
      return state;
  }
}
export default CastReducer;
