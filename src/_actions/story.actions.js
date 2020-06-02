import { storyConstants } from "../_constants";
import { alertActions } from "./";
import { history, handleResponse } from "../_helpers";
import { storyService } from "../_services/story.service";

export const storyActions = {};

function getPagedStories(currentPage) {
  return (dispatch) => {
    dispatch(request(currentPage));
  };

  storyService.getPagedStories(currentPage).then(
    (stories) => {
      dispatch(success(currentPage));
    },
    (error) => {
      handleResponse(error);
      dispatch(failure(error.response.data.message));
      dispatch(alertActions.error(error.response.data.message));
    }
  );

  function request(currentPage) {
    return { type: storyConstants.GETPAGED_STORIES_REQUEST, currentPage };
  }

  function success(currentPage) {
    return { type: storyConstants.GETPAGED_STORIES_SUCCESS, currentPage };
  }

  function failure(error) {
    return { type: storyConstants.GETPAGED_STORIES_FAILURE, error };
  }
}
