import { storyConstants } from "../_constants";

const initialState = {
  page: 0,
  loading: false,
  currentStory: {
    topic: {},
    createdBy: {},
    id: null,
    title: "",
    description: "",
    createdBy: {},
    totalLoves: 0,
  },
  content: [],
  size: 0,
  totalPages: 0,
  error: null,
  casting: false,
};

export function stories(state = initialState, action) {
  switch (action.type) {
    case storyConstants.GETPAGED_STORIES_REQUEST:
    case storyConstants.GETPAGED_STORIES_BY_USERNAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case storyConstants.GETPAGED_STORIES_SUCCESS:
    case storyConstants.GETPAGED_STORIES_BY_USERNAME_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.stories.page,
        content: action.stories.content,
        size: action.stories.size,
        totalPages: action.stories.totalPages,
      };
    case storyConstants.GETPAGED_STORIES_FAILURE:
    case storyConstants.GET_STORY_BY_ID_FAILURE:
    case storyConstants.GETPAGED_STORIES_BY_USERNAME_FAILURE: {
      return {
        ...state,
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
        loading: false,
      };
    }
    case storyConstants.GETPAGED_STORIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case storyConstants.CAST_LOVE_REQUEST: {
      return {
        ...state,
        casting: true,
      };
    }
    case storyConstants.CAST_LOVE_SUCCESS: {
      return {
        ...state,
        currentStory: {
          topic: state.currentStory.topic,
          createdBy: state.currentStory.createdBy,
          id: state.currentStory.id,
          body: state.currentStory.body,
          title: state.currentStory.title,
          description: state.currentStory.description,
          createdBy: state.currentStory.createdBy,
          totalLoves: state.currentStory.totalLoves + 1,
        },
        casting: false,
      };
    }
    case storyConstants.CAST_LOVE_FAILURE: {
      return {
        ...state,
        error: action.error,
        casting: false,
      };
    }
    case storyConstants.UNCAST_LOVE_REQUEST: {
      return {
        ...state,
        casting: true,
      };
    }
    case storyConstants.UNCAST_LOVE_SUCCESS: {
      return {
        ...state,
        currentStory: {
          topic: state.currentStory.topic,
          createdBy: state.currentStory.createdBy,
          id: state.currentStory.id,
          body: state.currentStory.body,
          title: state.currentStory.title,
          description: state.currentStory.description,
          createdBy: state.currentStory.createdBy,
          totalLoves:
            state.currentStory.totalLoves != 0
              ? state.currentStory.totalLoves - 1
              : state.currentStory.totalLoves,
        },
        casting: false,
      };
    }
    case storyConstants.UNCAST_LOVE_FAILURE: {
      return {
        ...state,
        error: action.error,
        casting: false,
      };
    }
    case storyConstants.CREATE_STORY_REQUEST: {
      return {
        ...state,
        creating: true,
      };
    }
    case storyConstants.CREATE_STORY_SUCCESS: {
      return {
        ...state,
        creating: false,
      };
    }
    case storyConstants.DELETE_STORY_REQUEST: {
      return {
        ...state,
        deleting: true,
      };
    }
    case storyConstants.DELETE_STORY_SUCCESS: {
      return {
        ...state,
        content: state.content.filter((val) => val.id !== action.index),
        deleting: false,
      };
    }
    case storyConstants.DELETE_STORY_FAILURE: {
      return {
        ...state,
        deleting: false,
        error: action.error,
      };
    }
    case storyConstants.UPDATE_STORY_REQUEST: {
      return {
        ...state,
        updating: true,
      };
    }
    case storyConstants.UPDATE_STORY_SUCCESS: {
      return {
        ...state,
        updating: false,
        content: state.content.map((obj) =>
          obj.id === action.response.id ? action.response : obj
        ),
      };
    }
    default:
      return state;
  }
}
