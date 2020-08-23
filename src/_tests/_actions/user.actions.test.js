import { userActions } from "../../_actions";

import { userConstants } from "../../_constants";

import configureMockStore from "redux-mock-store";

import { mockServiceCreator, storeMiddlewares } from "../_testHelpers";

import thunk from "redux-thunk";
import { userService } from "../../_services";
import DirectoryTree from "antd/lib/tree/DirectoryTree";
import { assert } from "sinon";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

let store = mockStore({});

describe("Tests for the User Actions", () => {
  const expectedBody = {
    data: {
      success: true,
    },
  };

  beforeEach(() => {
    storeMiddlewares.clearActions();
  });

  test("should create an action to getCurrentUser", async () => {
    await storeMiddlewares
      .dispatch(userActions.getCurrentUser(mockServiceCreator(expectedBody)))
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GET_CURRENT_USER_REQUEST" },
          { type: "GET_CURRENT_USER_SUCCESS", user: { success: true } }
        )
      );
  });

  test("should create an action to checkUsernameAvailability", async () => {
    await storeMiddlewares
      .dispatch(
        userActions.checkUsernameAvailability(
          "username",
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "CHECK_USER_AVAIBILTY_REQUEST", username: "username" },
          { response: undefined, type: "CHECK_USER_AVAIBILITY_SUCCESS" }
        )
      );
  });

  test("should create an action to checkEmailAvailability", async () => {
    await storeMiddlewares
      .dispatch(
        userActions.checkEmailAvailability(
          "username",
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual({
          response: undefined,
          type: "CHECK_EMAIL_AVAIBILITY_SUCCESS",
        })
      );
  });

  test("should create an action to checkLoveAvailability", async () => {
    await storeMiddlewares
      .dispatch(
        userActions.checkLoveAvailability(
          { req: "some req" },

          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { req: { req: "some req" }, type: "CHECK_LOVE_AVAIBILITY_REQUEST" },
          { response: undefined, type: "CHECK_LOVE_AVAIBILITY_SUCCESS" }
        )
      );
  });

  test("should create an action to getUserStats", async () => {
    await storeMiddlewares
      .dispatch(
        userActions.getUserStats(
          1,

          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(storeMiddlewares.getActions()).toContainEqual(
          { type: "GET_USER_STATS_REQUEST", userId: 1 },
          { response: { success: true }, type: "GET_USER_STATS_SUCCESS" }
        )
      );
  });
});
