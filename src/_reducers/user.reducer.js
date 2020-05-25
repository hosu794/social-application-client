import { userConstants, authConstants } from "../_constants";

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_CURRENT_USER_REQUEST:
      return {
        loadingUser: true,
      };
    case userConstants.GET_CURRENT_USER_SUCCESS:
      return {
        loadedUser: true,
        user: action.user,
      };
    case userConstants.GET_CURRENT_USER_FAILURE:
      return {};
    default:
      return state;
  }
}
