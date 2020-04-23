export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginState {
  isUserLoggedin: boolean;
}

export const SHOW_LOGIN_FORM = "SHOW_LOGIN_FORM";
export const SHOW_LOGIN_ERROR = "SHOW_LOGIN_ERROR";

interface ShowLoginForm {
  type: typeof SHOW_LOGIN_FORM;
}

interface ShowLoginError {
  type: typeof SHOW_LOGIN_ERROR;
}

export type LoginFormActionType = ShowLoginForm | ShowLoginError;
