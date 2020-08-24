import { authHeader } from "../_helpers";
import axios from "axios";

export const storyService = {
  getPagedStories,
  getStoryById,
  castLove,
  unCastLove,
  create,
  deleteStory,
  getStoriesByUsername,
  updateStory,
};

function getPagedStories(page) {
  return axios.get(
    `https://the-writer-mind.herokuapp.com/api/stories?page=${page}`
  );
}

function getStoryById(id) {
  return axios.get(`https://the-writer-mind.herokuapp.com/api/stories/${id}`);
}

function castLove(storyIdentityRequest) {
  return axios.post(
    `https://the-writer-mind.herokuapp.com/api/stories/loves`,
    storyIdentityRequest,
    {
      headers: authHeader(),
    }
  );
}

function unCastLove(storyIdentityRequest) {
  return axios.delete(
    `https://the-writer-mind.herokuapp.com/api/stories/loves/${storyIdentityRequest.storyId}`,
    {
      headers: authHeader(),
    }
  );
}

function create(request) {
  const body = JSON.stringify({
    title: request.title,
    description: request.description,
    body: request.body,
    premiumContent: request.premiumContent,
  });

  return axios.post(
    `https://the-writer-mind.herokuapp.com/api/stories/topics/${request.topic}`,
    body,
    {
      headers: authHeader(),
    }
  );
}

function updateStory(id, request) {
  const body = JSON.stringify({
    title: request.title,
    description: request.description,
    body: request.body,
  });

  return axios.put(
    `https://the-writer-mind.herokuapp.com/api/stories/${id}`,
    body,
    {
      headers: authHeader(),
    }
  );
}

function deleteStory(id) {
  return axios.delete(
    `https://the-writer-mind.herokuapp.com/api/stories/${id}`,
    {
      headers: authHeader(),
    }
  );
}

function getStoriesByUsername(username, page) {
  return axios.get(
    `https://the-writer-mind.herokuapp.com/api/stories/username/${username}?page=${page}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
