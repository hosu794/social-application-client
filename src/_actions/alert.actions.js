import { alertConstants } from "../_constants";

export const alertActions = {
  success,
  error,
  clear,
  set,
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

function set(alert) {
  return { type: alertConstants.SET, alert };
}
