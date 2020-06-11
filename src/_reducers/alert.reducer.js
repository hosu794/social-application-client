import { alertConstants } from "../_constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: "alert-success",
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: "alert-danger",
        message: action.message,
      };
    case alertConstants.CLEAR:
      return {};
    case alertConstants.SET: {
      return {
        type: action.alert.type,
        message: action.alert.message,
      };
    }
    default:
      return state;
  }
}
