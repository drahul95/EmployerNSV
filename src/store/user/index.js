import {  SET_USER } from "./type";

const initialState = {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
