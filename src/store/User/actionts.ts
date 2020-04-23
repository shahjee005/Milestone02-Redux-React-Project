import { LoginFormActionType, SHOW_LOGIN_FORM } from "./types";

export function addItem(user: User): LoginActionTypes {
  return {
    type: ADD_ITEM_TO_Login,
    payload: user,
  };
}
