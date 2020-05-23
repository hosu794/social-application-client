import { authConstants } from "../_constants";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case authConstants.LOGIN_FAILURE:
    case authConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
