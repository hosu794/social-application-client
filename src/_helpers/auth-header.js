import { join } from "lodash";

export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return {
      Authorization: `Bearer ${user}`,
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
}

export function authHeaderUploadFile() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return {
      Authorization: `Bearer ${user}`,
    };
  } else {
    return {};
  }
}
