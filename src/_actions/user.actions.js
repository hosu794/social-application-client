import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./alert.actions";
import { handleResponse } from "../_helpers";

export const userActions = { getCurrentUser };

function getCurrentUser() {
  return (dispatch) => {
    dispatch(request());

    userService.loadUser().then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.GET_CURRENT_USER_REQUEST };
  }

  function success(user) {
    return { type: userConstants.GET_CURRENT_USER_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.GET_CURRENT_USER_FAILURE, error };
  }
}
