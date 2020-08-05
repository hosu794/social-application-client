import { storyActions } from "../../_actions";

import { storyConstants } from "../../_constants";

import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

let store = mockStore({});

describe("Test for the story actions", () => {
  test("should create an action to getPagedStories", () => {
    const requiredBody = {
      content: [
        {
          id: 12,
          title: "Dummy title",
          description: "Dummy description",
        },
      ],
    };

    store
      .dispatch(
        storyActions.getPagedStories(12, mockServiceCreator(requiredBody))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: storyConstants.GETPAGED_STORIES_REQUEST,
          },
          {
            type: storyConstants.GETPAGED_STORIES_SUCCESS,
            stories: requiredBody,
          }
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

  test("should create an action to getStoryById", () => {
    const requiredBody = {
      content: [
        {
          id: 12,
          title: "Dummy title",
          description: "Dummy description",
        },
      ],
    };

    store
      .dispatch(storyActions.getStoryById(12, mockServiceCreator(requiredBody)))
      .then(() =>
        expect(store.getActions()).toContainEquals(
          { type: storyConstants.GET_STORY_BY_ID_REQUEST },
          { type: storyConstants.GET_STORY_BY_ID_SUCCESS, story: requiredBody }
        )
      );
  });

  test("should create an action to castLove", () => {
    const requiredBody = {
      id: 12,
      title: "Dummy title",
      description: "Description dumnmy",
    };

    store
      .dispatch(
        storyActions.castLove(requiredBody, mockServiceCreator(requiredBody))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          { type: storyConstants.CAST_LOVE_REQUEST },
          { type: storyConstants.CAST_LOVE_SUCCESS, story: requiredBody }
        )
      );
  });

  test("should create an action to unCastLove", () => {
    const requiredBody = {
      id: 12,
      title: "Dummy title",
      description: "Description dumnmy",
    };

    store
      .dispatch(
        storyActions.unCastLove(requiredBody, mockServiceCreator(requiredBody))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          { type: storyConstants.UNCAST_LOVE_REQUEST },
          { type: storyConstants.UNCAST_LOVE_SUCCESS, story: requiredBody }
        )
      );
  });

  test("should create an action to create", () => {
    const requiredBody = {
      id: 12,
      title: "Dummy title",
      description: "Description dumnmy",
    };

    store
      .dispatch(
        storyActions.create(requiredBody, mockServiceCreator(requiredBody))
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          { type: storyConstants.CREATE_STORY_REQUEST },
          { type: storyConstants.CREATE_STORY_SUCCESS }
        )
      );
  });

  test("should create an action to deleteStory", () => {
    const requiredBody = 12;

    store
      .dispatch(storyActions.deleteStory(12, mockServiceCreator(requiredBody)))
      .then(() =>
        expect(store.getActions()).toContainEquals(
          { type: storyConstants.DELETE_STORY_REQUEST },
          { type: storyConstants.DELETE_STORY_SUCCESS, index: requiredBody }
        )
      );
  });

  test("should create an action to getStoriesByUsername", () => {
    const requiredBody = 12;

    store
      .dispatch(
        storyActions.getStoriesByUsername(
          "dummyUsername",
          12,
          mockServiceCreator(requiredBody)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          { type: storyConstants.GETPAGED_STORIES_BY_USERNAME_REQUEST },
          {
            type: storyConstants.GETPAGED_STORIES_BY_USERNAME_SUCCESS,
            story: requiredBody,
          }
        )
      );
  });
});
