import { authHeader } from "../_helpers";
import axios from "axios";

export const commentService = {
  getAllComments,
  getCommentById,
  createComment,
  getCommentsByCreatedBy,
  deleteComment,
  getCommentsByUserId,
  getCommentsByStoryId,
  updateComment,
};

function getAllComments(page) {
  return axios.get(
    `https://the-writer-mind.herokuapp.com/api/comments?page=${page}`
  );
}

function getCommentById(id) {
  return axios.get(`https://the-writer-mind.herokuapp.com/api/comments/${id}`);
}

function createComment(commentRequest) {
  return axios.post(
    `https://the-writer-mind.herokuapp.com/api/comments`,
    commentRequest,
    {
      headers: authHeader(),
    }
  );
}

function getCommentsByCreatedBy(username, page) {
  return axios.get(
    `https://the-writer-mind.herokuapp.com/api/comments/username/${username}?page=${page}`
  );
}

function deleteComment(commentId) {
  return axios.delete(
    `https://the-writer-mind.herokuapp.com/api/comments/${commentId}`,
    {
      headers: authHeader(),
    }
  );
}

function getCommentsByUserId(userId, page) {
  return axios.get(
    `https://the-writer-mind.herokuapp.com/api/comments/user/${userId}?page=${page}`
  );
}

function getCommentsByStoryId(storyId, page) {
  return axios.get(
    `https://the-writer-mind.herokuapp.com/api/comments/story/${storyId}?page=${page}`
  );
}

function updateComment(commentRequest, commentId) {
  return axios.put(
    `https://the-writer-mind.herokuapp.com/api/comments/${commentId}`,
    commentRequest,
    {
      headers: authHeader(),
    }
  );
}
