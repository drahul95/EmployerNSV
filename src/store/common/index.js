import { SET_TOKEN } from "./type";

const initialState = {
  token: undefined,
  deviceid: "0cc9ad47da7866ec",
};

export const common = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
