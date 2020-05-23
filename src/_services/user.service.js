import { authHeader, handleResponse } from "../_helpers";

import axios from "axios";

export const userService = { loadUser };

function loadUser() {
  return axios
    .get("https://the-writers-mind.herokuapp.com/api/user/me", {}, authHeader())
    .then(handleResponse);
}
