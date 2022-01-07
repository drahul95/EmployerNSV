import { SET_TOKEN } from "./type";

export const setToken = (token: string) => async (dispatch: any) => {
  localStorage.setItem("jietoken", token);
  dispatch({ type: SET_TOKEN, payload: token });
};
