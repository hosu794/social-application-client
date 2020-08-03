import { userActions } from "../../_actions";

import { userConstants } from "../../_constants";

import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";
import { userService } from "../../_services";
import DirectoryTree from "antd/lib/tree/DirectoryTree";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

let store = mockStore({});

describe("Tests for the User Actions", () => {
  test("should create an action to getCurrentUser", () => {
    const expectedBody = {
      username: "dummyUsername",
      id: null,
      name: "Dummy Name",
    };

    store
      .dispatch(userActions.getCurrentUser(mockServiceCreator(expectedBody)))
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: userConstants.GET_CURRENT_USER_REQUEST,
          },
          {
            type: userConstants.GET_CURRENT_USER_SUCCESS,
            user: expectedBody,
          }
        )
      );
  });

  test("should create an action to checkUsernameAvailability", () => {
    let expectedBody = {
      isAvailable: true,
    };

    store
      .dispatch(
        userActions.checkUsernameAvailability(
          "Dummy username",
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: userConstants.CHECK_USER_AVAIBILITY_REQUEST,
          },
          {
            type: userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS,
          }
        )
      );
  });

  test("should create an action to checkEmailAvailability", () => {
    let expectedBody = {
      isAvailable: false,
    };

    store
      .dispatch(
        userActions.checkEmailAvailability(
          "AnyEmail",
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: userConstants.CHECK_EMAIL_AVAIBILTY_REQUEST,
          },
          {
            type: userConstants.CHECK_EMAIL_AVAIBILITY_SUCCESS,
            response: expectedBody,
          }
        )
      );
  });

  test("should create an action to checkLoveAvailability", () => {
    let expectedBody = {
      isAvailable: false,
    };

    store
      .dispatch(
        userActions.checkLoveAvailability(
          { id: 12 },
          mockServiceCreator(expectedBody)
        )
      )
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: userConstants.CHECK_LOVE_AVAIBILITY_REQUEST,
          },
          {
            type: userConstants.CHECK_LOVE_AVAIBILITY_SUCCESS,
            response: expectedBody,
          }
        )
      );
  });

  test("should create an action to getUserStats", () => {
    let expectedBody = {
      stats: [],
    };

    store
      .dispatch(userActions.getUserStats(12, mockServiceCreator(expectedBody)))
      .then(() =>
        expect(store.getActions()).toContainEquals(
          {
            type: userConstants.GET_USER_STATS_REQUEST,
          },
          {
            type: userConstants.GET_USER_STATS_SUCCESS,
            response: expectedBody,
          }
        )
      );
  });
});
