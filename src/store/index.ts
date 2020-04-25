import { combineReducers, createStore } from "redux";
import { userReducers } from "./user/reducers";
// import { loginReducer } from "./login/reducers";

const rootReducer = combineReducers({
  user: userReducers,
  // login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
