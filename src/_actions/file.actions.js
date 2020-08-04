import { fileService } from "../_services";
import { history, handleResponse } from "../_helpers";

import { fileConstants } from "../_constants";

import { alertActions } from "./";

export const fileActions = { uploadAvatar };

function uploadAvatar(file, service = fileService.uploadAvatar) {
  return (dispatch) => {
    return service(file).then(
      (response) => {
        dispatch(success(response.data));
        history.push("/account/changecredentials");
        window.location.reload(true);
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(file) {
    return { type: fileConstants.AVATAR_UPLOAD_REQUEST, file };
  }

  function success(response) {
    return { type: fileConstants.AVATAR_UPLOAD_SUCCESS, response };
  }

  function failure(error) {
    return { type: fileConstants.AVATAR_UPLOAD_FAILURE, error };
  }
}
