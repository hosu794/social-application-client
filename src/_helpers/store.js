import { createStore, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";

import rootReducer from "../_reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, loggerMiddleware];
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
