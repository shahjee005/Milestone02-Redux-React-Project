import {
  LoginState,
  LoginActionTypes,
  LOG_IN_USER_FROM_SYSTEM,
  LOG_OUT_USER_FROM_SYSTEM,
} from "./types";

const initialState: LoginState = {
  loggedInUserId: 0,
};

export function loginReducer(
  state = initialState,
  action: LoginActionTypes
): LoginState {
  switch (action.type) {
    case LOG_IN_USER_FROM_SYSTEM:
      return {
        ...state,
        loggedInUserId: action.id,
      };

    case LOG_OUT_USER_FROM_SYSTEM:
      return {
        ...state,
        loggedInUserId: 0,
      };

    default:
      return state;
  }
}
