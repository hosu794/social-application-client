import { authHeader } from "../_helpers";

import axios from "axios";

export const authService = {
  login,
  register,
  logout,
  updateUsername,
  updatePassword,
};

function login(usernameOrEmail, password) {
  const body = JSON.stringify({ usernameOrEmail, password });

  return axios
    .post("https://the-writer-mind.herokuapp.com/api/auth/signin", body, {
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
  const body = JSON.stringify(user);

  return axios.post(
    "https://the-writer-mind.herokuapp.com/api/auth/signup",
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function updateUsername(username) {
  const body = JSON.stringify({ username });

  return axios.put(
    "https://the-writer-mind.herokuapp.com/api/auth/update/username",
    body,
    {
      headers: authHeader(),
    }
  );
}

function updatePassword(password) {
  const body = JSON.stringify({ password });

  return axios.put(
    "https://the-writer-mind.herokuapp.com/api/auth/update/password",
    body,
    {
      headers: authHeader(),
    }
  );
}
