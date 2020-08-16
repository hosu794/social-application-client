import { commentActions } from "../../_actions";

import { commentConstants } from "../../_constants";

import { mockServiceCreator, storeMiddlewares } from "../_testHelpers";

let expectedBody = {
  content: [],
};

let mockRequest = {
  body: "Some dummy data",
};

describe("Tests for the comment actions", () => {
  beforeEach(() => {
    storeMiddlewares.clearActions();
  });

  test("should create an action to getAllComments", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.getAllComments(12, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            type: commentConstants.GET_ALL_COMMENTS_REQUEST,
            page: 12,
          },
          {
            type: commentConstants.GET_ALL_COMMENTS_SUCCESS,
            response: undefined,
          }
        )
      );
  });

  test("should create an action to getCommentById", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.getCommentById(12, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            type: commentConstants.GET_COMMENT_BY_ID_REQUEST,
            id: 12,
          },
          {
            type: commentConstants.GET_COMMENT_BY_ID_SUCCESS,
            response: undefined,
          }
        )
      );
  });

  test("should create an action to createComment", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.createComment(
          mockRequest,
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            type: "CREATE_COMMENT_REQUEST",
            comment: { body: "Some dummy data" },
          },
          { type: "CREATE_COMMENT_SUCCESS", response: undefined },
          { type: "ALERT_SUCCESS", message: "Comment created successfully" }
        )
      );
  });

  test("should create an action getCommentsByCreatedBy", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.getCommentsByCreatedBy(
          "username",
          12,
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GET_COMMENTS_BY_CREATED_BY_REQUEST", username: "username" },
          { type: "GET_COMMENTS_BY_CREATED_BY_SUCCESS", response: undefined }
        )
      );
  });

  test("should create an action deleteComment", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.deleteComment(12, mockServiceCreator(expectedBody))
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "DELETE_COMMENT_REQUEST", commentId: 12 },
          { type: "DELETE_COMMENT_SUCCESS", response: 12 },
          { type: "ALERT_SUCCESS", message: "Comment deleted successfully" }
        )
      );
  });

  test("should create an action getCommentsByUserId", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.getCommentsByUserId(
          12,
          12,
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GET_COMMENTS_BY_USER_ID_REQUEST", userId: 12 },
          { type: "GET_COMMENTS_BY_USER_ID_SUCCESS", response: undefined }
        )
      );
  });

  test("should create an action getCommentsByStoryId", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.getCommentsByStoryId(
          12,
          12,
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GET_COMMENTS_BY_STORY_ID_REQUEST" },
          { response: undefined, type: "GET_COMMENTS_BY_STORY_ID_SUCCESS" }
        )
      );
  });

  test("should create an action getCommentsByStoryId", async () => {
    await storeMiddlewares
      .dispatch(
        commentActions.updateComment(
          mockRequest,
          12,
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          {
            type: "UPDATE_COMMENT_REQUEST",
            commentRequest: { body: "Some dummy data" },
            commentId: 12,
          },
          { type: "UPDATE_COMMENT_SUCCESS", response: undefined },
          { type: "ALERT_SUCCESS", message: "Comment updated successfully" }
        )
      );
  });

  test("should create an action clearComments", async () => {
    const expectedAction = {
      type: commentConstants.CLEAR_COMMENTS,
    };

    await expect(commentActions.clearComments()).toEqual(expectedAction);
  });
});
