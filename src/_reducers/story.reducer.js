import { storyConstants } from "../_constants";

export function users(state = {}, action) {
  switch (action.type) {
    case storyConstants.GETPAGED_STORIES_REQUEST:
      return {
        loading: true,
      };
    case storyConstants.GETPAGED_STORIES_SUCCESS:
      return {
        stories: action.stories.data.content,
        page: action.stories.data.page,
        totalElement: action.stories.data.totalElement,
        totalPages: action.stories.data.totalPages,
        isLast: action.stories.data.last,
        currentPage: 0,
      };
    case storyConstants.GETPAGED_STORIES_FAILURE: {
      return {
        error: action.error,
      };
    }
    default:
      return state;
  }
}
