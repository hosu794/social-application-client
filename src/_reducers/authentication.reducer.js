import { authConstants } from "../_constants";

let user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        loading: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        loading: false,
      };
    case authConstants.LOGIN_FAILURE:
    case authConstants.LOGOUT:
      return {
        loading: false,
        loggedIn: false,
      };
    default:
      return state;
  }
}
