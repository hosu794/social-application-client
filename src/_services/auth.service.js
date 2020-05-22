import { apiConfiguration, authHeader, handleResponse } from "../_helpers";
import { findByTestId } from "@testing-library/react";

export const authService = { login, register, logout };

function login(usernameOrEmail, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usernameOrEmail, password }),
  };

  return fetch(`${apiConfiguration.server}/auth/signin`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user.accessToken));

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

  return fetch(`${apiConfiguration.server}/auth/signup`, requestOptions).then(
    handleResponse
  );
}
