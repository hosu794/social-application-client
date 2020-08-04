import { topics } from "../../_reducers/topic.reducer";
import { topicService } from "../../_services";
import { topicContants } from "../../_constants";
import { intersectionWith } from "lodash";

let initialState = {
  loading: false,
  content: [],
  error: null,
  currentTopic: null,
};

let mockError = new Error("Topic Reducer Error");

let mockTopic = {
  id: 12,
  title: "Topic DUmmy",
  description: "Description",
};

describe("Tests for the topic reducer", () => {
  test("should return intialState", () => {
    expect(topics(undefined, {})).toEqual(initialState);
  });

  test("should handles getTopicsRequest ", () => {
    expect(
      topics(initialState, { type: topicContants.GET_TOPICS_REQUEST })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("should handles getTopicsSuccess", () => {
    expect(
      topics(initialState, {
        type: topicContants.GET_TOPICS_SUCCESS,
        topics: { content: [] },
      })
    ).toEqual({
      ...initialState,
      content: [],
      loading: false,
    });
  });

  test("should handles getTopicsFailure", () => {
    expect(
      topics(initialState, {
        type: topicContants.GET_TOPICS_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });

  test("should handles getTopicsByNameRequest ", () => {
    expect(
      topics(initialState, {
        type: topicContants.GET_TOPIC_BY_NAME_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("should handles getTopicsByNameSuccess", () => {
    expect(
      topics(initialState, {
        type: topicContants.GET_TOPIC_BY_NAME_SUCCESS,
        topic: mockTopic,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      currentTopic: mockTopic,
    });
  });

  test("should handles getTopicsByNameFailure", () => {
    expect(
      topics(initialState, {
        type: topicContants.GET_TOPIC_BY_NAME_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
});
