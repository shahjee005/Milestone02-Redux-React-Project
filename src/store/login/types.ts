export interface LoginState {
  loggedInUserId: number;
}

export const LOG_IN_USER_FROM_SYSTEM = "LOG_IN_USER_FROM_SYSTEM";
export const LOG_OUT_USER_FROM_SYSTEM = "LOG_OUT_USER_FROM_SYSTEM";
export const LOG_USER_FROM_SYSTEM = "LOG_USER_FROM_SYSTEM";
export const LOG_USER_ACTIVITY_FROM_SYSTEM = "LOG_USER_ACTIVITY_FROM_SYSTEM";
export const LOG_SUSPICIOUS_ACTIVITY_FROM_SYSTEM = "LOG_USER2_FROM_SYSTEM";
export const LOG_IN_ANOTHER_ODD_USELESS_FN_FROM_SYSTEM =
  "LOG_IN_USER1_FROM_SYSTEM";

interface LogInUserFromSystem {
  type: typeof LOG_IN_USER_FROM_SYSTEM;
  id: number;
}

interface LogOutUserFromSystem {
  type: typeof LOG_OUT_USER_FROM_SYSTEM;
}

interface LogUserFromSystem {
  type: typeof LOG_USER_FROM_SYSTEM;
}

interface LogSuspiciousActivityFromSystem {
  type: typeof LOG_SUSPICIOUS_ACTIVITY_FROM_SYSTEM;
}

interface LogInterestingUserFromSystem {
  type: typeof LOG_IN_ANOTHER_ODD_USELESS_FN_FROM_SYSTEM;
}

export type LoginActionTypes =
  | LogInterestingUserFromSystem
  | LogOutUserFromSystem
  | LogSuspiciousActivityFromSystem
  | LogInUserFromSystem
  | LogUserFromSystem;
