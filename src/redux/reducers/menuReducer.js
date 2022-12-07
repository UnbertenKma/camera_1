import { ActionTypes } from "../constants/action-types";

const initialState = {
  menus: [],
};

export const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MENUS:
      return { ...state, menus: payload};
    default:
      return state;
  }
};
