import axios from "axios";

export const storyService = { getPagedStories };

function getPagedStories(page) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/stories?page=${page}`
  );
}
