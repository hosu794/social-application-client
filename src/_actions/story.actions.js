import { storyConstants } from "../_constants";
import { alertActions } from "./";
import { history, handleResponse } from "../_helpers";
import { storyService } from "../_services/story.service";

export const storyActions = {
  getPagedStories,
  changePage,
  getStoryById,
  castLove,
  unCastLove,
};

function getPagedStories(page) {
  return (dispatch) => {
    dispatch(request(page));

    storyService.getPagedStories(page).then(
      (stories) => {
        console.log(stories.data);
        dispatch(success(stories.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };
  function request(page) {
    return { type: storyConstants.GETPAGED_STORIES_REQUEST, page };
  }

  function success(stories) {
    return { type: storyConstants.GETPAGED_STORIES_SUCCESS, stories };
  }

  function failure(error) {
    return { type: storyConstants.GETPAGED_STORIES_FAILURE, error };
  }
}

function changePage(page) {
  return { type: storyConstants.CHANGE_PAGE, page };
}

function getStoryById(id) {
  return (dispatch) => {
    dispatch(request(id));

    storyService.getStoryById(id).then(
      (story) => {
        console.log(story.data);
        dispatch(success(story.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(id) {
    return { type: storyConstants.GETPAGED_STORIES_REQUEST, id };
  }

  function success(story) {
    return { type: storyConstants.GET_STORY_BY_ID_SUCCESS, story };
  }

  function failure(error) {
    return { type: storyConstants.GET_STORY_BY_ID_FAILURE, error };
  }
}

function castLove(storyIdentityRequest) {
  return (dispatch) => {
    dispatch(request(storyIdentityRequest));

    storyService.castLove(storyIdentityRequest).then(
      (story) => {
        console.log(story.data);
        dispatch(success(story));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(storyId) {
    return { type: storyConstants.CAST_LOVE_REQUEST, storyId };
  }

  function success(story) {
    return { type: storyConstants.CAST_LOVE_SUCCESS, story };
  }

  function failure(error) {
    return { type: storyConstants.CAST_LOVE_FAILURE, error };
  }
}

function unCastLove(storyIdentityRequest) {
  return (dispatch) => {
    dispatch(request(storyIdentityRequest));

    storyService.unCastLove(storyIdentityRequest).then(
      (story) => {
        console.log(story.data);
        dispatch(success(story));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(storyId) {
    return { type: storyConstants.UNCAST_LOVE_REQUEST, storyId };
  }

  function success(story) {
    return { type: storyConstants.UNCAST_LOVE_SUCCESS, story };
  }

  function failure(error) {
    return { type: storyConstants.UNCAST_LOVE_FAILURE, error };
  }
}
