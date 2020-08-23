import { storyActions } from "../../_actions";

import { storyConstants } from "../../_constants";

import { storeMiddlewares, mockServiceCreator } from "../_testHelpers";

describe("Test for the story actions", () => {
  beforeEach(() => {
    storeMiddlewares.clearActions();
  });

  const expectedBody = {
    data: { success: true },
  };

  test("should create an action to getPagedStories", async () => {
    const requiredBody = {
      content: [
        {
          id: 12,
          title: "Dummy title",
          description: "Dummy description",
        },
      ],
    };

    await storeMiddlewares
      .dispatch(
        storyActions.getPagedStories(12, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { page: 12, type: "GETPAGED_STORIES_REQUEST" },
          { stories: { success: true }, type: "GETPAGED_STORIES_SUCCESS" }
        )
      );
  });

  test("should create an action to changePage", () => {
    const page = 12;

    const expectedAction = {
      type: storyConstants.CHANGE_PAGE,
      page,
    };

    expect(storyActions.changePage(page)).toEqual(expectedAction);
  });

  test("should create an action to getStoryById", async () => {
    const requiredBody = {
      content: [
        {
          id: 12,
          title: "Dummy title",
          description: "Dummy description",
        },
      ],
    };

    await storeMiddlewares
      .dispatch(storyActions.getStoryById(12, mockServiceCreator(expectedBody)))
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { id: 12, type: "GETPAGED_STORIES_REQUEST" },
          { story: { success: true }, type: "GET_STORY_BY_ID_SUCCESS" }
        )
      );
  });

  test("should create an action to castLove", async () => {
    const requiredBody = {
      id: 12,
      title: "Dummy title",
      description: "Description dumnmy",
    };

    await storeMiddlewares
      .dispatch(
        storyActions.castLove(requiredBody, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            storyId: {
              description: "Description dumnmy",
              id: 12,
              title: "Dummy title",
            },
            type: "CAST_LOVE_REQUEST",
          },
          { story: { data: { success: true } }, type: "CAST_LOVE_SUCCESS" }
        )
      );
  });

  test("should create an action to unCastLove", async () => {
    const requiredBody = {
      id: 12,
      title: "Dummy title",
      description: "Description dumnmy",
    };

    await storeMiddlewares
      .dispatch(
        storyActions.unCastLove(requiredBody, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            storyId: {
              description: "Description dumnmy",
              id: 12,
              title: "Dummy title",
            },
            type: "UNCAST_LOVE_REQUEST",
          },
          { story: { data: { success: true } }, type: "UNCAST_LOVE_SUCCESS" }
        )
      );
  });

  test("should create an action to create", async () => {
    const requiredBody = {
      id: 12,
      title: "Dummy title",
      description: "Description dumnmy",
    };

    await storeMiddlewares
      .dispatch(
        storyActions.create(requiredBody, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            requestStory: {
              description: "Description dumnmy",
              id: 12,
              title: "Dummy title",
            },
            type: "CREATE_STORY_REQUEST",
          },
          { type: "CREATE_STORY_SUCCESS" },
          { message: "Story created successful", type: "ALERT_SUCCESS" }
        )
      );
  });

  test("should create an action to deleteStory", async () => {
    const requiredBody = 12;

    await storeMiddlewares
      .dispatch(
        storyActions.deleteStory(requiredBody, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { id: 12, type: "DELETE_STORY_REQUEST" },
          { index: 12, type: "DELETE_STORY_SUCCESS" },
          { message: "Story deleted successfully", type: "ALERT_SUCCESS" }
        )
      );
  });

  test("should create an action to getStoriesByUsername", async () => {
    const requiredBody = 12;

    await storeMiddlewares
      .dispatch(
        storyActions.getStoriesByUsername(
          requiredBody,
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GETPAGED_STORIES_BY_USERNAME_REQUEST", username: 12 },
          { error: undefined, type: "GETPAGED_STORIES_BY_USERNAME_FAILURE" },
          { message: undefined, type: "ALERT_ERROR" }
        )
      );
  });
});
