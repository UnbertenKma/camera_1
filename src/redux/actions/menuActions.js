import { ActionTypes } from "../constants/action-types";
export const setMenus = (menus) => {
  return {
    type: ActionTypes.SET_MENUS,
    payload: menus,
  };
};

export const selectedMenu = ( menu) => {
    return {
        type: ActionTypes.SELECTED_MENU,
        payload: menu,
    }
}
