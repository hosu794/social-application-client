import { fileConstants } from "../_constants";
import { fileService } from "../_services";
import { history } from "../_helpers";

export const fileActions = { uploadAvatar };

function uploadAvatar(file) {
  return (dispatch) => {
    fileService
      .uploadAvatar(file)

      .then(
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
    return { type: filesConstants.AVATAR_UPLOAD_REQUEST, file };
  }

  function success(response) {
    return { type: fileConstants.AVATAR_UPLOAD_SUCCESS, response };
  }

  function failure(error) {
    return { type: fileConstants.AVATAR_UPLOAD_FAILURE, error };
  }
}
