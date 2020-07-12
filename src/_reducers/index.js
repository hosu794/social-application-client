import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration,reducer";
import { alert } from "./alert.reducer";
import { user } from "./user.reducer";
import { stories } from "./story.reducer";
import { topics } from "./topic.reducer";
import { files } from "./file.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  user,
  stories,
  topics,
  files,
});

export default rootReducer;
