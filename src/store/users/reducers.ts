import { UserState, UserActionTypes, ADD_USER_TO_SYSTEM } from "./types";
const initialState: UserState = {
  users: [
    {
      id: 1,
      username: "Niloufar",
      password: "ABC",
    },
    {
      id: 2,
      username: "Orange",
      password: "GFH",
    },
  ],
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case ADD_USER_TO_SYSTEM:
      return {
        ...state,
      };
    default:
      return state;
  }
}
