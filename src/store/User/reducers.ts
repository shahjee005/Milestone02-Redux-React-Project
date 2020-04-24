import {
  LoginInfoActionTypes,
  REMOVE_USER_FROM_LOGININFO,
  ADD_USER_TO_LOGININFO,
  LoginInfoState,
} from "./types";

const initialState: LoginInfoState = {
  users: [
    {
      username: "Niloufar",
      password: "ABC",
    },
    {
      username: "Orange",
      password: "GFH",
    },
  ],
};

export function loginInfoReducer(
  state = initialState,
  action: LoginInfoActionTypes
) {
  switch (action.type) {
    case REMOVE_USER_FROM_LOGININFO:
      return {
        ...state,
        users: state.users.filter((user) => user.username !== action.payload),
      };
    case ADD_USER_TO_LOGININFO:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}
