import { SET_USER } from "./type";

export const setUser = (payload: any) => async (dispatch: any) => {
  dispatch({ type: SET_USER, payload });
};
