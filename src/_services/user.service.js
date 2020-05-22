import { authHeader, handleResponse, apiConfiguration } from "../_helpers";

export const userService = {};

function loadUser() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${apiConfiguration.server}/user/me`).then(handleResponse);
}
