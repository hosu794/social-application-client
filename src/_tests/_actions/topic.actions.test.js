import { topicActions, storyActions } from "../../_actions";

import { topicContants, storyConstants } from "../../_constants";

import { mockServiceCreator, storeMiddlewares } from "../_testHelpers";

describe("Tests for the Topic Actions", async () => {
  const expectedBody = {
    data: {
      success: true,
    },
  };

  test("should create an action to getAllTopics", async () => {
    const responseBody = {
      content: [
        { id: 12, title: "Dummy Topic Title", description: "Description" },
      ],
    };

    await storeMiddlewares
      .dispatch(topicActions.getAllTopics(mockServiceCreator(expectedBody)))
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GET_TOPICS_REQUEST" },
          { topics: { success: true }, type: "GET_TOPICS_SUCCESS" }
        )
      );
  });

  test("should create an action to getTopicByTitle", async () => {
    const responseBody = {
      id: 12,
      title: "Dummy title",
      description: "Description Dummu",
    };

    await storeMiddlewares
      .dispatch(
        topicActions.getTopicByTitle(
          "anyTitle",
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GET_TOPICS_REQUEST" },
          { topics: { success: true }, type: "GET_TOPICS_SUCCESS" },
          { title: "anyTitle", type: "GET_TOPIC_BY_NAME_REQUEST" },
          { topic: { success: true }, type: "GET_TOPIC_BY_NAME_SUCCESS" }
        )
      );
  });
});
