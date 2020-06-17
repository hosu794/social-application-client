import { authHeader } from "../_helpers";

import axios from "axios";

export const topicService = { loadTopics, create, getTopicByTitle };

function loadTopics() {
  return axios.get("https://the-writers-mind.herokuapp.com/api/topics", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function create(request) {
  const body = JSON.stringify(request);

  return axios.post("https://the-writers-mind.herokuapp.com/api/topics", body, {
    headers: authHeader(),
  });
}

function getTopicByTitle(title) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/topics/title/${title}`,
    {
      headers: authHeader(),
    }
  );
}
