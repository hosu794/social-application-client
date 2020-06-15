import { authHeader } from "../_helpers";

import axios from "axios";

export const topicService = { loadTopics };

function loadTopics() {
  return axios.get("https://the-writers-mind.herokuapp.com/api/topics", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
