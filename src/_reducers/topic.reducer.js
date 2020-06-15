import { topicContants } from "../_constants";
import { topicService } from "../_services";

const initialState = {
  loading: false,
  content: [],
  error: null,
};

export function topics(state = initialState, action) {
  switch (action.type) {
    case topicContants.GET_TOPICS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case topicContants.GET_TOPICS_SUCCESS: {
      return {
        ...state,
        content: action.topics.content,
        loading: false,
      };
    }
    case topicContants.GET_TOPICS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  }
}
