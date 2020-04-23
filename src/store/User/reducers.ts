import {
  LoginFormActionType,
  SHOW_LOGIN_FORM,
  SHOW_LOGIN_ERROR,
  LoginForm,
  LoginState,
} from "./types";

let initialState: LoginState = {
  LoginForm:[
        {
          username: "Niloufar",
          password: "ABC",
        },
        {
          username: "Orange",
          password: "GFH",
        },
      ],
    }
    

  isUserLoggedin: false,
};



export function loginReducer( state = initialState, action: LoginFormActionType) {
  switch (action.type) {
  case SHOW_LOGIN_FORM:
  return {
    LoginState true };
  };
  case SHOW_LOGIN_ERROR{
     
  }
  default:
      return state;
  }
}
