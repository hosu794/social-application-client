import axios from "axios";

export const storyService = { getPagedStories };

function getPagedStories(currentPage) {
  return axios.get(
    `https://the-writers-mind.herokuapp.com/api/stories?page=${currentPage}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
