import { userConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./alert.actions";
import { handleResponse } from "../_helpers";

export const userActions = {
  getCurrentUser,
  checkUsernameAvailability,
  checkEmailAvailability,
  checkLoveAvailability,
  getUserStats,
};

function getCurrentUser(service = userService.loadUser) {
  return (dispatch) => {
    dispatch(request());

    return service().then(
      (user) => {
        dispatch(success(user.data));
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

function checkUsernameAvailability(
  username,
  service = userService.checkUsernameAvailability
) {
  return (dispatch) => {
    dispatch(request(username));

    return service(username).then(
      (response) => {
        console.log(response.data.available);
        dispatch(success(response.data.available));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(username) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_REQUEST, username };
  }

  function success(response) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_SUCCESS, response };
  }

  function failure(error) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_FAILURE, error };
  }
}

function checkEmailAvailability(
  email,
  service = userService.checkEmailAvaibility
) {
  return (dispatch) => {
    return service(email).then(
      (response) => {
        dispatch(success(response.data.available));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(email) {
    return { type: userConstants.CHECK_EMAIL_AVAIBILITY_REQUEST, email };
  }

  function success(response) {
    return { type: userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS, response };
  }
  function failure(error) {
    return { type: userConstants.CHECK_USER_AVAIBILITY_FAILURE, error };
  }
}

function checkLoveAvailability(
  req,
  service = userService.checkLoveAvailability
) {
  return (dispatch) => {
    dispatch(request(req));
    return service(req).then(
      (response) => {
        dispatch(success(response.data.available));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(req) {
    return { type: userConstants.CHECK_LOVE_AVAIBILITY_REQUEST, req };
  }

  function success(response) {
    return { type: userConstants.CHECK_LOVE_AVAIBILITY_SUCCESS, response };
  }

  function failure(error) {
    return { type: userConstants.CHECK_LOVE_AVAIBILITY_FAILURE, error };
  }
}

function getUserStats(userId, service = userService.getUserStatistics) {
  return (dispatch) => {
    dispatch(request(userId));

    return service(userId).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(userId) {
    return { type: userConstants.GET_USER_STATS_REQUEST, userId };
  }

  function success(response) {
    return { type: userConstants.GET_USER_STATS_SUCCESS, response };
  }

  function failure(error) {
    return { type: userConstants.GET_USER_STATS_FAILURE, error };
  }
}
