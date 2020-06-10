import { authHeader } from "../_helpers";
import axios from "axios";

export const storyService = {
  getPagedStories,
  getStoryById,
  castLove,
  unCastLove,
};

function getPagedStories(page) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/stories?page=${page}`
  );
}

function getStoryById(id) {
  return axios.get(`https://the-writers-mind.herokuapp.com/api/stories/${id}`);
}

function castLove(storyIdentityRequest) {
  return axios.post(
    `https://the-writers-mind.herokuapp.com/api/stories/loves`,
    storyIdentityRequest,
    {
      headers: authHeader(),
    }
  );
}

function unCastLove(storyIdentityRequest) {
  return axios.delete(
    `https://the-writers-mind.herokuapp.com/api/stories/loves/${storyIdentityRequest.storyId}`,
    {
      headers: authHeader(),
    }
  );
}
