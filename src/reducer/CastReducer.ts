import { AnyAction } from "redux";

export type State = {};
export const initalState: State = {};
function CastReducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    default:
      return state;
  }
}
export default CastReducer;
