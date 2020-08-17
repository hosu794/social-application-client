import { comment } from "../../_reducers/comment.reducer";
import { commentConstants } from "../../_constants";
import { mockComment } from "../_testHelpers";

let arrayOfCommentsAfterDelete = [
  {
    id: 1,
    body: "Some body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
  {
    id: 2,
    body: "Some body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
];

let arrayOfComments = [
  {
    id: 1,
    body: "Some body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
  {
    id: 2,
    body: "Some body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
  {
    id: 13,
    body: "Changed body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
];

let updatedArrayOfComments = [
  {
    id: 1,
    body: "Some body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
  {
    id: 2,
    body: "Some body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
  {
    id: 13,
    body: "Changed body",
    createdBy: {
      id: 12,
      name: "Joe Doe",
      username: "exampleusername",
      downloadAvatar: "dsdasdasdasdasdadas.png",
    },
  },
];

let stateAfterDelete = {
  page: 0,
  loading: false,
  currentComment: {
    body: "",
    id: null,
    createdBy: {},
  },
  content: arrayOfCommentsAfterDelete,
  size: 0,
  totalPages: 0,
  error: null,
  updating: true,
  creating: false,
  loaded: false,
  deleting: true,
};

const stateWithComments = {
  page: 0,
  loading: false,
  currentComment: {
    body: "",
    id: null,
    createdBy: {},
  },
  content: arrayOfComments,
  size: 0,
  totalPages: 0,
  error: null,
  updating: false,
  creating: false,
  loaded: false,
};

const updatedState = {
  page: 0,
  loading: false,
  currentComment: {
    body: "",
    id: null,
    createdBy: {},
  },
  content: updatedArrayOfComments,
  size: 0,
  totalPages: 0,
  error: null,
  updating: false,
  creating: false,
  loaded: false,
};

const initialState = {
  page: 0,
  loading: false,
  currentComment: {
    body: "",
    id: null,
    createdBy: {},
  },
  content: [],
  size: 0,
  totalPages: 0,
  error: null,
  updating: false,
  creating: false,
  loaded: false,
};

const changedComment = {
  id: 13,
  body: "Changed body",
  createdBy: {
    id: 12,
    name: "Joe Doe",
    username: "exampleusername",
    downloadAvatar: "dsdasdasdasdasdadas.png",
  },
};

let mockError = new Error("File Upload Error");

describe("Tests for the comment reducers", () => {
  test("should return initialState", () => {
    expect(comment(undefined, {})).toEqual(initialState);
  });

  test("should handles requesting of comments", () => {
    expect(
      comment(initialState, { type: commentConstants.GET_ALL_COMMENTS_REQUEST })
    ).toEqual({
      ...initialState,
      loading: true,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_CREATED_BY_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_USER_ID_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_STORY_ID_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENT_BY_ID_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("should handles success of comments", () => {
    expect(
      comment(initialState, {
        type: commentConstants.GET_ALL_COMMENTS_SUCCESS,
        response: {
          content: [],
          page: 12,
          size: 12,
          totalPages: 34,
        },
      })
    ).toEqual({
      ...initialState,
      loading: false,
      content: [],
      page: 12,
      size: 12,
      totalPages: 34,
      loaded: true,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_CREATED_BY_SUCCESS,
        response: {
          content: [],
          page: 12,
          size: 12,
          totalPages: 34,
        },
      })
    ).toEqual({
      ...initialState,
      loading: false,
      content: [],
      page: 12,
      size: 12,
      totalPages: 34,
      loaded: true,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_STORY_ID_SUCCESS,
        response: {
          content: [],
          page: 12,
          size: 12,
          totalPages: 34,
        },
      })
    ).toEqual({
      ...initialState,
      loading: false,
      content: [],
      page: 12,
      size: 12,
      totalPages: 34,
      loaded: true,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_USER_ID_SUCCESS,
        response: {
          content: [],
          page: 12,
          size: 12,
          totalPages: 34,
        },
      })
    ).toEqual({
      ...initialState,
      loading: false,
      content: [],
      page: 12,
      size: 12,
      totalPages: 34,
      loaded: true,
    });
  });

  test("should handles failure of comments", () => {
    expect(
      comment(initialState, {
        type: commentConstants.GET_ALL_COMMENTS_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loaded: false,
      loading: false,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_CREATED_BY_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loaded: false,
      loading: false,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_STORY_ID_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loaded: false,
      loading: false,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENTS_BY_USER_ID_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loaded: false,
      loading: false,
    });

    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENT_BY_ID_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      error: mockError,
      loaded: false,
      loading: false,
    });
  });

  test("should handles getCommentByIdSuccess", () => {
    expect(
      comment(initialState, {
        type: commentConstants.GET_COMMENT_BY_ID_SUCCESS,
        response: mockComment,
      })
    ).toEqual({
      ...initialState,
      currentComment: mockComment,
      loading: false,
      loaded: true,
    });
  });

  test("should handles createCommentRequest", () => {
    expect(
      comment(initialState, {
        type: commentConstants.CREATE_COMMENT_REQUEST,
      })
    ).toEqual({
      ...initialState,
      creating: true,
    });
  });

  test("should handles createCommentSuccess", () => {
    expect(
      comment(initialState, {
        type: commentConstants.CREATE_COMMENT_SUCCESS,
        response: mockComment,
      })
    ).toEqual({
      ...initialState,
      creating: false,
      content: [...initialState.content, mockComment],
    });
  });

  test("should handles createCommentFailure", () => {
    expect(
      comment(initialState, {
        type: commentConstants.CREATE_COMMENT_FAILURE,
      })
    ).toEqual({
      ...initialState,
      creating: false,
    });
  });

  test("should handles updateCommentRequest", () => {
    expect(
      comment(initialState, {
        type: commentConstants.UPDATE_COMMENT_REQUEST,
      })
    ).toEqual({
      ...initialState,
      updating: true,
    });
  });

  test("should handles updateCommentSuccess", () => {
    expect(
      comment(stateWithComments, {
        type: commentConstants.UPDATE_COMMENT_SUCCESS,
        response: changedComment,
      })
    ).toEqual({
      ...updatedState,
      updating: false,
    });
  });

  test("should handles updateCommentFailure", () => {
    expect(
      comment(initialState, {
        type: commentConstants.UPDATE_COMMENT_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...initialState,
      updating: false,
      error: mockError,
    });
  });

  test("should handles deleteCommentRequest", () => {
    expect(
      comment(stateWithComments, {
        type: commentConstants.DELETE_COMMENT_REQUEST,
        commentId: 13,
      })
    ).toEqual({
      ...stateAfterDelete,
      deleting: true,
      updating: false,
    });
  });

  test("should handles deleteCommentSuccess", () => {
    expect(
      comment(stateWithComments, {
        type: commentConstants.DELETE_COMMENT_SUCCESS,
        response: changedComment,
      })
    ).toEqual({ ...stateWithComments, deleting: false });
  });

  test("should handles deleteCommentFailure", () => {
    expect(
      comment(stateWithComments, {
        type: commentConstants.DELETE_COMMENT_FAILURE,
        error: mockError,
      })
    ).toEqual({
      ...stateWithComments,
      deleting: false,
      error: mockError,
    });
  });

  test("should hadnles clearComments", () => {
    expect(
      comment(stateWithComments, {
        type: commentConstants.CLEAR_COMMENTS,
      })
    ).toEqual({
      ...stateWithComments,
      content: [],
    });
  });
});
