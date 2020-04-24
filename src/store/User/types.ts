export interface User {
  username: string;
  password: string;
}

export interface LoginInfoState {
  users: User[];
}

export const REMOVE_USER_FROM_LOGININFO = "EMOVE_USER_FROM_LOGININFO";
export const ADD_USER_TO_LOGININFO = "ADD_USER_TO_LOGININFO";

interface RemoveUserFromLoginInfo {
  type: typeof REMOVE_USER_FROM_LOGININFO;
  payload: string;
}

interface AddUserFromLoginInfo {
  type: typeof ADD_USER_TO_LOGININFO;
  payload: User;
}

export type LoginInfoActionTypes =
  | RemoveUserFromLoginInfo
  | AddUserFromLoginInfo;
