import axios from "axios";

export const storyService = { getPagedStories, getStoryById };

function getPagedStories(page) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/stories?page=${page}`
  );
}

function getStoryById(id) {
  return axios.get(`https://the-writers-mind.herokuapp.com/api/stories/${id}`);
}
