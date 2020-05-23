import { authConstants, userConstants } from "../_constants";
import { authService, userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const authActions = { logout, register, login };

function login(usernameOrEmail, password) {
  return (dispatch) => {
    dispatch(request({ usernameOrEmail }));

    authService.login(usernameOrEmail, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();
  return {
    type: authConstants.LOGOUT,
  };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));
  };

  authService.register(user).then(
    (user) => {
      dispatch(success());
      history.push("/login");
      dispatch(alertActions.success("Registration successful"));
    },
    (error) => {
      dispatch(failure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    }
  );

  function request(user) {
    return { type: authConstants.REGISTER_REQUEST, user };
  }

  function success(user) {
    return { type: authConstants.REGISTER_SUCCESS, user };
  }

  function failure(error) {
    return { type: authConstants.REGISTER_FAILURE, error };
  }
}
