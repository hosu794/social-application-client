import { stories } from "../../_reducers/story.reducer";
import { storyConstants } from "../../_constants";
import { initial } from "lodash";

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

const mockStoriesResponse = {
  page: 1,
  content: [],
  size: 12,
  totalPages: 21,
};

const mockError = new Error("New Error failure");

describe("Tests for the stories reducer", () => {
  test("should return initialState", () => {
    expect(stories(undefined, {})).toEqual(initialState);
  });

  test("should handles getPagedStoriesRequest", () => {
    expect(
      stories(initialState, { type: storyConstants.GETPAGED_STORIES_REQUEST })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("should handles getPagedStoriesByUsernameRequest", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GETPAGED_STORIES_BY_USERNAME_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("should handles getPagedStoriesSuccess", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GETPAGED_STORIES_SUCCESS,
        stories: mockStoriesResponse,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      page: mockStoriesResponse.page,
      content: mockStoriesResponse.content,
      size: mockStoriesResponse.size,
      totalPages: mockStoriesResponse.totalPages,
    });
  });

  test("should handles getPagedStoriesByUsernameSuccess", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GETPAGED_STORIES_BY_USERNAME_SUCCESS,
        stories: mockStoriesResponse,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      page: mockStoriesResponse.page,
      content: mockStoriesResponse.content,
      size: mockStoriesResponse.size,
      totalPages: mockStoriesResponse.totalPages,
    });
  });

  test("should handles getPagedStoriesFailure", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GETPAGED_STORIES_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loading: false,
    });
  });

  test("should handles getPagedStoriesByIdFailure", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GET_STORY_BY_ID_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loading: false,
    });
  });

  test("should handles getPagedStoriesByUsernameFailure", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GETPAGED_STORIES_BY_USERNAME_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loading: false,
    });
  });

  test("should handles getChange", () => {
    expect(
      stories(initialState, {
        type: storyConstants.CHANGE_PAGE,
        page: 12,
      })
    ).toEqual({
      ...initialState,
      page: 12,
    });
  });

  test("should handles getStoryByIdSuccess", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GET_STORY_BY_ID_SUCCESS,
        story: mockStoriesResponse,
      })
    ).toEqual({
      ...initialState,
      currentStory: mockStoriesResponse,
      loading: false,
    });
  });

  test("should handles getPagedStoriesRequest", () => {
    expect(
      stories(initialState, {
        type: storyConstants.GETPAGED_STORIES_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("should handles castLoveRequest", () => {
    expect(
      stories(initialState, {
        type: storyConstants.CAST_LOVE_REQUEST,
      })
    ).toEqual({
      ...initialState,
      casting: true,
    });
  });

  test("should handles castLoveSuccess", () => {
    expect(
      stories(initialState, {
        type: storyConstants.CAST_LOVE_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      currentStory: {
        ...initialState.currentStory,
        totalLoves: 1,
      },
    });
  });

  test("should handles castLoveFailure", () => {
    expect(
      stories(initialState, {
        type: storyConstants.CAST_LOVE_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      casting: false,
    });
  });

  test("should handles unCastLoveRequest", () => {
    expect(
      stories(initialState, {
        type: storyConstants.UNCAST_LOVE_REQUEST,
      })
    ).toEqual({
      ...initialState,
      casting: true,
    });
  });

  test("should handles unCastLoveSuccess", () => {
    expect(
      stories(initialState, {
        type: storyConstants.UNCAST_LOVE_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      casting: false,
    });
  });

  test("should handles unCastLoveFailure", () => {
    expect(
      stories(initialState, {
        type: storyConstants.UNCAST_LOVE_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      casting: false,
    });
  });

  test("should handles createStoryRequest", () => {
    expect(
      stories(initialState, {
        type: storyConstants.CREATE_STORY_REQUEST,
      })
    ).toEqual({
      ...initialState,
      creating: true,
    });
  });

  test("should handles createStorySuccess", () => {
    expect(
      stories(initialState, {
        type: storyConstants.CREATE_STORY_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      creating: false,
    });
  });

  test("should handles deleteStoryRequest", () => {
    expect(
      stories(initialState, {
        type: storyConstants.DELETE_STORY_REQUEST,
      })
    ).toEqual({
      ...initialState,
      deleting: true,
    });
  });

  test("should handles deleteStorySuccess", () => {
    expect(
      stories(initialState, {
        type: storyConstants.DELETE_STORY_SUCCESS,
        index: 12,
      })
    ).toEqual({
      ...initialState,
      deleting: false,
    });
  });

  test("should handles deleteStoryFailure", () => {
    expect(
      stories(initialState, {
        type: storyConstants.DELETE_STORY_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      deleting: false,
      error: mockError,
    });
  });
});
