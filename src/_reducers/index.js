import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration,reducer";
import { alert } from "./alert.reducer";
import { user } from "./user.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  user,
});

export default rootReducer;
