import { topicActions, storyActions } from "../../_actions";

import { topicContants, storyConstants } from "../../_constants";

import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

let store = mockStore({});

describe("Tests for the Topic Actions", () => {
  test("should create an action to getAllTopics", () => {
    const responseBody = {
      content: [
        { id: 12, title: "Dummy Topic Title", description: "Description" },
      ],
    };

    store
      .dispatch(topicActions.getAllTopics(mockServiceCreator(responseBody)))
      .then(() =>
        expect(store.getActions()).toContainEquals(
          { type: topicContants.GET_TOPICS_REQUEST },
          { type: topicContants.GET_TOPICS_SUCCESS, topic: responseBody }
        )
      );
  });

  test("should create an action to getTopicByTitle", () => {
    const responseBody = {
      id: 12,
      title: "Dummy title",
      description: "Description Dummu",
    };

    store
      .dispatch(
        topicActions.getTopicByTitle("title", mockServiceCreator(responseBody))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: topicContants.GET_TOPIC_BY_NAME_REQUEST,
          },
          {
            type: topicContants.GET_TOPIC_BY_NAME_SUCCESS,
            topic: responseBody,
          }
        )
      );
  });
});
