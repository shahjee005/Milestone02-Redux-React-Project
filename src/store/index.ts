import { combineReducers, createStore } from "redux";
import { userReducer } from "./user/reducers";
import { loginReducer } from "./login/reducers";

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
