import { authHeader } from "../_helpers";

import axios from "axios";

export const authService = { login, register, logout };

function login(usernameOrEmail, password) {
  const body = JSON.stringify({ usernameOrEmail, password });

  return axios
    .post("https://the-writers-mind.herokuapp.com/api/auth/signin", body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user.data.accessToken));

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const body = JSON.stringify(user);

  return axios
    .post("https://the-writers-mind.herokuapp.com/api/auth/signup", body)
    .then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
