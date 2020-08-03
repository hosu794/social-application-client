import { storyConstants } from "../_constants";
import { alertActions } from "./";
import { history, handleResponse, authHeader } from "../_helpers";
import { storyService } from "../_services/story.service";
import axios from "axios";
import { func } from "prop-types";
import { user } from "../_reducers/user.reducer";
import { userActions } from "./user.actions";

export const storyActions = {
  getPagedStories,
  changePage,
  getStoryById,
  castLove,
  unCastLove,
  create,
  deleteStory,
  getStoriesByUsername,
};

function getPagedStories(page, service = storyService.getPagedStories) {
  return (dispatch) => {
    dispatch(request(page));

    return service(page).then(
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

function getStoryById(id, service = storyService.getStoryById) {
  return (dispatch) => {
    dispatch(request(id));

    return service(id).then(
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

function castLove(storyIdentityRequest, service = storyService.castLove) {
  return (dispatch) => {
    dispatch(request(storyIdentityRequest));

    return service(storyIdentityRequest).then(
      (story) => {
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

function unCastLove(storyIdentityRequest, service = storyActions.unCastLove) {
  return (dispatch) => {
    dispatch(request(storyIdentityRequest));

    return service(storyIdentityRequest).then(
      (story) => {
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

function create(requestStory, service = storyActions.create) {
  return (dispatch) => {
    dispatch(request(requestStory));

    return service(requestStory).then(
      (story) => {
        dispatch(success(story.data));
        history.push("/dashboard");
        window.location.reload(true);
        dispatch(alertActions.success("Story created successful"));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(requestStory) {
    return { type: storyConstants.CREATE_STORY_REQUEST, requestStory };
  }

  function success() {
    return { type: storyConstants.CREATE_STORY_SUCCESS };
  }

  function failure(error) {
    return { type: storyConstants.CREATE_STORY_FAILURE, error };
  }
}

function deleteStory(id, service = storyActions.deleteStory) {
  return (dispatch) => {
    dispatch(request(id));

    return service(id).then(
      (response) => {
        dispatch(success(id));
        dispatch(alertActions.success("Story deleted successfully"));
        history.push("/stories");
        window.location.reload(true);
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(id) {
    return { type: storyConstants.DELETE_STORY_REQUEST, id };
  }

  function success(index) {
    return { type: storyConstants.DELETE_STORY_SUCCESS, index };
  }

  function failure(error) {
    return { type: storyConstants.DELETE_STORY_FAILURE, error };
  }
}

function getStoriesByUsername(
  username,
  service = storyActions.getStoriesByUsername
) {
  return (dispatch) => {
    dispatch(request(username));

    return service(username).then(
      (stories) => {
        dispatch(success(stories.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  function request(username) {
    return { type: storyConstants.DELETE_STORY_REQUEST, username };
  }

  function success(stories) {
    return { type: storyConstants.DELETE_STORY_SUCCESS, stories };
  }

  function failure(error) {
    return { type: storyConstants.DELETE_STORY_FAILURE, error };
  }
}
