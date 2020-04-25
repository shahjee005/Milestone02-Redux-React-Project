import { User, ADD_USER_TO_SYSTEM } from "./types";

export function addUserToSystem(thisWasCopied: User) {
  return {
    type: ADD_USER_TO_SYSTEM,
    user: thisWasCopied,
  };
}
