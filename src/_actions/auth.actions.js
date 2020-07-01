import { authConstants, userConstants } from "../_constants";
import { authService, userService } from "../_services";
import { alertActions } from "./";
import { history, handleResponse } from "../_helpers";

export const authActions = {
  logout,
  register,
  login,
  updateUsername,
  updatePassword,
};

function login(usernameOrEmail, password) {
  return (dispatch) => {
    dispatch(request({ usernameOrEmail, password }));

    authService.login(usernameOrEmail, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
        window.location.reload(true);
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
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
  history.push("/");
  return {
    type: authConstants.LOGOUT,
  };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    authService.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        window.location.reload(true);
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

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

function updateUsername(username) {
  return (dispatch) => {
    dispatch(request(username));

    authService.updateUsername(username).then(
      (response) => {
        dispatch(success(response.data));
        history.push("/account");
        window.location.reload(true);
        dispatch(alertActions.success("Username updated successfully"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(username) {
    return { type: authConstants.UPDATE_USERNAME_REQUEST, username };
  }

  function success(response) {
    return { type: authConstants.UPDATE_USERNAME_SUCCESS, response };
  }

  function failure(error) {
    return { type: authConstants.UPDATE_USERNAME_FAILURE, error };
  }
}

function updatePassword(password) {
  return (dispatch) => {
    dispatch(request(password));

    history.push("/account");
    window.location.reload(true);
    dispatch(alertActions.success("Password updated successfully"));
  };

  function request(username) {
    return { type: authConstants.UPDATE_PASSWORD_REQUEST, password };
  }

  function success(response) {
    return { type: authConstants.UPDATE_PASSWORD_SUCCESS, response };
  }

  function failure(error) {
    return { type: authConstants.UPDATE_PASSWORD_FAILURE, error };
  }
}
