import { storyConstants } from "../_constants";

const initialState = {
  page: 0,
  loading: false,
};

export function stories(state = initialState, action) {
  switch (action.type) {
    case storyConstants.GETPAGED_STORIES_REQUEST:
      return {
        loading: true,
      };
    case storyConstants.GETPAGED_STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.stories.page,
        content: action.stories.content,
        size: action.stories.size,
        totalPages: action.stories.totalPages,
      };
    case storyConstants.GETPAGED_STORIES_FAILURE:
    case storyConstants.GET_STORY_BY_ID_FAILURE: {
      return {
        error: action.error,
        loading: false,
      };
    }
    case storyConstants.CHANGE_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }
    case storyConstants.GET_STORY_BY_ID_SUCCESS: {
      return {
        ...state,
        currentStory: action.story,
      };
    }
    case storyConstants.GETPAGED_STORIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}
