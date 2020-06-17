import { topicContants } from "../_constants";
import { alertActions } from "./alert.actions";
import { history, handleResponse } from "../_helpers";
import { topicService } from "../_services";

export const topicActions = { getAllTopics, getTopicByTitle };

function getAllTopics() {
  return (dispatch) => {
    dispatch(request());

    topicService.loadTopics().then(
      (topics) => {
        console.log(topics.data);
        dispatch(success(topics.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.message));
        dispatch(alertActions.error(error.response.message));
      }
    );
  };

  function request() {
    return { type: topicContants.GET_TOPICS_REQUEST };
  }

  function success(topics) {
    return { type: topicContants.GET_TOPICS_SUCCESS, topics };
  }

  function failure(error) {
    return { type: topicContants.GET_TOPICS_FAILURE, error };
  }
}

function getTopicByTitle(title) {
  return (dispatch) => {
    dispatch(request(title));

    topicService.getTopicByTitle(title).then(
      (topic) => {
        dispatch(success(topic.data));
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.message));
        dispatch(alertActions.error(error.response.message));
      }
    );
  };
  function request(title) {
    return { type: topicContants.GET_TOPIC_BY_NAME_REQUEST, title };
  }

  function success(topic) {
    return { type: topicContants.GET_TOPIC_BY_NAME_SUCCESS, topic };
  }

  function failure(error) {
    return { type: topicContants.GET_TOPIC_BY_NAME_FAILURE, error };
  }
}
