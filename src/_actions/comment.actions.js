import { commentConstants, authConstants } from "../_constants";
import { commentService } from "../_services";
import { alertActions } from "./";
import { history, handleResponse } from "../_helpers";

export const commentActions = { getAllComments };

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
) {}
