import { commentConstants, authConstants } from "../_constants";
import { commentService } from "../_services";
import { alertActions } from "./";
import { history, handleResponse } from "../_helpers";
import { user } from "../_reducers/user.reducer";
import Axios from "axios";

export const commentActions = {
  getAllComments,
  getCommentById,
  createComment,
  getCommentsByCreatedBy,
  deleteComment,
  getCommentsByUserId,
  getCommentsByStoryId,
  updateComment,
};

function getAllComments(page, service = commentService.getAllComments) {
  return (dispatch) => {
    dispatch(request(page));

    return service(page).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(page) {
    return { type: commentConstants.GET_ALL_COMMENTS_REQUEST, page };
  }

  function success(response) {
    return { type: commentConstants.GET_ALL_COMMENTS_SUCCESS, response };
  }

  function failure(error) {
    return { type: commentConstants.GET_ALL_COMMENTS_FAILURE, error };
  }
}

function getCommentById(id, service = commentService.getCommentById) {
  return (dispatch) => {
    dispatch(request(id));

    return service(id).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(id) {
    return { type: commentConstants.GET_COMMENT_BY_ID_REQUEST, id };
  }

  function success(response) {
    return { type: commentConstants.GET_COMMENT_BY_ID_SUCCESS, response };
  }

  function failure(error) {
    return { type: commentConstants.GET_COMMENT_BY_ID_FAILURE, error };
  }
}

function createComment(commentRequest, service = commentService.createComment) {
  return (dispatch) => {
    dispatch(request(commentRequest));

    return service(commentRequest).then(
      (response) => {
        dispatch(success(response.data));
        window.location.reload(true);
        dispatch(alertActions.success("Comment created successfully"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(comment) {
    return { type: commentConstants.CREATE_COMMENT_REQUEST, comment };
  }

  function success(response) {
    return { type: commentConstants.CREATE_COMMENT_SUCCESS, response };
  }

  function failure(error) {
    return { type: commentConstants.CREATE_COMMENT_FAILURE, error };
  }
}

function getCommentsByCreatedBy(
  username,
  service = commentService.getCommentsByCreatedBy
) {
  return (dispatch) => {
    dispatch(request(username));

    return service(username).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(username) {
    return {
      type: commentConstants.GET_COMMENTS_BY_CREATED_BY_REQUEST,
      username,
    };

    function success(response) {
      return {
        type: commentConstants.GET_COMMENTS_BY_CREATED_BY_SUCCESS,
        response,
      };
    }

    function failure(error) {
      return {
        type: commentConstants.GET_COMMENTS_BY_CREATED_BY_FAILURE,
        error,
      };
    }
  }
}

function deleteComment(commentId, service = commentService.deleteComment) {
  return (dispatch) => {
    dispatch(request(commentId));

    return service(commentId).then(
      (response) => {
        dispatch(success(response.data));
        dispatch(alertActions.success("Comment deleted successfully"));
        window.location.reload(true);
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(commentId) {
    return {
      type: commentConstants.DELETE_COMMENT_REQUEST,
      commentId,
    };
  }

  function success(response) {
    return { type: commentConstants.DELETE_COMMENT_SUCCESS, response };
  }

  function failure(error) {
    return { type: commentConstants.DELETE_COMMENT_FAILURE, error };
  }
}

function getCommentsByUserId(
  userId,
  service = commentService.getCommentsByUserId
) {
  return (dispatch) => {
    dispatch(request(userId));

    return service(userId).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(userId) {
    return { type: commentConstants.GET_COMMENTS_BY_USER_ID_REQUEST, userId };
  }

  function success(response) {
    return { type: commentConstants.GET_COMMENTS_BY_USER_ID_SUCCESS, response };
  }

  function failure(error) {
    return { type: commentConstants.GET_COMMENTS_BY_STORY_ID_FAILURE, error };
  }
}

function getCommentsByStoryId(
  storyId,
  service = commentService.getCommentsByStoryId
) {
  return (dispatch) => {
    dispatch(request(storyId));

    return service(storyId).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(storyId) {
    return { type: commentConstants.GET_COMMENTS_BY_STORY_ID_REQUEST, storyId };
  }

  function success(response) {
    return {
      type: commentConstants.GET_COMMENTS_BY_STORY_ID_SUCCESS,
      response,
    };
  }

  function failure(error) {
    return { type: commentConstants.GET_COMMENTS_BY_STORY_ID_FAILURE, error };
  }
}

function updateComment(
  commentRequest,
  commentId,
  service = commentService.updateComment
) {
  return (dispatch) => {
    dispatch(request(commentRequest, commentId));

    return service(commentRequest, commentId).then(
      (response) => {
        dispatch(success(response.data));
        dispatch(alertActions.success("Comment updated successfully"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(commentRequest, commentId) {
    return {
      type: commentConstants.UPDATE_COMMENT_REQUEST,
      commentRequest,
      commentId,
    };
  }

  function success(response) {
    return { type: commentConstants.UPDATE_COMMENT_SUCCESS, response };
  }

  function failure(error) {
    return { type: commentConstants.UPDATE_COMMENT_FAILURE, error };
  }
}
