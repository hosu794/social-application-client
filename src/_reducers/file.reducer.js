import { fileConstants } from "../_constants";
import { defaultsDeep } from "lodash";

export function files(state = {}, action) {
  switch (action.type) {
    case fileConstants.AVATAR_UPLOAD_REQUEST:
      return {
        uploading: true,
      };
    case fileConstants.AVATAR_UPLOAD_SUCCESS:
      return {
        uploading: false,
        uploaded: true,
      };
    case fileConstants.AVATAR_UPLOAD_FAILURE:
      return {
        uploading: false,
        uploaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}
