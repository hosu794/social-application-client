import { authHeader } from "../_helpers";

import axios from "axios";
import { user } from "../_reducers/user.reducer";

export const userService = {
  loadUser,
  checkEmailAvaibility,
  checkUsernameAvailability,
  getUserProfile,
  getStoriesCreatedBy,
  getStoriesLovedBy,
  checkLoveAvailability,
  getUserStatistics,
};

function loadUser() {
  return axios.get("https://the-writers-mind.herokuapp.com/api/user/me", {
    headers: authHeader(),
  });
}

function checkUsernameAvailability(username) {
  const body = JSON.stringify({ username });

  console.log(body);

  return axios.post(
    "https://the-writers-mind.herokuapp.com/api/user/checkUsernameAvailability",
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function checkEmailAvaibility(email) {
  const body = JSON.stringify({ email });

  return axios.post(
    "https://the-writers-mind.herokuapp.com/api/user/checkEmailAvailability",
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function getUserProfile(username) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/user/${username}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function getStoriesCreatedBy(username) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/user/${username}/stories`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function getStoriesLovedBy(username) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/user/${username}/loves`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

function checkLoveAvailability(request) {
  const body = JSON.stringify(request);

  return axios.post(
    "https://the-writers-mind.herokuapp.com/api/user/checkLoveAvailability",
    body,
    {
      headers: authHeader(),
    }
  );
}

function getUserStatistics(userId) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/users/${userId}/statistics`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
