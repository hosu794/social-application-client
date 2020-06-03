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
        loading: false,
        page: action.stories.page,
        content: action.stories.content,
        size: action.stories.size,
        totalPages: action.stories.totalPages,
      };
    case storyConstants.GETPAGED_STORIES_FAILURE: {
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
    default:
      return state;
  }
}
