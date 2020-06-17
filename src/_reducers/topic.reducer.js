import { topicContants } from "../_constants";
import { topicService } from "../_services";

const initialState = {
  loading: false,
  content: [],
  error: null,
  currentTopic: null,
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
    case topicContants.GET_TOPIC_BY_NAME_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case topicContants.GET_TOPIC_BY_NAME_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentTopic: action.topic,
      };
    }
    case topicContants.GET_TOPIC_BY_NAME_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
