import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { loginReducer } from "./login/reducers";
import { userReducer } from "./users/reducers";

const rootReducer = combineReducers({
  login: loginReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware())
  );

  return store;
}
