import {
  LoginInfoActionTypes,
  ADD_USER_TO_LOGININFO,
  REMOVE_USER_FROM_LOGININFO,
  User,
} from "./types";

export function removeUserFromLoginInfo(
  username: string
): LoginInfoActionTypes {
  return {
    type: REMOVE_USER_FROM_LOGININFO,
    payload: username,
  };
}

export function addUserToLoginInfo(user: User): LoginInfoActionTypes {
  return {
    type: ADD_USER_TO_LOGININFO,
    payload: user,
  };
}
