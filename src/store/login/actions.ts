import {
  LoginActionTypes,
  LOG_OUT_USER_FROM_SYSTEM,
  LOG_IN_USER_FROM_SYSTEM,
} from "./types";

export function logOutUserFromSystem(): LoginActionTypes {
  return {
    type: LOG_OUT_USER_FROM_SYSTEM,
  };
}

export function logInUserFromSystem(thisWasCopied: number): LoginActionTypes {
  return {
    type: LOG_IN_USER_FROM_SYSTEM,
    id: thisWasCopied,
  };
}
